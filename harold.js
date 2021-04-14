function Harold() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Harold.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        HaroldFase1()
    }, 300)
}
function HaroldFase1() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Harold_fase_1.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 2) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Harold_fase_1_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 300)
        }
        else if (escolha == 1) 
        
        HaroldFase2()
    }, 300)
}
function HaroldFase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Harold_fase_2.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        HaroldFase3()
    }, 300)
}
function HaroldFase3() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Harold_fase_2_pt1.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 1) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Harold_fase_2_pt1_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 300)
        }
        else if (escolha == 2) 
        
        HaroldFase33()
    }, 300)
}
function HaroldFase33() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Harold_fase_3.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        HaroldFase3Java()
    }, 300)
}
function HaroldFase3Java() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Harold_fase_3_java.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 2) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Harold_fase_3_java_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 300)
        }
        else if (escolha == 1) 
        
        HaroldFase3JavaFinal()
    }, 300)
}
function HaroldFase3JavaFinal() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Harold_fase_3_java_final.jpg')";
}
