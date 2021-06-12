function rechnen()
{
var zahl1 = parseInt(document.getElementById("zahl1").value);
var zahl2 = parseInt(document.getElementById("zahl2").value);
var span = document.getElementById("ergebnis");


    var summe = zahl1 + zahl2;
    span.innerHTML = summe;
}


var box = document.getElementById("farbe");

function blauFarbe()
{
    box.style.backgroundColor = "blue";
}


function rotFarbe()
{
    box.style.backgroundColor = "red";
}

















