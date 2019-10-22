

var timerRunning = false;
var random = 0;           
var check = 0;            
var correctClick = 0;
var right = 0, total = 0;


var hiragArray = [
    { letter: "a", link: "hirags\\a.png" },
    { letter: "e", link: "hirags\\e.png" },
    { letter: "i", link: "hirags\\i.png" },
    { letter: "o", link: "hirags\\o.png" },
    { letter: "u", link: "hirags\\u.png" },        

    { letter: "ka", link: "hirags\\ka.png" },
    { letter: "ke", link: "hirags\\ke.png" },
    { letter: "ki", link: "hirags\\ki.png" },
    { letter: "ko", link: "hirags\\ko.png" },
    { letter: "ku", link: "hirags\\ku.png" },        

    { letter: "ga", link: "hirags\\ga.png" },
    { letter: "gi", link: "hirags\\gi.png" },
    { letter: "gu", link: "hirags\\gu.png" },
    { letter: "ge", link: "hirags\\ge.png" },
    { letter: "go", link: "hirags\\go.png" },        

    { letter: "sa", link: "hirags\\sa.png" },
    { letter: "se", link: "hirags\\se.png" },
    { letter: "shi", link: "hirags\\shi.png" },
    { letter: "so", link: "hirags\\so.png" },
    { letter: "su", link: "hirags\\su.png" },       

    { letter: "za", link: "hirags\\za.png" },
    { letter: "ji", link: "hirags\\ji.png" },
    { letter: "zu", link: "hirags\\zu.png" },
    { letter: "ze", link: "hirags\\ze.png" },
    { letter: "zo", link: "hirags\\zo.png" },      

    { letter: "ta", link: "hirags\\ta.png" },
    { letter: "te", link: "hirags\\te.png" },
    { letter: "chi", link: "hirags\\chi.png" },
    { letter: "to", link: "hirags\\to.png" },
    { letter: "tsu", link: "hirags\\tsu.png" },     

    { letter: "da", link: "hirags\\da.png" },
    { letter: "ji", link: "hirags\\ji2.png" },
    { letter: "zu", link: "hirags\\zu2.png" },
    { letter: "de", link: "hirags\\de.png" },
    { letter: "do", link: "hirags\\do.png" },     

    { letter: "n", link: "hirags\\n.png" },
    { letter: "na", link: "hirags\\na.png" },
    { letter: "ne", link: "hirags\\ne.png" },
    { letter: "ni", link: "hirags\\ni.png" },
    { letter: "no", link: "hirags\\no.png" },
    { letter: "nu", link: "hirags\\nu.png" },    

    { letter: "ma", link: "hirags\\ma.png" },
    { letter: "mi", link: "hirags\\mi.png" },
    { letter: "mu", link: "hirags\\mu.png" },
    { letter: "me", link: "hirags\\me.png" },
    { letter: "mo", link: "hirags\\mo.png" },       

    { letter: "ha", link: "hirags\\ha.png" },
    { letter: "hi", link: "hirags\\hi.png" },
    { letter: "fu", link: "hirags\\fu.png" },
    { letter: "he", link: "hirags\\he.png" },
    { letter: "ho", link: "hirags\\ho.png" },        

    { letter: "ra", link: "hirags\\ra.png" },
    { letter: "ri", link: "hirags\\ri.png" },
    { letter: "ru", link: "hirags\\ru.png" },
    { letter: "re", link: "hirags\\re.png" },
    { letter: "ro", link: "hirags\\ro.png" },        

    { letter: "ba", link: "hirags\\ba.png" },
    { letter: "bi", link: "hirags\\bi.png" },
    { letter: "bu", link: "hirags\\bu.png" },
    { letter: "be", link: "hirags\\be.png" },
    { letter: "bo", link: "hirags\\bo.png" },       

    { letter: "pa", link: "hirags\\pa.png" },
    { letter: "pi", link: "hirags\\pi.png" },
    { letter: "pu", link: "hirags\\pu.png" },
    { letter: "pe", link: "hirags\\pe.png" },
    { letter: "po", link: "hirags\\po.png" },        

    { letter: "ya", link: "hirags\\ya.png" },
    { letter: "yu", link: "hirags\\yu.png" },
    { letter: "yo", link: "hirags\\yo.png" },   

    { letter: "wa", link: "hirags\\wa.png" },
    { letter: "wo", link: "hirags\\wo.png" }    


]

