var demande = 5;
var monnaie = 100;
var finit = false;
var position = 930;
var fonctionPrete = 0;


/*
var div = document.querySelector('#life');
var left = 0;
var updateleft = function() {
    left=left+10
    if (left>700) {
        left=700;
    }
    div.style.left= left+"px";
}
setInterval(updateleft, 60);
*/




/* Perso 2 qui court */
var perso2interval;
var div = document.querySelector('#life2');
var left = 0;
var updateleft = function () {
        left = left + 10;
        if (left > position) {
            left = position;
            fonctionPrete++; /* fonctionPrete + 1 quand l'animation est terminée */
        }
        div.style.left = left + "px";
        if (fonctionPrete >= 1) { /* Activé dès que l'animation se termine pour la première fois */
            if (finit === false) {
                recupEau(demande, monnaie); /* Récupération de l'eau et payement */
            } else if (finit === true) { /* Activé dès que la récupération d'eau et le payement ont été faits */
                position = 1950;
                setInterval(updateleft, 60);
                fonctionPrete = -1;
            }
        }
    if (fonctionPrete < 0) {
        left = left + 10;
        if (left > position) {
            left = position;
           
            fonctionPrete--; /* fonctionPrete - 1 quand l'animation est terminée */
        }
        div.style.left = left + "px";
     
        if (fonctionPrete < -1) { /* Activé dès que le personnage sort de l'écran */
            document.getElementsByClassName('haha').classList.toggle("disabled");
        }
    }
}; 

setInterval(updateleft, 60); /* 1er déplacement du perso */

/* Défiliement de la vie du mec qui court */
var life2 = document.getElementsByClassName('haha')[0];
var vieInterval = setInterval(()=> {
    const computedStyle = getComputedStyle(life2);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) 
    life2.style.setProperty('--width',width - .1);
    if (width<=0){
   clearInterval(vieInterval);
   left=100;
   perso2interval = setInterval(updatelefte,60);  
    document.getElementById("life2").style.display="none";
   /* perso2interval = setInterval(updatelefte,60);*/
}

}, 30);




var dive = document.querySelector('#life3');

var updatelefte = function (){
left=left+10;
if (left>1000) {
clearInterval(perso2interval);
left=1000;
    } 
dive.style.left= left+"px";
}; //perso2 momie*/




var life3 = document.getElementsByClassName('zaza') [0] ;// vie momie
var vieIntervale;
var vieIntervale = setInterval(()=> {


const computedStyle = getComputedStyle(life3);
const width = parseFloat(computedStyle.getPropertyValue('--width')) ;
life3.style.setProperty('--width',width - .1)
if (width<=0){
clearInterval(vieIntervale);
left=100;
perso3interval = setInterval(updatelefta,60);
document.getElementById("life3").style.display="none";

}

},30);

var diva = document.querySelector('#life');
var updatelefta = function (){
left=left+10;
if (left>1000) {
clearInterval(perso2interval);
left=1000;
    } 
diva.style.left= left+"px";
} 


var lifeIndicator = document.querySelector('#life div');
var pourcent=0;
addEventListener('timeupdate',function(){
console.log(this.duration);
console.log(this.currentTime);
});
