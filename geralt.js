function Geralt() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Geralt.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        GeraltFase1()
    }, 2000)
}
function GeraltFase1() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Geralt_fase_1.jpg')";
    setTimeout(function () {
        escolha = prompt("Escolha o seu caminho.");
        if (escolha == 2) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Geralt_fase_1_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 2000)
        }
        else if (escolha == 1) 
        
        GeraltFase2()
    }, 2000)
}
function GeraltFase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Geralt_fase_2.jpg')";
    setTimeout(function () {
        escolha = prompt("Faça sua decisão.");
        if (escolha == 1) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Geralt_fase_2_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 2000)
        }
        else if (escolha == 2) 
        
        GeraltFase3()
    }, 2000)
}
function GeraltFase3() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Geralt_fase_3.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        GeraltFase3Java()
    }, 2000)
}
function GeraltFase3Java() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Geralt_fase_3_java.jpg')";
    setTimeout(function () {
        escolha = prompt("Faça sua decisão.");
        if (escolha == 2) {
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('img/Geralt_fase_3_java_vcmorreu.jpg')";
            setTimeout(function () {alert ("Você morreu!, Aperte ok para reinciar.");
            location.reload();}, 2000)
        }
        else if (escolha == 1) 
        
        GeraltFinalPt1()
    }, 2000)
}
function GeraltFinalPt1() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Geralt_final_pt1.jpg')";
    setTimeout(function () {
        escolha1 = alert("Clique em ok para avançar.");
        GeraltFinalPt2()
    }, 2000)
}
function GeraltFinalPt2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/Geralt_final_pt_2.jpg')";
}
