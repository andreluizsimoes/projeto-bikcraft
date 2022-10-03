// Marcação de Link ativo no Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
  const url = location.href;
  const href = link.href;

  if(url.includes(href)){
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);


// Ativar itens do Orçamento
const parametros = new URLSearchParams(location.search);  // "search" é a parte da URL que traz os parâmetros após o html

function ativarProduto(param){
  // const elemento = document.querySelector("#"+param);
  const elemento = document.getElementById(param);

  if(elemento){
    elemento.checked = true; 
  }
}

parametros.forEach(ativarProduto);


// Perguntas Frequentes: ativar e desativar

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(click){
  const pergunta = click.currentTarget;
  const idCLicado = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(idCLicado);

  resposta.classList.toggle("ativa");
  // Boolean que verifica se a resposta tem a classe "ativa"
  const ativa = resposta.classList.contains("ativa"); 

  pergunta.setAttribute("aria-expanded", ativa);
 
}

function cliquePerguntas(pergunta){
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(cliquePerguntas);

// Galeria de imagens de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
  const img = event.currentTarget;
// verifica o tamanho da tela em Boolean com o matchMedia matches.
  const tela = matchMedia("(min-width: 936px)").matches; 

  if (tela) {
  galeriaContainer.prepend(img); 
  }
}

function cliqueGaleria(img){
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(cliqueGaleria);


// Animação do PlugIn Simple-Anime

if (window.SimpleAnime) {  
  new SimpleAnime();
}