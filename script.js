
var odd = 1, cc = 0;

function Action(thatid) {
    
    var btn1 = document.getElementById('1'),
        btn2 = document.getElementById('2'),
        btn3 = document.getElementById('3'),
        btn4 = document.getElementById('4'),
        btn5 = document.getElementById('5'),
        btn6 = document.getElementById('6'),
        btn7 = document.getElementById('7'),
        btn8 = document.getElementById('8'),
        btn9 = document.getElementById('9'),
        vic = document.getElementById("victory");

    var cont = document.getElementById(thatid);
    if(cc!=9)
    if ( odd==1) {
        cont.innerHTML = "X";
        odd=0;
        cc++;
    } else {
        cont.innerHTML = "O";
        odd=1;
        cc++;
    }
    //horizontal
    if(btn1.innerHTML != "" && btn1.innerHTML== btn2.innerHTML && btn1.innerHTML == btn3.innerHTML){
        vic.innerHTML= "VICTORY!";
    }
    if(btn4.innerHTML != "" && btn4.innerHTML== btn5.innerHTML && btn4.innerHTML == btn6.innerHTML){
        vic.innerHTML= "VICTORY!";
    }
    if(btn7.innerHTML != "" && btn7.innerHTML== btn8.innerHTML && btn7.innerHTML == btn9.innerHTML){
        vic.innerHTML= "VICTORY!";
    }
    //diagonal
    if(btn1.innerHTML != "" && btn1.innerHTML== btn5.innerHTML && btn1.innerHTML == btn9.innerHTML){
        vic.innerHTML= "VICTORY!";
    }
    if(btn7.innerHTML != "" && btn7.innerHTML== btn5.innerHTML && btn7.innerHTML == btn3.innerHTML){
        vic.innerHTML= "VICTORY!";
    //vertical
    }
    if(btn1.innerHTML != "" && btn1.innerHTML== btn4.innerHTML && btn1.innerHTML == btn7.innerHTML){
        vic.innerHTML= "VICTORY!";
    }
    if(btn2.innerHTML != "" && btn2.innerHTML== btn5.innerHTML && btn2.innerHTML == btn8.innerHTML){
        vic.innerHTML= "VICTORY!";
    }
    if(btn3.innerHTML != "" && btn3.innerHTML== btn6.innerHTML && btn3.innerHTML == btn9.innerHTML){
        vic.innerHTML= "VICTORY!";
    }
    
}

function resetElement() {
    for(var i = 1; i <= 9; i++)
    {
        var cont = document.getElementById(i);
        cont.innerHTML = "";
        cc=0;
    }
    odd = 1;
    document.getElementById("victory").innerHTML= "";
}
