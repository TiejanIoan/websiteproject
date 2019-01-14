var time = document.getElementById('timer');
    var t, milliseconds = 0, seconds = 0, minutes = 0;
    function add() {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
        }
    
        time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);
        timer();
    }
    function timer() {
        t = setTimeout(add, 10);
    }
    timer();

var odd = 1, cc = 0;
var btn1 = document.getElementById('1'),
    btn2 = document.getElementById('2'),
    btn3 = document.getElementById('3'),
    btn4 = document.getElementById('4'),
    btn5 = document.getElementById('5'),
    btn6 = document.getElementById('6'),
    btn7 = document.getElementById('7'),
    btn8 = document.getElementById('8'),
    btn9 = document.getElementById('9'),
    vic = document.getElementById("victory"),
    xwincount = 0, owincount = 0, drawcount = 0;

for(var i = 1; i <= 9; i++)
{
    var test = document.getElementById(i);
    test.addEventListener("mouseover", function(event) {
        if(odd==1 && test.innerHTML == "")
        {
            event.target.style.backgroundColor = "#1111DD";
            event.target.style.opacity = 0.5;
        }
        else if (odd==0 && test.innerHTML == "")
        {
            event.target.style.backgroundColor = "#DD1111";
            event.target.style.opacity = 0.5;
        }
    }, false);
    test.addEventListener("mouseout", function(event2) {
        
        event2.target.style.backgroundColor = "#DDD";
        event2.target.style.opacity = 1;
        
    }, false);
}


function Action(thatid) {
    var cont = document.getElementById(thatid);
    var winner = document.getElementById("winner");
    if(cc<9 && cont.innerHTML=="")
    if (odd==1) {
        cont.innerHTML = "X";
        cont.style.color = "#1111DD";
        odd=0;
        cc++;
        document.getElementsByTagName("body").backgroundColor = "linear-gradient(-45deg, rgb(82, 228, 238), rgb(60, 168, 231), rgb(53, 35, 213), rgb(133, 35, 213))" 
        
        document.getElementById("timer").style.borderColor = "#DD1111";
        document.getElementById('table').style.backgroundImage = "linear-gradient(-45deg, #DD1111, white)";
    } else {
        cont.innerHTML = "O";
        cont.style.color = "#DD1111";
        odd=1;
        cc++;
        document.getElementsByTagName("body").backgroundColor = "(linear-gradient(45deg, rgb(238, 228, 82), rgb(231, 168, 60), rgb(213, 35, 53), rgb(213, 35, 133))";
        document.getElementById("timer").style.borderColor = "#1111DD";
        document.getElementById('table').style.backgroundImage = "linear-gradient(-45deg, white, #1111DD)";

    }
    if(cont.innerHTML != "")
    {
        cont.style.backgroundColor = "#DDD";
        cont.style.opacity = 1;
        cont.disabled = true;
    }
    //horizontal
    if((btn1.innerHTML != "" && btn1.innerHTML== btn2.innerHTML && btn1.innerHTML == btn3.innerHTML)
      || (btn4.innerHTML != "" && btn4.innerHTML== btn5.innerHTML && btn4.innerHTML == btn6.innerHTML)
      || (btn7.innerHTML != "" && btn7.innerHTML== btn8.innerHTML && btn7.innerHTML == btn9.innerHTML)
    //diagonal
      || (btn1.innerHTML != "" && btn1.innerHTML== btn5.innerHTML && btn1.innerHTML == btn9.innerHTML)
      || (btn7.innerHTML != "" && btn7.innerHTML== btn5.innerHTML && btn7.innerHTML == btn3.innerHTML)
    //vertical
      || (btn1.innerHTML != "" && btn1.innerHTML== btn4.innerHTML && btn1.innerHTML == btn7.innerHTML)
      || (btn2.innerHTML != "" && btn2.innerHTML== btn5.innerHTML && btn2.innerHTML == btn8.innerHTML)
      || (btn3.innerHTML != "" && btn3.innerHTML== btn6.innerHTML && btn3.innerHTML == btn9.innerHTML))
    {
        winHighlight();
        if(odd==1)
        {
            winner.innerHTML = "O";
            winner.style.color = "#DD1111";
            vic.style.visibility = "visible";
            owincount++;
            document.getElementById("Owin").innerHTML = owincount;
        }
        else if(odd==0) {
            winner.innerHTML = "X";
            winner.style.color = "#1111DD";
            vic.style.visibility = "visible";
            xwincount++;
            document.getElementById("Xwin").innerHTML = xwincount;
        }
        cc=10;
        clearTimeout(t);
        cont.style.opacity = 1;
        for(var i=1;i<=9;i++)
        {
            document.getElementById(i).disabled = true;
        }
    }
    if(cc==9)
    {
        winner.innerHTML = "";
        vic.innerHTML = "It's a draw!";
        vic.style.visibility = "visible";
        drawcount++;
        document.getElementById("Draws").innerHTML = drawcount;
        clearTimeout(t);
    }
}

