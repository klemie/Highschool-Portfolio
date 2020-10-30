class Player {
    constructor(x, y, r, col, dir, left, right, up, down, hp, dis) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.col = col;
        this.dir = dir;
        this.speed = 5;
        this.left = left;
        this.right = right;
        this.up = up;
        this.down = down;
        this.hp = hp;
        this.dis = dis;
        this.hblen = 40;
        this.Facing = 90;
        this.ex = 0;
        this.ey = 0;


    }
    show() {

        //Players 
        fill(this.col);
        stroke("lightgray");
        strokeWeight(2);
        ellipse(this.x, this.y, this.r * 2);
        stroke("white");
        line(this.x, this.y, this.x + this.ex, this.y + this.ey);
        fill(this.col);
        //Health bar
        fill("green");
        noStroke();
        rect(this.x - 20, this.y - 27, this.hblen, 2);

    }
    move() {
        //X constrain
        if (this.x < 20) {
            //this.x *= -1;
            this.x = 21;
            this.hblen -= 0.1
        } else if (this.x > 780) {
            //this.x *= -1;
            this.x = 779;
            this.hblen -= 0.1

        }
        //Y constrian
        if (this.y < 20) {
            //this.y *= -1;
            this.y = 21;
            this.hblen -= 0.1

        } else if (this.y > 580) {
            //this.y *= -1;
            this.y = 579;
            this.hblen -= 0.1

        }

        this.ex = 21 * cos(this.Facing * 3.1415 / 180);
        this.ey = 21 * -sin(this.Facing * 3.1415 / 180);
        //up
        if (keyIsDown(this.up)) {
            this.x += this.ex / 5;
            this.y += this.ey / 5;


        }
        //down
        if (keyIsDown(this.down)) {
            this.x -= this.ex / 5;
            this.y -= this.ey / 5;
        }
        //right
        if (keyIsDown(this.right)) {
            this.Facing -= 10;
        }
        //left
        if (keyIsDown(this.left)) {
            this.Facing += 10;

        }
        //crown winer
        if (this.hblen < -1) {
            this.hblen = 0;
            game = winer;
        }


    }

}

class Powerup {
    constructor(x, y, size, speed, target, dir, facing, epx, epy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.target = target;
        this.dir = dir;
        this.facing = facing;
        this.epx = epx;
        this.epy = epy;
    }
    show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.size * 2, this.size);
    }
    move() {
        this.x += this.epx
        this.y += this.epy
    }
}

function initialize() {
    state = 0;
    game = '';
    winer = '';
    p1hp = 100;
    p2hp = 100;
    score1 = 0;
    score2 = 0;
    gun = [];
    gun2 = [];
    player1 = new Player(20, height / 2, 20, "blue", 90, 37, 39, 38, 40, p1hp, dis1);
    player2 = new Player(780, height / 2, 20, "red", 90, 65, 68, 87, 83, p2hp, dis2);
}

function logic() {
    if (player1.hblen > player2.hblen) {
        winer = "Player 1 wins"
    } else {
        winer = "Player 2 wins"

    }
    if (game == "Player 1 wins" || game == "Player 2 wins") {
        state = 1;
    }

    if (state == 0) {

        if (keyIsPressed === 32) {

        }
    }
    for (let i = 0; i < gun.length; i++) {
        dis2 = dist(player2.x, player2.y, gun[i].x, gun[i].y);
    }
    for (let i = 0; i < gun2.length; i++) {
        dis1 = dist(player1.x, player1.y, gun2[i].x, gun2[i].y);
    }
    player1.move();
    player2.move();

    if (dis2 < 40) {
        //p2hp--;
        player2.hblen -= 4;
    }
    if (dis1 < 40) {
        //p1hp--;
        player1.hblen -= 4;
    }
}

function drawF() {
    textSize(40);
    for (let i = 0; i < gun.length; i++) {
        gun[i].move();
        gun[i].show();
    }
    for (let i = 0; i < gun2.length; i++) {
        gun2[i].move();
        gun2[i].show();

    }

    fill("ligtgray")
    text(game, 300, height / 2);
    player1.show();
    player2.show();
}
