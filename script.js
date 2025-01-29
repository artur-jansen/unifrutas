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

const translations = {
  pt: {
    nav__1: "",
    nav__2: "",
    nav__3: "",
    nav__4: "",
    nav__5: "",
    nav__6: "",
    home__1: "",
    home__2: "",
    home__3: "",
    sobre__1: "",
    sobre__2: "",
    sobre__3: "",
    sobre__4: "",
    sobre__5: "",
    time__1: "",
    card__time1: "",
    dados__1: "",
    dados__2: "",
    dados__3: "",
    produtos__1: "",
    manga__keitt: "",
    produtos__mangakeitt: "",
    manga__rosa: "",
    produtos__mangarosa: "",
    manga__haden: "",
    produtos__mangahaden: "",
    manga__palmer: "",
    produtos__mangapalmer: "",
    limao__tahiti: "",
    produtos__limaotahiti: "",
    gengibre: "",
    produtos__gengibre: "",
    uva: "",
    produtos__uva: "",
    produtos__btn: "",
    logistica__1: "",
    logistica__2: "",
    logistica__3: "",
    logistica__4: "",
    logistica__5: "",
    logistica__6: "",
    logistica__7: "",
    logistica__8: "",
    logistica__9: "",
    logistica__10: "",
    logistica__11: "",
    logistica__12: "",
    qualidade__1: "",
    qualidade__2: "",
    contato__1: "",
    footer__1: "",
    footer__2: "",
    footer__3: "",
    copy__1: "",
  },
  en: {
    nav__1: "",
    nav__2: "",
    nav__3: "",
    nav__4: "",
    nav__5: "",
    nav__6: "",
    home__1: "",
    home__2: "",
    home__3: "",
    sobre__1: "",
    sobre__2: "",
    sobre__3: "",
    sobre__4: "",
    sobre__5: "",
    time__1: "",
    card__time1: "",
    dados__1: "",
    dados__2: "",
    dados__3: "",
    produtos__1: "",
    manga__keitt: "",
    produtos__mangakeitt: "",
    manga__rosa: "",
    produtos__mangarosa: "",
    manga__haden: "",
    produtos__mangahaden: "",
    manga__palmer: "",
    produtos__mangapalmer: "",
    limao__tahiti: "",
    produtos__limaotahiti: "",
    gengibre: "",
    produtos__gengibre: "",
    uva: "",
    produtos__uva: "",
    produtos__btn: "",
    logistica__1: "",
    logistica__2: "",
    logistica__3: "",
    logistica__4: "",
    logistica__5: "",
    logistica__6: "",
    logistica__7: "",
    logistica__8: "",
    logistica__9: "",
    logistica__10: "",
    logistica__11: "",
    logistica__12: "",
    qualidade__1: "",
    qualidade__2: "",
    contato__1: "",
    footer__1: "",
    footer__2: "",
    footer__3: "",
    copy__1: "",
  },
  es: {
    nav__1: "",
    nav__2: "",
    nav__3: "",
    nav__4: "",
    nav__5: "",
    nav__6: "",
    home__1: "",
    home__2: "",
    home__3: "",
    sobre__1: "",
    sobre__2: "",
    sobre__3: "",
    sobre__4: "",
    sobre__5: "",
    time__1: "",
    card__time1: "",
    dados__1: "",
    dados__2: "",
    dados__3: "",
    produtos__1: "",
    manga__keitt: "",
    produtos__mangakeitt: "",
    manga__rosa: "",
    produtos__mangarosa: "",
    manga__haden: "",
    produtos__mangahaden: "",
    manga__palmer: "",
    produtos__mangapalmer: "",
    limao__tahiti: "",
    produtos__limaotahiti: "",
    gengibre: "",
    produtos__gengibre: "",
    uva: "",
    produtos__uva: "",
    produtos__btn: "",
    logistica__1: "",
    logistica__2: "",
    logistica__3: "",
    logistica__4: "",
    logistica__5: "",
    logistica__6: "",
    logistica__7: "",
    logistica__8: "",
    logistica__9: "",
    logistica__10: "",
    logistica__11: "",
    logistica__12: "",
    qualidade__1: "",
    qualidade__2: "",
    contato__1: "",
    footer__1: "",
    footer__2: "",
    footer__3: "",
    copy__1: "",
  }
};

