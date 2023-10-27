//Declaração/criação da função tocaSomPom
function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}
//criando a referência constante ListadeTeclas e buscando a classe.
const ListadeTeclas = document.querySelectorAll ('.tecla');
let contador =0;
while(contador < ListadeTeclas.length) {
    const efeito = ListadeTeclas[contador].classList[1];
    const idAudio = "#som_" + efeito;
    ListadeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}