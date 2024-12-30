window.addEventListener('scroll', function () {
  const voltarTopoBtn = document.querySelector('.voltarTopo');
  if (window.scrollY > 50) {
    voltarTopoBtn.classList.add('scrolled');
  } else {
    voltarTopoBtn.classList.remove('scrolled');
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.getElementById('navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');
  function updateTogglerIcon() {
    if (navbarCollapse.classList.contains('show')) {
      toggler.classList.remove('toggler-icon-fechado');
      toggler.classList.add('toggler-icon-aberto');
    } else {
      toggler.classList.remove('toggler-icon-aberto');
      toggler.classList.add('toggler-icon-fechado');
    }
  }
  toggler.addEventListener('click', function () {
    setTimeout(updateTogglerIcon, 1);
  });
  const observer = new MutationObserver(updateTogglerIcon);
  observer.observe(navbarCollapse, { attributes: true, attributeFilter: ['class'] });
  updateTogglerIcon();
});
document.addEventListener('DOMContentLoaded', () => {
  const contadores = document.querySelectorAll('.contador');
  function animateCounter(counterElement) {
      const target = +counterElement.getAttribute('data-target');
      anime({
          targets: counterElement,
          innerHTML: [0, target],
          easing: 'linear',
          round: 1, 
          duration: 1000 
      });
  }
  const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5 
  };
  function observerCallback(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target); 
          }
      });
  }
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  contadores.forEach(contador => {
      observer.observe(contador);
  });
});