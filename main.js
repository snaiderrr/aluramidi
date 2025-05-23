function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
      const idAudio = `#som_${instrumento}`;  //template string
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) { 

        console.log(evento.code == 'Space')
      
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa'); 
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

 }