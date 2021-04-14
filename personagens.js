
function escolhaDePersona() {
    elem=document.querySelector ('#Start')
    elem.style.display=("none")
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/personagens.jpg')";
    setTimeout(function() {
        while (true) {
            personagem = prompt("Escolha seu personagem digitando o numero correspondente.");
            if (personagem == 1) {
                Geralt()
                break;
            } else if (personagem == 2) {
                Harold()
                break;
            } else if (personagem == 3) {
                Scarlet()
                break;
            } else {
                alert("Personsagem inválido");

            }
        }
    }, 1000)

}
