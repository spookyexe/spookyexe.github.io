document.getElementById("noHello").addEventListener("click", myFunction);

let x = 0;

var sadFace = ":((";
var buttonWidth = 128;
var buttonFont = 40;

const helloButton = document.getElementById("helloButton");

function myFunction() {
    x++
    
    if (x>0) {
        sadFace = sadFace+'(';
        
        buttonWidth = buttonWidth + 10;
        buttonFont = buttonFont + 2;
    }
    
    document.getElementById("errorText").innerHTML = sadFace;
    
    helloButton.style.width = String(buttonWidth) + "px";
    helloButton.style.fontSize = String(buttonFont) + "px";
    
    
    var bunny = document.getElementById("bunny");
    bunny.style.display = "block";
}