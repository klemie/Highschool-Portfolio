// P5.JS TEMPLATE

//DELCARE VARIABLES
let CSizeX;
let CSizeY;
let winer;
let player1;
let player2;
let gun;
let gun2;
let score1;
let score2;
let p1hp;
let p2hp;
let dis1;
let dis2;
let game;
let state;
let powerupImg;

function preload() {
    powerupImg = loadImage("assets/powerup.png");
}


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    CSizeY = 600;
    CSizeX = 800;
    createCanvas(CSizeX, CSizeY);
    //INITIALIZE VARIABLES

    initialize();
    map1setup()
    initializemap1grid()

}

function start() {


}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {

    //LOGIC
    logic();
    //DRAWING
    map1draw()
    drawmap1Grid()
    drawF();
}


function keyPressed() { //EVENT FUNCTIONS 
    if (state == 0) {
        if (keyCode === 32) {
            for (let i = 0; i < 1; i++) {
                gun2.push(new Powerup(player2.x, player2.y, 4, 20, player2, -1, player2.Facing, player2.ex, player2.ey));

            }
        }
        if (keyCode === 13) {
            for (let i = 0; i < 1; i++) {
                gun.push(new Powerup(player1.x, player1.y, 4, 20, player1, 1, player1.Facing, player1.ex, player1.ey));

            }
        }
    }
}
//PERSONAL FUNCTIONS
//$(document).ready(function () {
//    $("#FullCon").click(function () {
//        CSizeY = innerHeight;
//        CSizeX = innerWidth;
//        player1.x = 660
//        console.log(aa)
//        alert("Hover over PLAYER 1 CONTROLS");
//    });
//
//});
