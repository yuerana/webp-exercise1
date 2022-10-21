var images = document.querySelector(".images");
var img = document.querySelector(".img");
var guide = document.querySelector("#guide");
var b = document.querySelectorAll("b");

var index = 0;
var time;


function change(i){
    index = i;
    position();
    clearInterval(time);
    timer();
}

function position(){
    images.style.left = index*-615 - 5 + "px";
}

function reset(){
    if(index >= 5){
        index = 0;
}
}

function timer(){
    time = setInterval(()=>{
        index++;
        reset();
        position();
    }, 1000)
}
timer();
