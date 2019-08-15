/* % de niveau d'eau inversé  */
var lvlEauInv = 100;

/* Niveau d'eau maximal du récipient */
var lvlEauMax = 10;

/* Nombre de gouttes dans le récipient */
var nbrGouttes = 0;

var posEau = document.getElementById("niveauEau");


/* Fait "monter" le niveau d'eau d'un certain pourcentage */
function niveauEau() {
    if (nbrGouttes < lvlEauMax) {
        nbrGouttes ++;
        lvlEauInv = (100 - ((nbrGouttes * 100) / lvlEauMax));
        document.getElementById('nbrGouttes').innerHTML = nbrGouttes + " / " + lvlEauMax;
        posEau.style.height = lvlEauInv + "%";
    }
}

/* Evaporation de l'eau avec le temps */ 
/*
function evaporation() {
    if (nbrGouttes > 0) {
        lvlEauInv ++;
        nbrGouttes --;
        document.getElementById('nbrGouttes').innerHTML = nbrGouttes + " / " + lvlEauMax;
        posEau.style.height = lvlEauInv + "%";
    }
}
*/