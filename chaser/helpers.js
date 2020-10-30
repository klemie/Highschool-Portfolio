//class safezone
function mianMenu() {

}
class DisplayPlayer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xs = 5;
        this.ys = 5;
        this.size = 20;
    }
    show() {
        fill(0);
        rectMode(CENTER);
        rect(this.x, this.y, this.size, this.size);
    }
    move() {
        this.x += 4;
        if (this.x > 800) {
            this.x = 0;
        }
    }
}
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xs = 5;
        this.ys = 5;
        this.size = 20;
    }

    show() {
        fill(0);
        rectMode(CENTER);
        rect(this.x, this.y, this.size, this.size);
    }
    move() {
        this.x = constrain(this.x, 0, 780);
        this.y = constrain(this.y, 0, 580);
        //up
        if (keyIsDown(38)) {
            this.y -= this.ys;
        }
        //down
        if (keyIsDown(40)) {
            this.y += this.ys;
        }
        //left
        if (keyIsDown(37)) {

            this.x -= this.xs
        }
        //right
        if (keyIsDown(39)) {
            this.x += this.xs

        }
    }
}
class Follower {

    constructor(x, y, target) {
        this.x = x;
        this.y = y;
        this.target = target;
        this.xs = 3;
        this.ys = 3;
        this.col = color(244, 78, 66);
    }


    show() {
        stroke(this.col)
        fill(this.col);
        ellipse(this.x, this.y, 20, 20);
    }

    move() {
        let run = this.target.x - this.x;
        let rise = this.target.y - this.y;
        let d = dist(this.x, this.y, this.target.x, this.target.y);
        let dy = this.ys * rise / d;
        let dx = this.xs * run / d;
        this.x += dx;
        this.y += dy;
        this.x = constrain(this.x, 10, 800);
        this.y = constrain(this.y, 10, 590);
    }
    lose() {
        let dis = dist(this.x, this.y, this.target.x, this.target.y);
        if (dis < 2) {
            this.xs = 0;
            this.ys = 0;
            this.target.xs = 0;
            this.target.ys = 0;
            $(".overlay").show();
            $("#text").text("You lose");
        }
    }
    win() {
        start = frameCount;
        intiTime = frameCount - start;
        if (frameCount == 600) {
            this.xs = 0;
            this.ys = 0;
            this.target.xs = 0;
            this.target.ys = 0;
            $(".overlay").show();
            $("#text").text("You win");
        }
    }
}
//power ups
class SafeZone {
    constructor(x, y, player, ssx, ssy, follower) {
        this.x = x;
        this.y = y;
        this.ssx = ssx;
        this.ssy = ssy;
        this.player = player;
        this.follower = follower;
        this.size = 10;
        this.on = false;
        // this.a = 0;
    }
    show() {
        // Draw Powerup
        //translate(300, 200)
        //rotate(this.a);

        rectMode(CENTER);
        rect(this.x, this.y, this.size, this.size);
        // this.a += .01;

        // Draw Safezone
        if (this.on) {
            rectMode(CORNER);
            noFill();
            stroke(0);
            rect(this.ssx, this.ssy, 200, 601);
            this.follower.x = constrain(this.follower.x, 0, 700);
        }

    }

    playerDetect() {
        let d = dist(this.x, this.y, this.player.x, this.player.y);

        if (d < 10) {
            this.on = true;
            this.y = 1000;
            start = frameCount;
            intiTime = frameCount - start;
        }
    }
    runTimer() {
        if (intiTime == 60) {
            this.on = false;
        }
    }

}
//Initi levels
function intiMM() {
    displayer = new DisplayPlayer(0, 450);
    disfollower = new Follower(-10, 500, displayer);
}

function showMM() {
    displayer.move();
    disfollower.move();
    //    
    background(255);

    disfollower.show();
    displayer.show();
}

function intiLvl1() {
    player = new Player(400, 300);
    follower1 = new Follower(200, 200, player);
    safezone = new SafeZone(300, 200, player, 700, -1, follower1);
    safezone.playerDetect();
}

function showLvl1() {
    // RUN LOGIC
    player.move();
    follower1.move();
    follower1.lose();
    follower1.win();
    safezone.runTimer();
    // DRAW FRAME

    background(255);
    player.show();

    safezone.show();

    //chaser
    follower1.show();
    console.log(frameCount);
}
//JQUERY
$(document).ready(function () {


});
