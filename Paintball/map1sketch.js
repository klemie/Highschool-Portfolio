// P5.JS TEMPLATE - COMMENTS

// Declare Global Variables
var rectangleCoverArray = []
var treeimageArray = []

let numRows, numCols;
let grid;

// SETUP FUNCTION - Runs once at beginning of program
function map1setup() {
    createCanvas(800, 600);
    treeimageArray[0] = loadImage("assets/trees/tree1.png");
    treeimageArray[2] = loadImage("assets/trees/tree2.png");
    treeimageArray[3] = loadImage("assets/trees/tree3.png");


    // Initialize Global Variables
    rectangleCoverArray[0] = new rectangecover(100, 0)
    rectangleCoverArray[1] = new rectangecover(157.5, 1)
    rectangleCoverArray[2] = new rectangecover(215, 0)
    rectangleCoverArray[3] = new rectangecover(272.5, 1)
    rectangleCoverArray[4] = new rectangecover(330, 0)
    rectangleCoverArray[5] = new rectangecover(387.5, 1)
    rectangleCoverArray[6] = new rectangecover(445, 0)
    rectangleCoverArray[7] = new rectangecover(502.5, 1)
    rectangleCoverArray[8] = new rectangecover(560, 0)
    rectangleCoverArray[9] = new rectangecover(617.5, 1)
    rectangleCoverArray[10] = new rectangecover(675, 0)

}

// DRAW FUNCTION - Loops @ 60FPS by default
function map1draw() {
    // RUN LOGIC
    for (let i = 0; i < rectangleCoverArray.length; i++) {
        rectangleCoverArray[i].move()
        rectangleCoverArray[i].changeSpeed()
        rectangleCoverArray[i].playerCollision()
        rectangleCoverArray[i].gunCollision()
        if (rectangleCoverArray == rectangecover.length) {
            i = 0;
        }
    }
    // DRAW FRAME
    background(96, 128, 56);
    image(treeimageArray[0], 280, 160, 199 * 0.5, 200 * 0.5)
    image(treeimageArray[2], 270, 335, 254 * 0.22, 500 * 0.22)
    image(treeimageArray[2], 460, 160, 254 * 0.22, 500 * 0.22)
    image(treeimageArray[0], 460, 335, 199 * 0.5, 200 * 0.5)
    image(treeimageArray[3], 300, 213.25, 810 * 0.25, 747 * 0.25)
    for (let i = 0; i < rectangleCoverArray.length; i++) {
        rectangleCoverArray[i].show()
        if (rectangleCoverArray == rectangecover.length) {
            i = 0;
        }
    }
}

function initializemap1grid() {
    numRows = 5;
    numCols = 5;
    grid = [[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]];
    let aRow = ceil(random(0, numRows - 1))
    let aCol = ceil(random(0, numCols - 1))
    console.log(aRow + ", " + aCol)
    grid[aRow].splice(aCol, 1, 1)
}

function drawmap1Grid() {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            let cellVal = grid[row][col];
            //console.log(cellVal);
            if (cellVal == 1) {
//                console.log(row)
//                console.log(col)
                image(powerupImg, row * (width / 5), col * (height / 5), 359 * 0.3, 359 * 0.3)
            }
        }
    }
}