function changeLanguage(language) {
  if (translations[language]) {
    document.getElementById("nav__1").textContent = translations[language].nav__1;
    document.getElementById("nav__2").textContent = translations[language].nav__2;
    document.getElementById("nav__3").textContent = translations[language].nav__3;
    document.getElementById("nav__4").textContent = translations[language].nav__4;
    document.getElementById("nav__5").textContent = translations[language].nav__5;
    document.getElementById("nav__6").textContent = translations[language].nav__6;
    document.getElementById("home__1").textContent = translations[language].home__1;
    document.getElementById("home__2").textContent = translations[language].home__2;
    document.getElementById("home__3").textContent = translations[language].home__3;
    document.getElementById("sobre__1").textContent = translations[language].sobre__1;
    document.getElementById("sobre__2").textContent = translations[language].sobre__2;
    document.getElementById("sobre__3").textContent = translations[language].sobre__3;
    document.getElementById("sobre__4").textContent = translations[language].sobre__4;
    document.getElementById("sobre__5").textContent = translations[language].sobre__5;
    document.getElementById("time__1").textContent = translations[language].time__1;
    document.getElementById("card__time-1").textContent = translations[language].card__time1;
    document.getElementById("dados__1").textContent = translations[language].dados__1;
    document.getElementById("dados__2").textContent = translations[language].dados__2;
    document.getElementById("dados__3").textContent = translations[language].dados__3;
    document.getElementById("produtos__1").textContent = translations[language].produtos__1;
    document.getElementById("manga__keitt").textContent = translations[language].manga__keitt;
    document.getElementById("produtos__manga-keitt").textContent = translations[language].produtos__mangakeitt;
    document.getElementById("manga__rosa").textContent = translations[language].manga__rosa;
    document.getElementById("produtos__manga-rosa").textContent = translations[language].produtos__mangarosa;
    document.getElementById("manga__haden").textContent = translations[language].manga__haden;
    document.getElementById("produtos__manga-haden").textContent = translations[language].produtos__mangahaden;
    document.getElementById("manga__palmer").textContent = translations[language].manga__palmer;
    document.getElementById("produtos__manga-palmer").textContent = translations[language].produtos__mangapalmer;
    document.getElementById("limao__tahiti").textContent = translations[language].limao__tahiti;
    document.getElementById("produtos__limao-tahiti").textContent = translations[language].produtos__limaotahiti;
    document.getElementById("gengibre").textContent = translations[language].gengibre;
    document.getElementById("produtos__gengibre").textContent = translations[language].produtos__gengibre;
    document.getElementById("uva").textContent = translations[language].uva;
    document.getElementById("produtos__uva").textContent = translations[language].produtos__uva;
    document.getElementById("produtos__btn").textContent = translations[language].produtos__btn;
    document.getElementById("logistica__1").textContent = translations[language].logistica__1;
    document.getElementById("logistica__2").textContent = translations[language].logistica__2;
    document.getElementById("logistica__3").textContent = translations[language].logistica__3;
    document.getElementById("logistica__4").textContent = translations[language].logistica__4;
    document.getElementById("logistica__5").textContent = translations[language].logistica__5;
    document.getElementById("logistica__6").textContent = translations[language].logistica__6;
    document.getElementById("logistica__7").textContent = translations[language].logistica__7;
    document.getElementById("logistica__8").textContent = translations[language].logistica__8;
    document.getElementById("logistica__9").textContent = translations[language].logistica__9;
    document.getElementById("logistica__10").textContent = translations[language].logistica__10;
    document.getElementById("logistica__11").textContent = translations[language].logistica__11;
    document.getElementById("logistica__12").textContent = translations[language].logistica__12;
    document.getElementById("qualidade__1").textContent = translations[language].qualidade__1;
    document.getElementById("qualidade__2").textContent = translations[language].qualidade__2;
    document.getElementById("contato__1").textContent = translations[language].contato__1;
    document.getElementById("footer__1").textContent = translations[language].footer__1;
    document.getElementById("footer__2").textContent = translations[language].footer__2;
    document.getElementById("footer__3").textContent = translations[language].footer__3;
    document.getElementById("copy__1").textContent = translations[language].copy__1;
  } else {
    console.error("Idioma não suportado:", language);
  }
}

changeLanguage('pt');