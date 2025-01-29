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
    nav__1: "Home",
    nav__2: "Quem Somos",
    nav__3: "Produtos",
    nav__4: "Logística",
    nav__5: "Garantias",
    nav__6: "Contato",
    home__1: "<span>Unifrutas:</span> Conectando o Melhor do Brasil ao Mundo",
    home__2: "Na Unifrutas, unimos qualidade, sustentabilidade e eficiência para levar o sabor e a riqueza do Brasil aos mercados internacionais, sem deixar de atender com excelência o mercado nacional.",
    home__3: "QUERO EXPORTAR",
    sobre__1: "QUEM SOMOS",
    sobre__2: "A Unifrutas nasceu da paixão por frutas e da vontade de levar o melhor da nossa terra para o mundo. Tudo começou em Petrolina, onde nosso fundador iniciou sua trajetória auxiliar administrativo em uma associação de produtores. Com dedicação, ele se especializou em exportação, participando de cursos, feiras e construindo uma rede de contatos que o levou a trabalhar como gerente em uma empresa conceituada. Após anos de experiência, ele decidiu criar a Unifrutas, uma empresa que nasceu pequena, mas com grandes sonhos. Hoje, cultivamos mangas Keith e Rosa, limões, uvas e gengibre no Sul da Bahia, uma região de solo fértil e clima privilegiado. Nossas mangas são o coração da Unifrutas. A manga Keith, com seu sabor intenso e textura suculenta, já conquistou paladares na França e é um símbolo da qualidade que buscamos em todos os nossos produtos. Já a manga Rosa, delicada e aromática, encanta pelo sabor único e pela doçura que traz em cada pedaço. Ambas são cultivadas com cuidado extremo, desde o plantio até a colheita, para garantir que cheguem até você com o máximo de sabor e frescor.",
    sobre__3: "Na Unifrutas, acreditamos que cada fruta conta uma história, a nossa história de cuidado, respeito e amor pela terra. Quando você escolhe nossos produtos, está escolhendo mais do que um alimento: está escolhendo uma conexão com quem trabalha com carinho para que o melhor da natureza chegue até você. Essa é a Unifrutas: uma empresa que cresce com integridade, qualidade e a missão de fazer parte dos seus momentos mais especiais.",
    sobre__4: "QUERO EXPORTAR",
    sobre__5: "O QUE PRODUZIMOS",
    time__1: "NOSSO TIME",
    card__time1: "Diretor Unifrutas",
    dados__1primeiro: "MAIS DE",
    dados__1segundo: "COLABORADORES",
    dados__2primeiro: "MAIS DE",
    dados__2segundo: "EXPORTAÇÕES",
    dados__3primeiro: "MAIS DE",
    dados__3segundo: "PAÍSES ATENDIDOS",
    produtos__1: "O QUE EXPORTAMOS",
    manga__keitt: "MANGA KEITT",
    produtos__mangakeitt: "A manga Keitt é uma fruta de formato oval. Exportamos a manga Keitt para diversos mercados internacionais. Com sabor doce e suculento, a fruta é amplamente utilizada no preparo de sucos, saladas, sobremesas e pratos gourmet, além de ser rica em vitaminas A e C, fibras e antioxidante ",
    manga__rosa: "MANGA ROSA",
    produtos__mangarosa: "A manga Rosa é uma fruta de casca amarela com tons rosados e formato arredondado. Exportamos a manga Rosa para diversos mercados internacionais. Com sabor doce e aroma marcante, a fruta é perfeita para sucos, geleias, sobremesas e consumo direto, além de ser rica em vitamina C, betacaroteno e antioxidantes.",
    manga__haden: "MANGA HADEN",
    produtos__mangahaden: "A manga Haden é uma fruta de casca vermelha e amarela, com manchas verdes e formato oval. Exportamos a manga Haden para diversos mercados internacionais. Com sabor doce e levemente ácido, a fruta é versátil, sendo usada em sucos, saladas, pratos doces e salgados, além de ser rica em vitaminas A e C, fibras e minerais.",
    manga__palmer: "MANGA PALMER",
    produtos__mangapalmer: "A manga Palmer é uma fruta de casca avermelhada e formato alongado. Exportamos a manga Palmer para diversos mercados internacionais. Com sabor doce e textura firme, a fruta é ideal para consumo in natura, sucos, smoothies e pratos sofisticados, além de ser rica em vitaminas, minerais e fibras.",
    limao__tahiti: "LIMÃO TAHITI",
    produtos__limaotahiti: "O limão Tahiti é uma fruta cítrica de casca fina, lisa e verde. Exportamos o limão Tahiti para diversos mercados internacionais. Com sabor ácido e refrescante, a fruta é amplamente utilizada no preparo de sucos, drinks, temperos e sobremesas, além de ser rica em vitamina C e antioxidantes.",
    gengibre: "GENGIBRE",
    produtos__gengibre: "O gengibre é uma raiz de casca marrom e interior amarelado, com aroma e sabor picantes. Exportamos o gengibre para diversos mercados internacionais. Amplamente utilizado na culinária, em chás, sucos, temperos e pratos doces e salgados, o gengibre é conhecido por suas propriedades anti-inflamatórias, digestivas e ricas em antioxidantes.",
    uva: "UVA",
    produtos__uva: "A uva é uma fruta de casca fina e cores variadas, como verde, roxa e vermelha. Exportamos uvas para diversos mercados internacionais. Com sabor doce e suculento, a fruta é perfeita para consumo in natura, sucos, vinhos, geleias e sobremesas, além de ser rica em antioxidantes, vitaminas e minerais, como a vitamina C e o potássio.",
    produtos__btn: "SABER MAIS",
    logistica__1: "Do Plantio até Você",
    logistica__2: "Na Unifrutas, nos orgulhamos em oferecer frutas, cultivadas com cuidado e entregues com excelência. Nosso processo garante qualidade, sustentabilidade e segurança em cada etapa. Veja como transformamos o que vem do campo em produtos de confiança:",
    logistica__3: "1-Plantio com Cuidado",
    logistica__4: "Trabalhamos com produtores especializados, utilizando práticas agrícolas sustentáveis e selecionando solo, sementes e técnicas que respeitam a natureza, garantindo safras saudáveis desde o início.",
    logistica__5: "2-Colheita no Ponto Ideal",
    logistica__6: "Realizamos a colheita na hora certa, quando as frutas atingem o auge da maturidade, garantindo sabor, aparência e frescor. Nosso time segue padrões rigorosos para preservar cada produto.",
    logistica__7: "3-Seleção e Controle de Qualidade",
    logistica__8: "Após a colheita, selecionamos criteriosamente os melhores frutos. Apenas os produtos que atendem aos nossos padrões elevados de tamanho, cor e integridade seguem adiante.",
    logistica__9: "4-Embalagem e Transporte Seguro",
    logistica__10: "Para preservar a máxima frescura, usamos embalagens modernas e sustentáveis. Nossa logística refrigerada assegura que tudo chegue intacto e pronto, em mercados nacionais e internacionais.",
    logistica__11: "5-Nas Gôndolas, Pronto para Você",
    logistica__12: "O resultado? Produtos que chegam ao consumidor com qualidade e sabor incomparáveis, prontos para proporcionar saúde e bem-estar à mesa de cada família.",
    qualidade__1: "GARANTIA DE QUALIDADE",
    qualidade__2: "Nossas certificações garantem qualidade, segurança alimentar e sustentabilidade, atendendo aos mercados mais exigentes do mundo, como Europa, EUA e Ásia.",
    contato__1: "NOS ENCONTRE",
    footer__1: "Menu",
    footer__2: "Páginas",
    footer__3: "Contato",
    copy__1: "© Unifrutas. Todos os direitos reservados.",
    pagina__1: "ESPECIFICAÇÕES",
    pagina__2: "TABELA NUTRICIONAL",
    pagina__3: "SAZONALIDADE",
    pagina__4: "AQUI RESPONDEMOS SUAS DÚVIDAS",
    pagina__5: "QUERO EXPORTAR",
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
  if (!translations[language]) {
    console.error("Idioma não suportado:", language);
    return;
  }

  Object.entries(translations[language]).forEach(([key, value]) => {
    const element = document.querySelector(`.${key}`);
    if (element) {
      if (value.includes("<span>")) {
        element.innerHTML = value; 
      } else {
        element.textContent = value; 
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('pt');
});