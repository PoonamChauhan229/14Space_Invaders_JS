// This should shift to left and right, so we will have to creat an object of same key and values of CSS properitues so that we can use them
// hero
var hero={
    top:570,
    left:550,
}

// Missiles
// Now we want to know exact position of the missiles
// so we need another array here of missiles which will be empty.
var missiles=[];
// Add an object inside this missile , which exactly will show the position of that missile, wherever our hero is
// After we hit on space bar , missiles will be shooted.

// Enemies=>same like missiles
// We will put predefined top and left as it should be visible 
var enemies = [
    // first line
    { left: 200, top: 100 },
    { left: 300, top: 100 },
    { left: 400, top: 100 },
    { left: 500, top: 100 },
    { left: 600, top: 100 },
    { left: 700, top: 100 },
    { left: 800, top: 100 },
    { left: 900, top: 100 },

    // second line
    { left: 200, top: 175 },
    { left: 300, top: 175 },
    { left: 400, top: 175 },
    { left: 500, top: 175 },
    { left: 600, top: 175 },
    { left: 700, top: 175 },
    { left: 800, top: 175 },
    { left: 900, top: 175 }
];


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
        // left has to be as per hero
        missiles.push({
            left:hero.left+21,
            top:hero.top-21,
        })
        console.log(missiles)
        drawMissiles()
        // moveMissiles()
    }
     moveHero()
}


// create an function"moveHero" use this left and top,every time if we move top and left will be applied.
// it will be called when the key is pressed.
function moveHero(){
    document.getElementById('hero').style.left=hero.left+"px";
    document.getElementById('hero').style.top=hero.top+"px"
}

// Grab the missiles and display or draw the missiles on the browsers
// And it will be called when key space is pressed
function drawMissiles(){
    // we will use a loop so that we can go inside the each object 
    // and it will an element inside the missiles container
    document.getElementById('missiles').innerHTML="",
    missiles.map((element)=>{
        document.getElementById('missiles').innerHTML+=`
            <div class='missile' style='left:${element.left}px;top:${element.top}px;'></div>
        `    
    })
}

// Move Missles
// 
function moveMissiles(){
    // we will use a loop so that we can go inside the each object of missiles array.
    // 
    missiles.map((element)=>{
        element.top= element.top-21     
    })
}

// this should automatically move

function gameLoop(){  
    moveMissiles()
    drawMissiles()
    moveEnemies()
    drawEnemies()
    shooting()
    gameEnd();
    console.log("hi")
}
// gameLoop()

// let game=setInterval(gameLoop,300)
var game;
// enenmies 

function drawEnemies(){
    // we will use a loop so that we can go inside the each object 
    // and it will an element inside the enemies container
    document.getElementById('enemies').innerHTML="",
    enemies.map((element)=>{
        document.getElementById('enemies').innerHTML+=`
            <div class='enemy' style='left:${element.left}px;top:${element.top}px;'></div>
        `    
    })
}

function moveEnemies(){
    // we will use a loop so that we can go inside the each object of missiles array.
    // 
    enemies.map((element)=>{
        element.top= element.top+3     
    })
}

// shooting
function shooting() {
    for (let enemy = 0; enemy < enemies.length; enemy++) {
        for (let missile = 0; missile < missiles.length; missile++) {
            if (
                missiles[missile].left >= enemies[enemy].left &&
                missiles[missile].left <= (enemies[enemy].left + 50) &&

                missiles[missile].top >= enemies[enemy].top &&
                missiles[missile].top <= (enemies[enemy].top + 50)
            ) {
                console.log('hit');
                enemies.splice(enemy, 1);
                missiles.splice(missile, 1);
            }
        }
    }
}


// game End
var player = document.getElementById('player')
function gameEnd(){
    let container = document.getElementById("background")
    if(enemies.length===0){    
    container.innerHTML = `<div class="result">${player.value},YOU WIN😍😍😊😊</div>`
    console.log("Win");

    clearInterval(game);
    // disable the keypress
    disable();
    
    }
    else if(enemyChecker()){    
    let container = document.getElementById("background")
    container.innerHTML += `<div class="result">${player.value},YOU LOOSE!!!😌😌</div>`
    console.log("Loose");
    clearInterval(game);
    // disable the keypress
    disable()
    }
}
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// for loosing the game , if any enemy is left out and it shouldnt go down more than 645
function enemyChecker(){
   return enemies.some((data)=>data.top==529)
    // console.log(enemies.some((data)=>console.log(data.top)))
}

// Now we need to disable the keypress as well

function disable(){
    document.onkeydown=function(e){
        return false;
    }
}

function gameTimer(){
    var timer=setInterval(gameLoop,300)
    return timer;
}

// player name and all
// var player = document.getElementById('player')
var playerContainer = document.getElementById('playerContainer')
var background=document.getElementById('background')
document.getElementById('button').addEventListener("click", function(event) {

    if (player.value == "") {
        alert("Enter the Player Names")
        playerContainer.style.display = "block";
        background.style.display = "none";

    }
    else{
        playerContainer.style.display = "none";
        background.style.display = "block";
        console.log(player.value)
        game=gameTimer()
    }
       

})