function newGame() {
    for(var i = 1; i <= 9; i++)
    {       
        var cont = document.getElementById(i);
        cont.disabled = false;
        cont.innerHTML = "";
        document.getElementById(i).style.backgroundColor="#DDD";
    }
    cc = 0;
    if(document.getElementById("XorO").innerHTML=="X")
    {
        odd = 1;
        document.getElementById("timer").style.borderColor = "#1111DD";
        document.getElementById('table').style.backgroundImage = "linear-gradient(-45deg, white, #1111DD)";
    }
    else {
        odd = 0;
        document.getElementById("timer").style.borderColor = "#DD1111";
        document.getElementById('table').style.backgroundImage = "linear-gradient(-45deg, #DD1111, white)";

    }
    vic.innerHTML = '<span id="winner"></span> won!';
    vic.style.visibility = "hidden";
    time.textContent="00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    clearTimeout(t);
    timer();
}

function startingPlayer()
{
    var xo = document.getElementById("XorO");
    if(xo.innerHTML=="X")
    {
        odd = 0;
        xo.innerHTML="O";
        xo.style.color="#DD1111";
        document.getElementById("timer").style.borderColor = "#DD1111";
        document.getElementById('table').style.backgroundImage = "linear-gradient(-45deg, white, #DD1111)";
    }
    else {
        odd = 1;
        xo.innerHTML="X";
        xo.style.color="#1111DD";
        document.getElementById("timer").style.borderColor = "#1111DD";
        document.getElementById('table').style.backgroundImage = "linear-gradient(-45deg, #1111DD, white)";

    }
    newGame();
}

function winHighlight()
{
    //horizontal
    if(btn1.innerHTML != "" && btn1.innerHTML==btn2.innerHTML && btn1.innerHTML==btn3.innerHTML)
    {
        btn1.style.backgroundColor = "#CECECE";
        btn2.style.backgroundColor = "#CECECE";
        btn3.style.backgroundColor = "#CECECE";
    }
     if(btn4.innerHTML != "" && btn4.innerHTML==btn5.innerHTML && btn4.innerHTML==btn6.innerHTML)
    {
        btn4.style.backgroundColor = "#CECECE";
        btn5.style.backgroundColor = "#CECECE";
        btn6.style.backgroundColor = "#CECECE";
    }
     if(btn7.innerHTML != "" && btn7.innerHTML==btn8.innerHTML && btn7.innerHTML==btn9.innerHTML)
    {
        btn7.style.backgroundColor = "#CECECE";
        btn8.style.backgroundColor = "#CECECE";
        btn9.style.backgroundColor = "#CECECE";
    }
    //vertical
     if(btn1.innerHTML != "" && btn1.innerHTML==btn4.innerHTML && btn1.innerHTML==btn7.innerHTML)
    {
        btn1.style.backgroundColor = "#CECECE";
        btn4.style.backgroundColor = "#CECECE";
        btn7.style.backgroundColor = "#CECECE";
    }
     if(btn2.innerHTML != "" && btn2.innerHTML==btn5.innerHTML && btn2.innerHTML==btn8.innerHTML)
    {
        btn2.style.backgroundColor = "#CECECE";
        btn5.style.backgroundColor = "#CECECE";
        btn8.style.backgroundColor = "#CECECE";
    }
     if(btn3.innerHTML != "" && btn3.innerHTML==btn6.innerHTML && btn3.innerHTML==btn9.innerHTML)
    {
        btn3.style.backgroundColor = "#CECECE";
        btn6.style.backgroundColor = "#CECECE";
        btn9.style.backgroundColor = "#CECECE";
    }
    //diagonal
     if(btn1.innerHTML != "" && btn1.innerHTML==btn5.innerHTML && btn1.innerHTML==btn9.innerHTML)
    {
        btn1.style.backgroundColor = "#CECECE";
        btn5.style.backgroundColor = "#CECECE";
        btn9.style.backgroundColor = "#CECECE";
    }
     if(btn3.innerHTML != "" && btn3.innerHTML==btn5.innerHTML && btn3.innerHTML==btn7.innerHTML)
    {
        btn3.style.backgroundColor = "#CECECE";
        btn5.style.backgroundColor = "#CECECE";
        btn7.style.backgroundColor = "#CECECE";
    }    
}