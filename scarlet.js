function Scarlet() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        ScarletFase1()
    }, 600)
}
function ScarletFase1() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_1.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 1) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Scarlet_fase_1_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 600)
        }
        else if (escolha == 2) 
        
        ScarletFase2()
    }, 600)
}
function ScarletFase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_2.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 1) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Scarlet_fase_2_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 600)
        }
        else if (escolha == 2) 
        
        ScarletFase3()
    }, 600)
}
function ScarletFase3() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_3.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        ScarletFase3Java()
    }, 600)
}
function ScarletFase3Java() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_3_java.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 1) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Scarlet_fase_3_java_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 600)
        }
        else if (escolha == 2) 
        
        ScarletFinal()
    }, 600)
}
function ScarletFinal() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Scarlet_fase_3_java_final.jpg')";
}