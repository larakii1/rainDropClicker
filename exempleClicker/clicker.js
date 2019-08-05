var score = 2000;
var multiplicateur = 0;
var nbr1 = 0, nbr2 = 0;
var price1 = 20, price2 = 200;



document.getElementById('affichage').innerHTML = score.toFixed(0) + "P";
document.title = score.toFixed(0) + "P - Poké Clicker";



function clickBall() {
    score += 1 + multiplicateur;
    document.getElementById('affichage').innerHTML = score.toFixed(0) + "P";
    document.title = score.toFixed(0) + "P - Poké Clicker";
}

function getScout() {
    if (score >= price1) {
        nbr1++;
        multiplicateur++;
        score -= price1;
        price1 *= 1.1;
        document.getElementById('affichage').innerHTML = score.toFixed(0) + "P";
        document.title = score.toFixed(0) + "P - Poké Clicker";
        document.getElementById('price1').innerHTML = price1.toFixed(0);
        document.getElementById('nbr1').innerHTML = nbr1;
    }
}

function getPond(){
    if (score >= price2) {
        nbr2++;
        score -= price2;
        price2 *= 1.5;
        document.getElementById('affichage').innerHTML = score.toFixed(0) + "P";
        document.title = score.toFixed(0) + "P - Poké Clicker";
        document.getElementById('price2').innerHTML = price2.toFixed(0);
        document.getElementById('nbr2').innerHTML = nbr2;
        setInterval(pond,1000);
    }
}

function pond() {
    score++;
    document.getElementById('affichage').innerHTML = score.toFixed(0) + "P";
    document.title = score.toFixed(0) + "P - Poké Clicker";
}