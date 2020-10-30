// P5.JS TEMPLATE
// Delcare Global variables
let player;
let movableBlocks;
let obstacleBlocks;
let d;
let od;
let x;
let y;
let dis;
let diso;
let winText;
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    //initialize variables
    winText = '';

    x = 400;
    y = 400;
    movableBlocks = [];
    obstacleBlocks = [];
    player = new Player(200, 200, 10, 200, 3);
    for (let i = 0; i < 10; i++) {
        obstacleBlocks.push(new MovableBlock(random(width), random(height), 40, 200));
    }
    for (let i = 0; i < 1; i++) {
        movableBlocks.push(new MovableBlock(random(width), random(height), 40, 0));
    }

}

function draw() {
    //LOGIC
    player.move();
    for (let i = 0; i < movableBlocks.length; i++) {
        if (dis < movableBlocks[i].s - 30) {
            movableBlocks[i].spe = 0;
            winText = 'YOU WIN';

        }
        for (let i = 0; i < movableBlocks.length; i++) {
            movableBlocks[i].move();
            if (d < movableBlocks[i].s - 13) {
                movableBlocks[i].spe = 3;
            }
        }
        //DRAW
        background(255);
        textSize(32);
        fill("red");
        text(winText, width / 2, height / 2);
        rect(x, y, 50, 50);
        player.show();
        for (let i = 0; i < movableBlocks.length; i++) {
            d = dist(player.x, player.y, movableBlocks[i].x, movableBlocks[i].y);

            dis = dist(movableBlocks[i].x, movableBlocks[i].y, x, y);
            movableBlocks[i].show();
        }
        for (let i = 0; i < obstacleBlocks.length; i++) {
            od = dist(player.x, player.y, obstacleBlocks[i].x, obstacleBlocks[i].y);

            diso = dist(obstacleBlocks[i].x, obstacleBlocks[i].y, x, y);
            obstacleBlocks[i].show();
        }


    }
}
//EVENT FUNCTION
