var score = 0;
var elem;
var pos;

document.getElementById("affichage").innerHTML = score + " gouttes";

function clickBouton() {
    elem = document.getElementById("gout");
    pos = 100;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos >= 550) {
            clearInterval(id);
        } else {
            pos += 20;
            elem.style.top = pos + 'px';
        }
    }
    niveauEau();
}