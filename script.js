function removeElement() {
    document.getElementById("imgbox1").style.display = "none";
}

function changeVisibility() {
    document.getElementById("imgbox2").style.visibility = "hidden";
}

function resetElement() {
    var image = document.getElementById('myImage');
        image.src = "X.png";
}

/*function click() {
    var box_id =  obj.id;
    this.src="X.png";
    box_id.src="X.png";
    
}*/
var odd = 1;
function changeImage(thatid) {
    
    var image = document.getElementById(thatid);
    if ( odd==1) {
        image.src = "X.png";
        odd=0;
    } else {
        image.src = "O.png";
        odd=1;
    }
    document.getElementById('thatid').disabled = 'disabled';
}