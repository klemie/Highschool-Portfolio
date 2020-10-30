// Match

// Declare Global Variables
let numRow;
let numCol;
let grid;
let cellsize;
let player1;
let page;
let score;
let timer;
let gtimer;
let highscore;
let font;
timer = 0;
gtimer = 0;
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    // Initialize Global Variables
textFont("Bungee");
    initializeL1();
    let cnv = createCanvas(numCol * cellsize, numRow * cellsize);
    cnv.parent("cnvContainer");

    background(255);
    highscoreInit();
    showGame();
    noLoop();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // DRAW FRAME
    background(255);
    highscoreChange();
    showGame();
    console.log(gtimer);
    if (page == 1) {
        gtimer++;
        timer++;
        player1.timer();
        textSize(32);
        fill("yellow");
        text(score, width / 2, 30);
    }
    if (page == 3) {
        background(255);
    }
    if(page == 4){
    background(255);
    let playerCon = new Player(4, 2, 0);
    playerCon.move();
    playerCon.show();

}
    player1.gameOver();

}


// EVENT FUNCTIONS
function keyPressed() {
    if (page == 1) {
        player1.timerReset();
        player1.move();
        player1.check();
        player1.restart();
    }
    if(page == 4){
        
    }
}
