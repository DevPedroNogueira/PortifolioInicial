const secoes = {
  sobre: `
    <h3>Sobre</h3>
    <p>Meu nome é Pedro Vinícius, Tenho 23 anos, sou estudante de Análise e Desenvolvimento de Sistemas, autodidata e estou me preparando para atuar como desenvolvedor Full Stack. No momento, estudo HTML5, CSS3 e JavaScript, buscando sempre melhorar a cada dia. Mais do que escrever código, meu foco é contribuir com soluções que ajudem pessoas e empresas a crescer, se organizarem melhor e chegarem mais longe.
    Estou em busca da minha primeira oportunidade como estagiário ou dev júnior, pronto para aprender com o time,
    encarar desafios para que possamos nos desenvolver e evoluir juntos.</p>
  `,
  contato: `
  <div id="contato">
    <h3>Contato</h3>
    <ul>
      <li><i class="fab fa-instagram"></i> <a href="https://www.instagram.com/pedrovinicius_nog/" class="instagram-link" target="_blank" rel="noopener">Instagram</a></li>
      <li><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/DevPedroNogueira" class="linkedin-link" target="_blank" rel="noopener">Linkedin</a></li>
      <li><i class="fab fa-github"></i> <a href="https://github.com/DevPedroNogueira" class="github-link" target="_blank" rel="noopener">Github</a></li>
      <li><i class="fas fa-envelope"></i> <a href="mailto:devpedronogueiraoficial@gmail.com" class="email-link">E-mail</a></li>
      <li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/5535984123723" class="whatsapp-link target="_blank" rel="noopener">Whatsapp</a></li>
    </ul>
  </div>
  `,
  habilidades: `
  <div id="habilidades">
    <h3>Habilidades</h3>
    <ul>
      <li><i class="devicon-html5-plain colored"></i> HTML5</li>
      <li><i class="devicon-css3-plain colored"></i> CSS3</li>
      <li><i class="devicon-javascript-plain colored"></i> JavaScript</li>
      <li><i class="devicon-git-plain colored"></i> Git</li>
      <li><i class="devicon-github-original colored"></i> GitHub</li>
    </ul>
  </div>
  `,
}

const conteudo = document.getElementById("conteudo");
const botoes = document.querySelectorAll("nav button");

function carregarConteudo(secao) {
  conteudo.innerHTML = secoes[secao] || secoes.sobre;
}

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const secao = botao.getAttribute("data-secao");
    carregarConteudo(secao);
  });
});

carregarConteudo("sobre");
