const elementResposta = document.querySelector ("#Resposta")
const inputPergunta = document.querySelector  ("#inputPergunta") 
const Resposta =[ 
 "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas meu chapa!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Vish... parece que azedou tenta mais tarde.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim meus parabéns.", ]

// clicar em fazer pergunta
function fazerPergunta () {


if(inputPergunta.value ==""){
  alert("digite sua pergunta")
  return 
}

const pergunta = "<div>" + inputPergunta.value
 + "</div>"

// gerar numero alatorio
const totalResposta = Resposta.length
const numeroAleatorio = Math.floor (Math.random 
()*totalResposta )

elementResposta.innerHTML = pergunta+Resposta[numeroAleatorio]
 
 setTimeout(function(){
   elementResposta.style. opacity= 0;
 } ,3000 )


} 




