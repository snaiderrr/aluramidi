function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


//enquanto
while () {
    listaDeTeclas[0].onclick = tocaSomPom;    
}