
function alterarTema() {
    //DOM -> Document Object Model
    const tema = document.body.getAttribute('data-theme');
    const novoTema = tema == 'dark' ? 'light' : 'dark' ;
    localStorage.setItem('tema', novoTema);
    document.body.setAttribute('data-theme', novoTema);
    const btAlterarTema = document.getElementById('alterarTema');
    btAlterarTema.textContent = novoTema == 'dark' ? '☀️' : '🌙';
    
}


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              entry.target.classList.remove("hidden");
          }
      });
  });

  const section = document.querySelector("#projetos");
  observer.observe(section);
});

document.querySelectorAll("#hab-buttons article").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        const descricao = {
            html: "HTML é a linguagem de marcação usada para estruturar o conteúdo de páginas web, como textos, imagens, links e tabelas. É a base de qualquer site.",
            css: "CSS é usado para estilizar páginas web, controlando cores, fontes, layouts e responsividade. Ele permite criar designs atraentes e adaptáveis.",
            js: "JavaScript é uma linguagem de programação que adiciona interatividade às páginas web, como animações, validação de formulários e manipulação de elementos do DOM.",
            react: "React é uma biblioteca JavaScript para construir interfaces de usuário dinâmicas e reutilizáveis, ideal para aplicações web modernas e interativas.",
            python: "Python é uma linguagem de programação versátil, usada em desenvolvimento web, automação, análise de dados, inteligência artificial e muito mais.",
            sql: "SQL é uma linguagem de consulta usada para gerenciar e manipular bancos de dados, permitindo criar, ler, atualizar e excluir dados de forma eficiente.",
            java: "Java é uma linguagem de programação orientada a objetos amplamente usada para desenvolvimento de aplicações corporativas, móveis (Android) e sistemas robustos.",
            flutter: "Flutter é um framework de desenvolvimento de aplicativos móveis e web, permitindo criar interfaces nativas e responsivas com uma única base de código em Dart.",
          };
      const habilidades = card.classList[0];
      document.querySelector(".changeDescription").textContent = descricao[habilidades];
    });
  
    card.addEventListener("mouseleave", () => {
      document.querySelector(".changeDescription").textContent =
        "*passe o cursor do mouse no card para ler*";
    });
  });