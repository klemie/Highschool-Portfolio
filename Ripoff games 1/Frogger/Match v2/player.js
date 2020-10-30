class Player {
    constructor(row, col, c) {
        this.row = row;
        this.col = col;
        this.c = c;
    }
    show() {
        fill(0);
        rect(this.col * cellsize, this.row * cellsize, cellsize, cellsize);
    }
    move() {
        if (keyCode == RIGHT_ARROW) {
            this.col++
        } else if (keyCode == LEFT_ARROW) {
            this.col--;
        }
        if (keyCode == RIGHT_ARROW && this.col > 4) {
            this.col = 0;
        }
        if (keyCode == LEFT_ARROW && this.col < 0) {
            this.col = 4;
        }
    }
    check() {
        if ((keyCode == 32) && (grid[this.row + 1][this.col]) == 3) {

            console.log("block below me is black af")
            grid.splice(this.row + 1, 1);

            grid.push([floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3))]);
            let lastRow = grid.length - 1;
            grid[lastRow].splice(floor(random(0, 5)), 1, 3);
            score++;


        } else if ((keyCode == 32) && (grid[this.row + 1][this.col]) != 3) {
            grid.push([floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3))]);
            this.row = this.row - 1;
            let lastRow = grid.length - 1;
            grid.shift();
            grid[grid.length - 1].splice(floor(random(0, 5)), 1, 3);


        }


    }
    timerReset() {
        if (keyCode == 32) {
            timer = 0;

        }
    }
    timer() {

        if (gtimer > 500 && timer == 90) {
            grid.push([floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3))]);
            this.row--;
            grid.shift();
            grid[grid.length - 1].splice(floor(random(0, 5)), 1, 3);
        } else if (gtimer > 1000 && timer == 75) {
            grid.push([floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3))]);
            this.row--;
            grid.shift();
            grid[grid.length - 1].splice(floor(random(0, 5)), 1, 3);
        } else if (gtimer > 1500 && timer == 60) {
            grid.push([floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3))]);
            this.row--;
            grid.shift();
            grid[grid.length - 1].splice(floor(random(0, 5)), 1, 3);
        }
        if (timer == 120) {
            grid.push([floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3)), floor(random(0, 3))]);
            this.row--;
            grid.shift();
            grid[grid.length - 1].splice(floor(random(0, 5)), 1, 3);

        }
    }
    gameOver() {
        if (this.row < 0) {
            textFont("Bungee");
            gtimer = 0;
            fill("yellow");
            textSize(70);
            text("Game over", width / 2 - 210, height / 2);
            textSize(30);
            text("Press R to restart", width / 2 - 150, height / 2 +40);
            text("Highscore:"+" " +highscore, width / 2 - 115, height / 2 +80);

        }
    }
    restart(){
        if(keyCode == 82){  
            setup(); 
            page = 1;
            loop();
        }
    }
}
