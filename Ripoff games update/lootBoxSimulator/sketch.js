var skins = []
var x = 0;
var y = 0;
var moveX = -100
var loot;
var boxA = [];
var fps = 0
var stops;
var stop = false;
var back;

function preload() {
    //list of skins
    back = loadImage("assets/backgroundimg.png")
    skins[0] = loadImage("assets/frogg_original.png")
    skins[1] = loadImage("assets/water_blue.png")
    skins[2] = loadImage("assets/water_gardenofeden.png")
    skins[3] = loadImage("assets/water_original.png")
    skins[4] = loadImage("assets/log_cancer.png")
    skins[5] = loadImage("assets/log_original.png")
    skins[6] = loadImage("assets/lily_pad_original.png")
    skins[7] = loadImage("assets/mario_colourful.png")
    skins[8] = loadImage("assets/mario_default.png")
    skins[9] = loadImage("assets/mario_inverted.png")
    skins[10] = loadImage("assets/mario_purple.png")
    skins[11] = loadImage("assets/mario_shrek.png")
    skins[12] = loadImage("assets/frogg_camo.png")
    skins[13] = loadImage("assets/frogg_case_hardened.png")
    skins[14] = loadImage("assets/frogg_cookie_monster.png")
    skins[15] = loadImage("assets/frogg_golden.png")
    skins[16] = loadImage("assets/frogg_lasitha.png")
    skins[17] = loadImage("assets/lily_pad_pony.png")
    skins[18] = loadImage("assets/lily_pad_vortex.png")
    skins[19] = loadImage("assets/lily_pad_cheesecake.png")
    skins[20] = loadImage("assets/lily_pad_evil.png")
    skins[21] = loadImage("assets/water_poison.png")
    skins[22] = loadImage("assets/water_fade.png")
    skins[23] = loadImage("assets/water_corrupt.png")
    skins[24] = loadImage("assets/log_water.png")
}

function setup() {
    createCanvas(1000, 200)
    //draws boxes that go by
    boxA[0] = new clsbox(0, 20, -25, round(random(0, 24)))
    boxA[1] = new clsbox(200, 20, -25, round(random(0, 24)))
    boxA[2] = new clsbox(400, 20, -25, round(random(0, 24)))
    boxA[3] = new clsbox(600, 20, -25, round(random(0, 24)))
    boxA[4] = new clsbox(800, 20, -25, round(random(0, 24)))
    boxA[5] = new clsbox(1000, 20, -25, round(random(0, 24)))
    stops = round(random(500, 1000))
}

function draw() {
    background(back)
    //when to draw boxes
    if (frameCount < stops) {
        if (boxA.length > 0) {
            if (boxA[0].check()) {
                boxA.splice(0, 1)
                boxA[boxA.length] = new clsbox(975, 20, boxA[0].xSpeed, round(random(0, 24)))
            }
        }
    }
    for (var i = 0; i < boxA.length; i++) {
        boxA[i].update()
    }
    if (stop == true && boxA[0].x >= -115) {
        image(skins[boxA[2].tex], 0, 20, 200, 180)
    }
    if (stop == true && boxA[0].x < -115) {
        image(skins[boxA[3].tex], 0, 20, 200, 180)
    }
    //gold line in the middle
    stroke("gold")
    strokeWeight(3)
    line(500, 0, 500, 200)
}

class clsbox {
    constructor(x, y, xsp, skint) {
        this.x = x;
        this.y = y;
        this.w = 200;
        this.h = 200;
        this.xSpeed = xsp;
        this.tex = skint;
        this.multiplier = 600;
        this.rate = 0.08
    }
    check() {
        if (this.x <= (-200)) {
            return true;
        } else {
            return false;
        }
    }
    update() {
        if (this.xSpeed < 0) {
            this.x += this.xSpeed;
            this.xSpeed += this.rate;
        }
        if (this.xSpeed >= 0) {
            stop = true
        }
        image(skins[this.tex], this.x, this.y, this.w, this.h);
    }
}
