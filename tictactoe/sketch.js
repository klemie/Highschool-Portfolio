// P5.JS TEMPLATE - COMMENTS

// Declare Global Variables
let numCols;
let numRows;
let cellSize;
let grid;
let turn;
let winner;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {

    // Initialize Global Variables
    initialize();
    createCanvas(numCols * cellSize, numRows * cellSize);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    //   RUN LOGIC

    // DRAW FRAME
    background(255);
    showGame();
    win();
}
//EVENT FUNCTION
function mousePressed() {
    if (winner == false) {
        mP();
    }


}
