var frogg = [];
var loggL = [];
var loggR = [];
var lp = [];
var imgfrogg;
var imgwater;
var imgwater2;
var imglog;
var imglp;
var imggrass;
var deathSound;
var safe;

function preload() {
    imgfrogg = loadImage("assets/frogg_original.png")
    imgwater = loadImage("assets/water_good.png")
    imgwater2 = loadImage("assets/water_good2.png")
    imglog = loadImage("assets/log_original.png")
    imglp = loadImage("assets/lily_pad_original.png")
    deathSound = loadSound("assets/deathsound_cookie_monster.mp3")
    imggrass = loadImage("assets/grass.png")
}


function setup() {
    createCanvas(700, 800)
    imageMode(CENTER)

    frogg[0] = new constructorFrogg(350, 750, 20, 0);
    //Separate by 275
    loggL[0] = new constructorloggL(275, 500);
    loggL[1] = new constructorloggL(550, 500);
    loggL[2] = new constructorloggL(825, 500);
    loggL[3] = new constructorloggL(125, 400);
    loggL[4] = new constructorloggL(400, 400);
    loggL[5] = new constructorloggL(675, 400);
    loggL[6] = new constructorloggL(275, 200);
    loggL[7] = new constructorloggL(550, 200);
    loggL[8] = new constructorloggL(825, 200);
    loggL[9] = new constructorloggL(125, 600);
    loggL[10] = new constructorloggL(400, 600);
    loggL[11] = new constructorloggL(675, 600);
    loggR[0] = new constructorloggR(125, 550);
    loggR[1] = new constructorloggR(400, 550);
    loggR[2] = new constructorloggR(675, 550);
    loggR[3] = new constructorloggR(125, 650);
    loggR[4] = new constructorloggR(400, 650);
    loggR[5] = new constructorloggR(675, 650);
    loggR[6] = new constructorloggR(-25, 100);
    loggR[7] = new constructorloggR(250, 100);
    loggR[8] = new constructorloggR(525, 100);
    loggR[9] = new constructorloggR(-25, 350);
    loggR[10] = new constructorloggR(250, 350);
    loggR[11] = new constructorloggR(525, 350);
    loggR[12] = new constructorloggR(125, 250);
    loggR[13] = new constructorloggR(400, 250);
    loggR[14] = new constructorloggR(675, 250);
    //Lily Pad
    lp[0] = new constructorlp(300, 450)
    lp[1] = new constructorlp(200, 450)
    lp[2] = new constructorlp(450, 300)
    lp[3] = new constructorlp(350, 700)
    lp[4] = new constructorlp(400, 700)
    lp[5] = new constructorlp(300, 700)
    lp[6] = new constructorlp(250, 150)
    lp[7] = new constructorlp(550, 150)


}

function draw() {

    background(61, 196, 3)
    image(imgwater, 350, 250)
    image(imgwater2, 350, 570)
    image(imggrass, 350, 40)
    image(imggrass, 350, 750)

    //Left logs
    for (var i = 0; i < loggL.length; i++) {
        loggL[i].display()
        loggL[i].x -= 1
        //Make logs teleport to other side
        if (loggL[i].x < -25) {
            loggL[i].x = 775
        }
    }

    //Right logs
    for (i = 0; i < loggR.length; i++) {
        loggR[i].display()
        loggR[i].x += 1
        //Make logs teleport to other side
        if (loggR[i].x > 725) {
            loggR[i].x = -75
        }
    }

    for (i = 0; i < lp.length; i++) {
        lp[i].display();
    }

    for (i = 0; i < frogg.length; i++) {
        frogg[i].display()
    }



    //Frog death sequence {
    safe = 0
    for (i = 0; i < loggL.length; i++) {
        if (frogg[0].x > loggL[i].x - loggL[i].w / 2) {
            if (frogg[0].x < loggL[i].x + loggL[i].w / 2) {
                if (frogg[0].y > loggL[i].y - loggL[i].h / 2) {
                    if (frogg[0].y < loggL[i].y + loggL[i].h / 2) {
                        safe = 1
                    }
                }
            }
        }
    }
    for (i = 0; i < loggR.length; i++) {
        if (frogg[0].x > loggR[i].x - loggR[i].w / 2) {
            if (frogg[0].x < loggR[i].x + loggR[i].w / 2) {
                if (frogg[0].y > loggR[i].y - loggR[i].h / 2) {
                    if (frogg[0].y < loggR[i].y + loggR[i].h / 2) {
                        safe = 1
                    }
                }
            }
        }
    }
    for (i = 0; i < lp.length; i++) {
        if (frogg[0].x == lp[i].x && frogg[0].y == lp[i].y) {
            safe = 1
        }
    }
    if (frogg[0].y > 745) {
        safe = 1
    }
    if (frogg[0].y < 95) {
        safe = 1
    }

    if (safe === 0) {
        deathSound.play()
        frogg[0].x = 350
        frogg[0].y = 750
    }

    if (frogg[0].x > 700) {
        frogg[0].x = 700
    } else if (frogg[0].x < 0) {
        frogg[0].x = 0
    } else if (frogg[0].y < 0) {
        frogg[0].y = 0
    } else if (frogg[0].y > 800) {
        frogg[0].y = 800
    }

    if (frogg[0].y < 95) {
        textSize(80)
        stroke(random(1, 255), random(1, 255), random(1, 255))
        text("YOU WIN!!!", 175, 400)
    }
}

function constructorFrogg(x, y, radius, angl) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angle = angl;



    this.display = function () {
        fill(76, 255, 0)
        image(imgfrogg, this.x, this.y)
    }
}

function constructorloggL(x, y) {
    this.x = x;
    this.y = y;
    this.w = 140
    this.h = 50

    this.display = function () {
        image(imglog, this.x, this.y)
    }
}

function constructorloggR(x, y) {
    this.x = x;
    this.y = y;
    this.w = 140
    this.h = 50

    this.display = function () {
        image(imglog, this.x, this.y)
    }
}

function constructorlp(x, y) {
    this.x = x;
    this.y = y;

    this.display = function () {
        image(imglp, this.x, this.y)
    }
}

function keyPressed() {
    if (keyCode == 87) {
        frogg[0].y -= 50
    }
    if (keyCode == 83) {
        frogg[0].y += 50
    }
    if (keyCode == 65) {
        frogg[0].x -= 50
    }
    if (keyCode == 68) {
        frogg[0].x += 50
    }

}
