//direction 1 = up to down
//direction 0 = down to up
//rectangles should be 25 wide, 50 long

class rectangecover {
    constructor(x, direction) {
        this.x = x;
        if (direction == 1) {
            this.speed = 5;
            this.y = 50
        } else if (direction == 0) {
            this.speed = -5;
            this.y = 500
        }
    }
    show() {
        fill(105);
        noStroke()
        rect(this.x, this.y, 25, 50);
    }

    move() {
        this.y += this.speed
    }

    changeSpeed() {
        if (this.y == 500) {
            this.speed = -5;
        } else if (this.y == 50) {
            this.speed = 5
        }
    }
    playerCollision() {
        for (let i = 0; i < rectangleCoverArray.length; i++) {
            if (player1.y > this.y && player1.y < this.y + 50) {
                if (player1.x > this.x && player1.x < this.x + 25) {
                    player1.hblen -= 0.05
                    //console.log("die")
                }
            }
        }
        //for (let i = 0; i < rectangleCoverArray.length; i++) {
        if (player2.y > this.y && player2.y < this.y + 50) {
            if (player2.x > this.x && player2.x < this.x + 25) {
                player2.hblen -= 0.05
                //console.log("die")
            }
        }
        //}
    }
    gunCollision() {
        for (let i = 0; i < gun.length; i++) {
            if (gun[i].y > this.y && gun[i].y < this.y + 50) {
                if (gun[i].x > this.x && gun[i].x < this.x + 25) {
                   console.log("bulletcollision")
                    gun.splice(i, 1)
                    }
                }
            }
        for (let i = 0; i < gun2.length; i++) {
            if (gun2[i].y > this.y && gun2[i].y < this.y + 50) {
                if (gun2[i].x > this.x && gun2[i].x < this.x + 25) {
                   console.log("bulletcollision")
                    gun2.splice(i, 1)
                    }
                }
            }
        }
    }
