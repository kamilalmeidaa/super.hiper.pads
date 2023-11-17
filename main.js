//Declaração/criação da função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio) .play();
}
//criando a referência constante ListadeTeclas e buscando a classe.
const ListadeTeclas = document.querySelectorAll('.tecla');
//criação de repetição

for(let contador = 0;contador < ListadeTeclas.length;contador++) {
    const teclas = ListadeTeclas[contador];
    const efeito = teclas.classList[1];
    const idAudio = `#som_${efeito}`;
    teclas.onclick = function(){
        tocaSom(idAudio);
    }
    teclas.onkeydown = function(){
        teclas.classList.add('ativa')
    }
    teclas.onkeyup = function(){
        teclas.classList.remove('ativa');
    }
}