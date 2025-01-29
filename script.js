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
    sobre__2: "A Unifrutas nasceu da paixão por frutas e da vontade de levar o melhor da nossa terra para o mundo. Tudo começou em Petrolina, onde nosso fundador iniciou sua trajetória como auxiliar administrativo em uma associação de produtores. Com dedicação, ele se especializou em exportação, participando de cursos, feiras e construindo uma rede de contatos que o levou a trabalhar como gerente em uma empresa conceituada. Após anos de experiência, ele decidiu criar a Unifrutas, uma empresa que nasceu pequena, mas com grandes sonhos. Hoje, cultivamos mangas Keith e Rosa, limões, uvas e gengibre no Sul da Bahia, uma região de solo fértil e clima privilegiado. Nossas mangas são o coração da Unifrutas. A manga Keith, com seu sabor intenso e textura suculenta, já conquistou paladares na França e é um símbolo da qualidade que buscamos em todos os nossos produtos. Já a manga Rosa, delicada e aromática, encanta pelo sabor único e pela doçura que traz em cada pedaço. Ambas são cultivadas com cuidado extremo, desde o plantio até a colheita, para garantir que cheguem até você com o máximo de sabor e frescor.",
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
    produtos__mangakeitt: "A manga Keitt é uma fruta de formato oval. Exportamos a manga Keitt para diversos mercados internacionais. Com sabor doce e suculento, a fruta é amplamente utilizada no preparo de sucos, saladas, sobremesas e pratos gourmet, além de ser rica em vitaminas A e C, fibras e antioxidantes.",
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
    produto__btnlinkIndex: "SABER MAIS",
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
    nav__1: "Home",
    nav__2: "About Us",
    nav__3: "Products",
    nav__4: "Logistics",
    nav__5: "Guarantees",
    nav__6: "Contact",
    home__1: "<span>Unifrutas:</span> Connecting the Best of Brazil to the World",
    home__2: "At Unifrutas, we combine quality, sustainability, and efficiency to bring the flavor and richness of Brazil to international markets, while also providing excellent service to the domestic market.",
    home__3: "I WANT TO EXPORT",
    sobre__1: "WHO WE ARE",
    sobre__2: "Unifrutas was born from a passion for fruits and the desire to bring the best of our land to the world. It all started in Petrolina, where our founder began his journey as an administrative assistant in a producers' association. With dedication, he specialized in export, participating in courses, fairs, and building a network of contacts that led him to work as a manager in a reputable company. After years of experience, he decided to create Unifrutas, a company that started small but with big dreams. Today, we cultivate Keith and Rosa mangoes, lemons, grapes, and ginger in Southern Bahia, a region with fertile soil and a privileged climate. Our mangoes are the heart of Unifrutas. The Keith mango, with its intense flavor and juicy texture, has already won palates in France and is a symbol of the quality we seek in all our products. The Rosa mango, delicate and aromatic, delights with its unique flavor and the sweetness it brings in every bite. Both are cultivated with extreme care, from planting to harvesting, to ensure they reach you with maximum flavor and freshness.",
    sobre__3: "At Unifrutas, we believe that each fruit tells a story, our story of care, respect, and love for the land. When you choose our products, you are choosing more than just food: you are choosing a connection with those who work with care to bring the best of nature to you. This is Unifrutas: a company that grows with integrity, quality, and the mission to be part of your most special moments.",
    sobre__4: "I WANT TO EXPORT",
    sobre__5: "WHAT WE PRODUCE",
    time__1: "OUR TEAM",
    card__time1: "Director of Unifrutas",
    dados__1primeiro: "MORE THAN",
    dados__1segundo: "EMPLOYEES",
    dados__2primeiro: "MORE THAN",
    dados__2segundo: "EXPORTS",
    dados__3primeiro: "MORE THAN",
    dados__3segundo: "COUNTRIES SERVED",
    produtos__1: "WHAT WE EXPORT",
    manga__keitt: "KEITT MANGO",
    produtos__mangakeitt: "The Keitt mango is an oval-shaped fruit. We export Keitt mangoes to various international markets. With a sweet and juicy flavor, the fruit is widely used in the preparation of juices, salads, desserts, and gourmet dishes, and is rich in vitamins A and C, fiber, and antioxidants.",
    manga__rosa: "ROSA MANGO",
    produtos__mangarosa: "The Rosa mango is a fruit with yellow skin and pinkish tones, and a rounded shape. We export Rosa mangoes to various international markets. With a sweet flavor and distinctive aroma, the fruit is perfect for juices, jams, desserts, and direct consumption, and is rich in vitamin C, beta-carotene, and antioxidants.",
    manga__haden: "HADEN MANGO",
    produtos__mangahaden: "The Haden mango is a fruit with red and yellow skin, with green spots and an oval shape. We export Haden mangoes to various international markets. With a sweet and slightly acidic flavor, the fruit is versatile, being used in juices, salads, sweet and savory dishes, and is rich in vitamins A and C, fiber, and minerals.",
    manga__palmer: "PALMER MANGO",
    produtos__mangapalmer: "The Palmer mango is a fruit with reddish skin and an elongated shape. We export Palmer mangoes to various international markets. With a sweet flavor and firm texture, the fruit is ideal for fresh consumption, juices, smoothies, and sophisticated dishes, and is rich in vitamins, minerals, and fiber.",
    limao__tahiti: "TAHITI LIME",
    produtos__limaotahiti: "The Tahiti lime is a citrus fruit with thin, smooth, green skin. We export Tahiti limes to various international markets. With an acidic and refreshing flavor, the fruit is widely used in the preparation of juices, drinks, seasonings, and desserts, and is rich in vitamin C and antioxidants.",
    gengibre: "GINGER",
    produtos__gengibre: "Ginger is a root with brown skin and yellowish interior, with a spicy aroma and flavor. We export ginger to various international markets. Widely used in cooking, in teas, juices, seasonings, and sweet and savory dishes, ginger is known for its anti-inflammatory, digestive properties and is rich in antioxidants.",
    uva: "GRAPE",
    produtos__uva: "The grape is a fruit with thin skin and various colors, such as green, purple, and red. We export grapes to various international markets. With a sweet and juicy flavor, the fruit is perfect for fresh consumption, juices, wines, jams, and desserts, and is rich in antioxidants, vitamins, and minerals, such as vitamin C and potassium.",
    produto__btnlinkIndex: "LEARN MORE",
    logistica__1: "From Planting to You",
    logistica__2: "At Unifrutas, we take pride in offering fruits, cultivated with care and delivered with excellence. Our process ensures quality, sustainability, and safety at every stage. See how we transform what comes from the field into trusted products:",
    logistica__3: "1-Careful Planting",
    logistica__4: "We work with specialized producers, using sustainable agricultural practices and selecting soil, seeds, and techniques that respect nature, ensuring healthy crops from the start.",
    logistica__5: "2-Harvesting at the Right Time",
    logistica__6: "We harvest at the right moment, when the fruits reach their peak ripeness, ensuring flavor, appearance, and freshness. Our team follows strict standards to preserve each product.",
    logistica__7: "3-Selection and Quality Control",
    logistica__8: "After harvesting, we carefully select the best fruits. Only products that meet our high standards for size, color, and integrity move forward.",
    logistica__9: "4-Safe Packaging and Transport",
    logistica__10: "To preserve maximum freshness, we use modern and sustainable packaging. Our refrigerated logistics ensure that everything arrives intact and ready, in both national and international markets.",
    logistica__11: "5-On the Shelves, Ready for You",
    logistica__12: "The result? Products that reach consumers with unparalleled quality and flavor, ready to provide health and well-being to every family's table.",
    qualidade__1: "QUALITY GUARANTEE",
    qualidade__2: "Our certifications guarantee quality, food safety, and sustainability, meeting the most demanding markets in the world, such as Europe, the USA, and Asia.",
    contato__1: "FIND US",
    footer__1: "Menu",
    footer__2: "Pages",
    footer__3: "Contact",
    copy__1: "© Unifrutas. All rights reserved.",
    pagina__1: "SPECIFICATIONS",
    pagina__2: "NUTRITIONAL TABLE",
    pagina__3: "SEASONALITY",
    pagina__4: "HERE WE ANSWER YOUR QUESTIONS",
    pagina__5: "I WANT TO EXPORT",
  },
  es: {
    nav__1: "Inicio",
    nav__2: "Quiénes Somos",
    nav__3: "Productos",
    nav__4: "Logística",
    nav__5: "Garantías",
    nav__6: "Contacto",
    home__1: "<span>Unifrutas:</span> Conectando lo Mejor de Brasil al Mundo",
    home__2: "En Unifrutas, unimos calidad, sostenibilidad y eficiencia para llevar el sabor y la riqueza de Brasil a los mercados internacionales, sin dejar de atender con excelencia el mercado nacional.",
    home__3: "QUIERO EXPORTAR",
    sobre__1: "QUIÉNES SOMOS",
    sobre__2: "Unifrutas nació de la pasión por las frutas y el deseo de llevar lo mejor de nuestra tierra al mundo. Todo comenzó en Petrolina, donde nuestro fundador inició su trayectoria como asistente administrativo en una asociación de productores. Con dedicación, se especializó en exportación, participando en cursos, ferias y construyendo una red de contactos que lo llevó a trabajar como gerente en una empresa de renombre. Después de años de experiencia, decidió crear Unifrutas, una empresa que nació pequeña, pero con grandes sueños. Hoy, cultivamos mangos Keith y Rosa, limones, uvas y jengibre en el Sur de Bahía, una región de suelo fértil y clima privilegiado. Nuestros mangos son el corazón de Unifrutas. El mango Keith, con su sabor intenso y textura jugosa, ya ha conquistado paladares en Francia y es un símbolo de la calidad que buscamos en todos nuestros productos. El mango Rosa, delicado y aromático, encanta por su sabor único y la dulzura que trae en cada bocado. Ambos se cultivan con extremo cuidado, desde la siembra hasta la cosecha, para garantizar que lleguen a usted con el máximo sabor y frescura.",
    sobre__3: "En Unifrutas, creemos que cada fruta cuenta una historia, nuestra historia de cuidado, respeto y amor por la tierra. Cuando eliges nuestros productos, estás eligiendo más que un alimento: estás eligiendo una conexión con quienes trabajan con cariño para que lo mejor de la naturaleza llegue a ti. Esta es Unifrutas: una empresa que crece con integridad, calidad y la misión de ser parte de tus momentos más especiales.",
    sobre__4: "QUIERO EXPORTAR",
    sobre__5: "LO QUE PRODUCIMOS",
    time__1: "NUESTRO EQUIPO",
    card__time1: "Director de Unifrutas",
    dados__1primeiro: "MÁS DE",
    dados__1segundo: "COLABORADORES",
    dados__2primeiro: "MÁS DE",
    dados__2segundo: "EXPORTACIONES",
    dados__3primeiro: "MÁS DE",
    dados__3segundo: "PAÍSES ATENDIDOS",
    produtos__1: "LO QUE EXPORTAMOS",
    manga__keitt: "MANGO KEITT",
    produtos__mangakeitt: "El mango Keitt es una fruta de forma ovalada. Exportamos el mango Keitt a diversos mercados internacionales. Con un sabor dulce y jugoso, la fruta se utiliza ampliamente en la preparación de jugos, ensaladas, postres y platos gourmet, además de ser rica en vitaminas A y C, fibra y antioxidantes.",
    manga__rosa: "MANGO ROSA",
    produtos__mangarosa: "El mango Rosa es una fruta de piel amarilla con tonos rosados y forma redondeada. Exportamos el mango Rosa a diversos mercados internacionales. Con un sabor dulce y un aroma distintivo, la fruta es perfecta para jugos, mermeladas, postres y consumo directo, además de ser rica en vitamina C, beta-caroteno y antioxidantes.",
    manga__haden: "MANGO HADEN",
    produtos__mangahaden: "El mango Haden es una fruta de piel roja y amarilla, con manchas verdes y forma ovalada. Exportamos el mango Haden a diversos mercados internacionales. Con un sabor dulce y ligeramente ácido, la fruta es versátil, utilizándose en jugos, ensaladas, platos dulces y salados, además de ser rica en vitaminas A y C, fibra y minerales.",
    manga__palmer: "MANGO PALMER",
    produtos__mangapalmer: "El mango Palmer es una fruta de piel rojiza y forma alargada. Exportamos el mango Palmer a diversos mercados internacionales. Con un sabor dulce y una textura firme, la fruta es ideal para consumo fresco, jugos, batidos y platos sofisticados, además de ser rica en vitaminas, minerales y fibra.",
    limao__tahiti: "LIMA TAJÍN",
    produtos__limaotahiti: "La lima Tahití es una fruta cítrica de piel fina, lisa y verde. Exportamos la lima Tahití a diversos mercados internacionales. Con un sabor ácido y refrescante, la fruta se utiliza ampliamente en la preparación de jugos, bebidas, condimentos y postres, además de ser rica en vitamina C y antioxidantes.",
    gengibre: "JENGIBRE",
    produtos__gengibre: "El jengibre es una raíz de piel marrón y un interior amarillento, con un aroma y sabor picantes. Exportamos jengibre a diversos mercados internacionales. Ampliamente utilizado en la cocina, en tés, jugos, condimentos y platos dulces y salados, el jengibre es conocido por sus propiedades antiinflamatorias, digestivas y ricas en antioxidantes.",
    uva: "UVA",
    produtos__uva: "La uva es una fruta de piel fina y colores variados, como verde, púrpura y rojo. Exportamos uvas a diversos mercados internacionales. Con un sabor dulce y jugoso, la fruta es perfecta para consumo fresco, jugos, vinos, mermeladas y postres, además de ser rica en antioxidantes, vitaminas y minerales, como la vitamina C y el potasio.",
    produto__btnlinkIndex: "SABER MÁS",
    logistica__1: "Desde la Siembra hasta Usted",
    logistica__2: "En Unifrutas, nos enorgullecemos de ofrecer frutas, cultivadas con cuidado y entregadas con excelencia. Nuestro proceso garantiza calidad, sostenibilidad y seguridad en cada etapa. Vea cómo transformamos lo que viene del campo en productos de confianza:",
    logistica__3: "1-Siembra con Cuidado",
    logistica__4: "Trabajamos con productores especializados, utilizando prácticas agrícolas sostenibles y seleccionando suelo, semillas y técnicas que respetan la naturaleza, garantizando cosechas saludables desde el inicio.",
    logistica__5: "2-Cosecha en el Momento Ideal",
    logistica__6: "Realizamos la cosecha en el momento adecuado, cuando las frutas alcanzan su punto máximo de madurez, garantizando sabor, apariencia y frescura. Nuestro equipo sigue estándares rigurosos para preservar cada producto.",
    logistica__7: "3-Selección y Control de Calidad",
    logistica__8: "Después de la cosecha, seleccionamos cuidadosamente los mejores frutos. Solo los productos que cumplen con nuestros altos estándares de tamaño, color e integridad avanzan.",
    logistica__9: "4-Embalaje y Transporte Seguro",
    logistica__10: "Para preservar la máxima frescura, utilizamos embalajes modernos y sostenibles. Nuestra logística refrigerada asegura que todo llegue intacto y listo, en mercados nacionales e internacionales.",
    logistica__11: "5-En las Estanterías, Listo para Usted",
    logistica__12: "¿El resultado? Productos que llegan al consumidor con calidad y sabor incomparables, listos para proporcionar salud y bienestar a la mesa de cada familia.",
    qualidade__1: "GARANTÍA DE CALIDAD",
    qualidade__2: "Nuestras certificaciones garantizan calidad, seguridad alimentaria y sostenibilidad, atendiendo a los mercados más exigentes del mundo, como Europa, EE. UU. y Asia.",
    contato__1: "ENCUÉNTRANOS",
    footer__1: "Menú",
    footer__2: "Páginas",
    footer__3: "Contacto",
    copy__1: "© Unifrutas. Todos los derechos reservados.",
    pagina__1: "ESPECIFICACIONES",
    pagina__2: "TABLA NUTRICIONAL",
    pagina__3: "ESTACIONALIDAD",
    pagina__4: "AQUÍ RESPONDEMOS A SUS DUDAS",
    pagina__5: "QUIERO EXPORTAR",
  }
};

function changeLanguage(language) {
  if (!translations[language]) {
    console.error("Idioma não suportado:", language);
    return;
  }

  Object.entries(translations[language]).forEach(([key, value]) => {
    const elements = document.querySelectorAll(`#${key}, .${key}`); // Seleciona por ID ou classe

    elements.forEach(element => {
      if (element.tagName === 'A') {
        element.textContent = value; // Atualiza o texto do link
      } else if (element.tagName === 'BUTTON') {
        const link = element.querySelector('a');
        if (link) {
          link.textContent = value; // Atualiza o texto do link dentro do botão
        }
      } else {
        element.textContent = value; 
      }
    });
  });
}