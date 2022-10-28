// This should shift to left and right, so we will have to creat an object of same key and values of CSS properitues so that we can use them
// hero
var hero={
    top:700,
    left:550,
}

// Now we want to know exact position of the missiles
// so we need another array here of missiles.




// event keydown on document
// https://css-tricks.com/snippets/javascript/javascript-keycodes/

document.onkeydown=function(e){
    // keycode=>37=>ArrowLeft
    if(e.keyCode===37){
    // if(e.keyCode===37 && hero.left>=0){
        console.log("Left")
        hero.left=hero.left-10;
        console.log(hero.left)
    }
    //keycode=>39=>ArrowRight
    if(e.keyCode===39){
    // if(e.keyCode===39 && hero.left<=1150){
        console.log("Right")
        hero.left=hero.left+10;
        console.log(hero.left)               
    }
    //keycode=>32=>Space//after the moveHero Function
    if(e.keyCode===32){
        console.log("FIRE")
        // missiles to be pushed=>shoot
        // now design the CSS
    }
     moveHero()
}


// create an function"moveHero" use this left and top,every time if we move top and left will be applied.
// it will be called inside the 1st function.
function moveHero(){
    document.getElementById('hero').style.left=hero.left+"px";
    document.getElementById('hero').style.top=hero.top+"px"
}
