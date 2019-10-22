
var screen = "";

document.addEventListener("keyup", keyClick, false);

function keyClick(e) {
    var keyCode = e.keyCode;

    switch (keyCode) {

        case 96: addToScreen(0); break;
        case 97: addToScreen(1); break;
        case 98: addToScreen(2); break;
        case 99: addToScreen(3); break;
        case 100: addToScreen(4); break;
        case 101: addToScreen(5); break;
        case 102: addToScreen(6); break;
        case 103: addToScreen(7); break;
        case 104: addToScreen(8); break;
        case 105: addToScreen(9); break;
        case 106: addMultip(); break;
        case 107: addPlus(); break;
        case 109: addMinus(); break;
        case 111: addDivision(); break;
        case 110: addDot(); break;
        case 8: delOne(); break;
        case 46: clearScreen(); break;
        case 56: openBracket(); break;
        case 57: closeBracket(); break;
        case 13: result(); break;
    }
}

function addToScreen(luku) {

    var screen = document.getElementById("kaava").innerHTML;
    if (screen.length==1 && luku == 0 && screen == "0") {   // no two zeros as first numbers (eval() wont work)
        return; 
    } else if (screen.length == 1 && screen == "0") {     //  if only 0, del 0 
        clearScreen(); 
        document.getElementById("kaava").innerHTML = luku;
     } else if (screen.length < 19) { 
        document.getElementById("kaava").innerHTML = screen + luku;
    }
}
function result() {

    var screen = document.getElementById("kaava").innerHTML;
    var scrnSubstr = screen.substring(screen.length-1, screen.length); 
   
    if (scrnSubstr == "+" || scrnSubstr == "-" || scrnSubstr == "/" || scrnSubstr == "*") {
        delOne(); 
    }

    var subStr = screen.substring(screen.length - 1, screen.length);
    var subStr2 = screen.substring(screen.length - 2, screen.length - 1);

    var result = eval(screen);
    result = result.toString();

    if (subStr == "0" && subStr2 == "/") {
        alert("Thou shalt not divide by zero");
        clearScreen();
        return;
    } else {
        result = result.slice(0, 15);                           //toFixed() ? Anyway, leaves room for additional operations
        document.getElementById("kaava").innerHTML = result;
    }

}

function addDivision() {

    var screen = document.getElementById("kaava").innerHTML;
    var subStr = screen.substring(screen.length - 1, screen.length);

    if (subStr != "+" && subStr != "-" && subStr != "*" && subStr != "/") {
        if (screen.length != 0) {        // ei operaattoria ekana
            if (screen.length < 19) {   // ruudulle mahtuu 19 symbolia 
                document.getElementById("kaava").innerHTML = screen + "/";
            }
        }
    }
}
function addMultip() {
    var screen = document.getElementById("kaava").innerHTML;
    var subStr = screen.substring(screen.length - 1, screen.length);

    if (subStr != "+" && subStr != "-" && subStr != "*" && subStr != "/") {
        if (screen.length != 0) {
            if (screen.length < 19) {
                document.getElementById("kaava").innerHTML = screen + "*";
            }
        }
    }
}
function addMinus() {
    var screen = document.getElementById("kaava").innerHTML;
    var subStr = screen.substring(screen.length - 1, screen.length);

    if (subStr != "-") {
        if (screen.length < 19) {
            document.getElementById("kaava").innerHTML = screen + "-";
        }
    }
}
function addPlus() {

    var screen = document.getElementById("kaava").innerHTML;
    var subStr = screen.substring(screen.length - 1, screen.length);

    if (subStr != "+" && subStr != "-" && subStr != "*" && subStr != "/") {
        if (screen.length != 0) {
            if (screen.length < 19) {
                document.getElementById("kaava").innerHTML = screen + "+";
            }
        }
    }
}
function addDot() {
    var screen = document.getElementById("kaava").innerHTML;
    var subStr = screen.substring(screen.length - 1, screen.length);

    if (screen.length < 19 && subStr != ".") {
        document.getElementById("kaava").innerHTML = screen + ".";
    }
}
function openBracket() {
    var screen = document.getElementById("kaava").innerHTML;
    if (screen.length < 19) {
        document.getElementById("kaava").innerHTML = screen + "(";
    }
}
function closeBracket() {
    var screen = document.getElementById("kaava").innerHTML;
    if (screen.length < 19) {
        document.getElementById("kaava").innerHTML = screen + ")";
    }
}
function delOne() {
    var screen = document.getElementById("kaava").innerHTML;
    document.getElementById("kaava").innerHTML = screen.slice(0, screen.length - 1);
}
function clearScreen() {

    document.getElementById("kaava").innerHTML = "";

}
