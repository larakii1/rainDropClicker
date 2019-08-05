var score = 0;
var multiplicateur = 0;
var nbr1 = 0, nbr2 = 0;
var price1 = 20, price2 = 200;



document.getElementById('affichage').innerHTML = score + "€";
document.title = score + "€ - Exemple";



function clickBouton() {
    score += 1 + multiplicateur;
    document.getElementById('affichage').innerHTML = score + "€";
    document.title = score + "€ - Exemple";
}

function getMulti() {
    if (score >= price1) {
        nbr1++;
        multiplicateur++;
        score -= price1;
        price1 *= 2;
        document.getElementById('affichage').innerHTML = score + "€";
        document.title = score + "€ - Exemple";
        document.getElementById('price1').innerHTML = price1;
        document.getElementById('nbr1').innerHTML = nbr1;
    }
}

function getAutoClicker(){
    if (score >= price2) {
        nbr2++;
        score -= price2;
        price2 *= 2;
        document.getElementById('affichage').innerHTML = score + "€";
        document.title = score + "€ - Exemple";
        document.getElementById('price2').innerHTML = price2;
        document.getElementById('nbr2').innerHTML = nbr2;
        setInterval(autoClicker,1000);
    }
}

function autoClicker() {
    score++;
    document.getElementById('affichage').innerHTML = score + "€";
    document.title = score + "€ - Exemple";
}