function startTimer() {

    if (timerRunning == false) {
        var timeLeft = 60;
        timerRunning = true;
        var x = setInterval(function () {
            timeLeft -= 1;
            document.getElementById("timerField").innerHTML = timeLeft;
            if (timeLeft < 0) {
                document.getElementById("timerField").innerHTML = 0;
                timerRunning = false;
                clearInterval(x);
                gameOver();
            }
        }, 1000);
    }
}

function startGame() {
    if (timerRunning == false) {
        random = Math.ceil(Math.random() * 71) - 1;
        document.getElementById("hiragIMG").src = hiragArray[random].link;
        check = random;                             
        startTimer();
        buttonShuffle();                          
    }
}

function hiragImgShuffle() {

    if (timerRunning == true) {
        while (true) {
            random = Math.ceil(Math.random() * 71) - 1;
            if (random == check) {
                continue;
            }
            else {
                document.getElementById("hiragIMG").src = hiragArray[random].link;
                check = random;
                break;
            }
        }
    }
}

function buttonShuffle() {

    var btnA, btnB, btnC, randomBtnA, randomBtnB, randomBtnC;


    if (timerRunning == true) {

        while (true) {
            randomBtnA = Math.ceil(Math.random() * 71) - 1;
            randomBtnB = Math.ceil(Math.random() * 71) - 1;
            randomBtnC = Math.ceil(Math.random() * 71) - 1;

            if (randomBtnA == randomBtnB || randomBtnA == randomBtnC || randomBtnA == random || randomBtnB == randomBtnC || randomBtnB == random || randomBtnC == random) {
                continue;
            } else {
                btnA = hiragArray[randomBtnA].letter;
                btnB = hiragArray[randomBtnB].letter;
                btnC = hiragArray[randomBtnC].letter;
                break;
            }
        }

        var randomBtnLocation = Math.ceil(Math.random() * 4) - 1;
        switch (randomBtnLocation) {
            case 0:
                document.getElementById("btnOneHirag").innerHTML = hiragArray[random].letter;;
                document.getElementById("btnTwoHirag").innerHTML = btnA;
                document.getElementById("btnThreeHirag").innerHTML = btnB;
                document.getElementById("btnFourHirag").innerHTML = btnC;
                correctClick = 1;
                break;
            case 1:
                document.getElementById("btnOneHirag").innerHTML = btnC;
                document.getElementById("btnTwoHirag").innerHTML = hiragArray[random].letter;;
                document.getElementById("btnThreeHirag").innerHTML = btnA;
                document.getElementById("btnFourHirag").innerHTML = btnB;
                correctClick = 2;
                break;
            case 2:
                document.getElementById("btnOneHirag").innerHTML = btnB;
                document.getElementById("btnTwoHirag").innerHTML = btnC;
                document.getElementById("btnThreeHirag").innerHTML = hiragArray[random].letter;;
                document.getElementById("btnFourHirag").innerHTML = btnA;
                correctClick = 3;
                break;
            case 3:
                document.getElementById("btnOneHirag").innerHTML = btnA;
                document.getElementById("btnTwoHirag").innerHTML = btnB;
                document.getElementById("btnThreeHirag").innerHTML = btnC;
                document.getElementById("btnFourHirag").innerHTML = hiragArray[random].letter;;
                correctClick = 4;
                break;
        }

    }

}

function checkAnswer(answerClick) {
    if (timerRunning == true) {
        if (answerClick == correctClick) {
            right++;
        }
        total++;
        document.getElementById("scoreField").innerHTML = right + "  / " + total;
    }
}

function gameOver() {
    alert("GAME OVER!\nYou got " + right + " right out of " + total)
    right = 0, total = 0, timerRunning = false,
        random = 0, check = 0, correctClick = 0;
    document.getElementById("hiragIMG").src = "hirags\\empty.png"
    document.getElementById("scoreField").innerHTML = "0  / 0";
    document.getElementById("btnOneHirag").innerHTML = "";
    document.getElementById("btnTwoHirag").innerHTML = "";
    document.getElementById("btnThreeHirag").innerHTML = "";
    document.getElementById("btnFourHirag").innerHTML = "";
}



