function initializeL1() {
    numCol = 5;
    numRow = 6;
    cellsize = 100;
    grid = createGrid();
    player1 = new Player(2, 2, 0);
    score = 0;
    page = 0;

}

function showGame() {
    drawGrid();
    player1.show();
}

function drawGrid() {

    for (let row = 0; row < numRow; row++) {

        for (let col = 0; col < numCol; col++) {
            let cellVal = grid[row][col];

            if (cellVal == 0) {
                fill(150);
            } else if (cellVal == 1) {
                fill(100);
            } else if (cellVal == 2) {
                fill(50);
            } else if (cellVal == 3) {
                fill(0);
            } else if (cellVal == 5) {
                fill(255);
            }
            noStroke();
            rect(col * cellsize, row * cellsize, cellsize, cellsize);
        }

    }
}

function createGrid() {
    let tGrid = [];
    for (let n = 0; n < 3; n++) {

        tGrid.push([5, 5, 5, 5, 5]);


    }

    for (let n = 0; n < 3; n++) {
        //CREATE a random row
        let tRow = [];
        for (let col = 0; col < 5; col++) {
            tRow.push(floor(random(0, 3)));
        }
        tGrid.push(tRow);
        console.log(tGrid);
        tRow.splice(floor(random(0, 4)), 1, 3);
    }
    return tGrid;

}
