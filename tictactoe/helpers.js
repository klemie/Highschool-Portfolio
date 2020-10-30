function initialize() {
    numCols = 3;
    numRows = 3;
    cellSize = 200;
    grid = createGrid();
    turn = 1;
    winner = false;
}

function showGame() {
    drawGrid();
}

function drawGrid() {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            let cellVal = grid[row][col];

            if (cellVal == 0) {
                fill(255);
            } else if (cellVal == 1) {
                fill("red");
            } else if (cellVal == 2) {
                fill("blue");
            }
            strokeWeight(1);
            stroke(0);
            rect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }
}

function createGrid() {
    let tGrid = [];
    for (let n = 0; n < 3; n++) {
        let tRow = [];
        for (let i = 0; i < 3; i++) {
            tRow.push(0);
        }
        tGrid.push(tRow);
    }
    return tGrid;
}

function click() {
    let col = floor(mouseX / cellSize);
    let row = floor(mouseY / cellSize);

    if (grid[row][col] == 1 || grid[row][col] == 2) {
        grid[row][col];
    } else if (grid[row][col] == 0) {
        grid[row][col] = turn;
    }

}

const k = 0;
const _ = 0;
function win() {
    if (++k%6) ; else _ =[random(0, 255), random(0, 255), random(0, 255)]
    //Check row red
        strokeWeight(random(0, 100))

    stroke(_[0], _[1], _[2]);
   
    textSize(60);
    
    if (grid[0][0] == 1 && grid[0][1] == 1 && grid[0][2] == 1) {
        text("Red wins", width / 2 - 120, height / 2);
        winner = true;

        console.log("winner r");
    }
    if (grid[1][0] == 1 && grid[1][1] == 1 && grid[1][2] == 1) {
        text("Red wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner r");
    }
    if (grid[2][0] == 1 && grid[2][1] == 1 && grid[2][2] == 1) {
        text("Red wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner r");
    }
    //check col red
    if (grid[0][0] == 1 && grid[1][0] == 1 && grid[2][0] == 1) {
        text("Red wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner r");
    }
    if (grid[0][1] == 1 && grid[1][1] == 1 && grid[2][1] == 1) {
        text("Red wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner r");
    }
    if (grid[0][2] == 1 && grid[1][2] == 1 && grid[2][2] == 1) {
        text("Red wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner r");
    }
    //Check row BLUE
    if (grid[0][0] == 2 && grid[0][1] == 2 && grid[0][2] == 2) {
        text("Blue wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    if (grid[1][0] == 2 && grid[1][1] == 2 && grid[1][2] == 2) {
        text("Blue wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    if (grid[2][0] == 2 && grid[2][1] == 2 && grid[2][2] == 2) {
        text("Blue wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    //check col BLUE
    if (grid[0][0] == 2 && grid[1][0] == 2 && grid[2][0] == 2) {
        text("Blue wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    if (grid[0][1] == 2 && grid[1][1] == 2 && grid[2][1] == 2) {
        text("Blue wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    if (grid[0][2] == 2 && grid[1][2] == 2 && grid[2][2] == 2) {
        text("Blue wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    //diaganle blue
    if (grid[0][0] == 2 && grid[1][1] == 2 && grid[2][2] == 2) {
        text("Blue wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    if (grid[0][2] == 2 && grid[1][1] == 2 && grid[2][0] == 2) {
        text("Blue wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    //red
    if (grid[0][0] == 1 && grid[1][1] == 1 && grid[2][2] == 1) {
        text("Red wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
    if (grid[0][2] == 1 && grid[1][1] == 1 && grid[2][0] == 1) {
        text("Red wins", width / 2 - 120, height / 2);
        winner = true;
        console.log("winner b");
    }
}

function mP() {
    click();
    if (turn === 1) {
        turn = 2;
    } else if (turn === 2) {
        turn = 1;
    }
}
