

function light(show){
        
    let pic;
    if (show == 0){
        pic = "img/light-off.png";
    }
    else {
        pic = "img/light-on.png";
    }
    document.getElementById("bulb").src = pic;
}


