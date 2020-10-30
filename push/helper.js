class Player {
    constructor(x, y, size, c, speed) {
        this.x = x;
        this.y = y;
        this.s = size;
        this.color = c;
        this.sp = speed;
    }
    show() {
        fill(0);
        ellipse(this.x, this.y, 10, 10);
    }
    move() {
        //left
        if (keyIsDown(37)) {
            this.x -= this.sp;
        }
        //right
        if (keyIsDown(39)) {
            this.x += this.sp;

        }
        //down
        if (keyIsDown(40)) {
            this.y += this.sp;

        }
        //up
        if (keyIsDown(38)) {
            this.y -= this.sp;

        }

    }
}
class MovableBlock {
    constructor(x, y, size, c) {
        this.x = x;
        this.y = y;
        this.s = size;
        this.color = c;
        this.spe = 0;
    }
    show() {
        rectMode(CENTER);
        fill(this.color);
        rect(this.x, this.y, this.s, this.s);
    }
    move() {
        //left
        if (keyIsDown(37)) {
            this.x -= this.spe;
        }
        //right
        if (keyIsDown(39)) {
            this.x += this.spe;

        }
        //down
        if (keyIsDown(40)) {
            this.y += this.spe;

        }
        //up
        if (keyIsDown(38)) {
            this.y -= this.spe;

        }

    }
}
class ObstacleBlock {
    constructor(x, y, size, c) {
        this.x = x;
        this.y = y;
        this.s = size;
        this.color = c;
    }
    show() {
        fill(this.color);
        rect(this.x, this.y, this.s, this.s);
    }
}
