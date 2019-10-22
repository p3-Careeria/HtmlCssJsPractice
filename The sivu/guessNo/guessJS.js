window.onload = function () {
    document.getElementById("answer").focus();
};

var randomNo = Math.ceil(Math.random() * 100) + 1;
var vastArray = [];
var vastaukset = 1;

document.addEventListener("keypress", keyClick, false);
function keyClick(e) {
    if (e.key == "Enter") {
        e.preventDefault(); // prevents window reload 
        arvausPeli();
    }
}

function arvausPeli() {

    var answer = document.getElementById("answer").value;

    if (answer != "") {
        if (answer == randomNo) {
            vastArray[vastaukset - 1] = answer;
            oikeaanswer();
        }
        else if (answer > randomNo) {
            document.getElementById("p1").innerHTML = "The number is lower than your guess";
        } else {
            document.getElementById("p1").innerHTML = "The number is higher than your guess";
        }
        vastArray[vastaukset - 1] = answer;
        vastaukset += 1;
    }
    clearFocus();
};

function oikeaanswer() {

    var luvut = "";
    var y = vastArray.toString();

    for (let i = 0; i < vastArray.length; ++i) {
        if (i == vastArray.length - 1) {
            luvut = luvut.concat(" and " + vastArray[i]);
            break;
        }
        else if (i == 0) {
            luvut = luvut.concat(vastArray[i]);
        }
        else {
            luvut = luvut.concat(", " + vastArray[i]);
        }
    }

    document.getElementById("p1").innerHTML = "YOU GOT IT! <br/> You answered " + vastArray.length + " times, numbers " + luvut;

};
function clearFocus() {
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();

};

