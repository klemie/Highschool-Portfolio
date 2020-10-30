// P5.JS TEMPLATE - COMMENTS

// Declare Global Variables
let level;
let follower1;
let player;
let safezone;
let d;
let intiTime;
let start;
let displayer;
let disfollower;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    let cnv = createCanvas(800, 600);
    cnv.parent("cnvContainer");

    // Initialize Global Variables
   level = 0;
    intiMM();
    
 
}
// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    
    if (level == 0) {
        showMM();
    } else if (level == 1) {
        showLvl1();    
    }
}

$(document).ready(function () {
    $("#lvl1").click(function() {
        level = 1;
        intiLvl1();
        $("#pausebtcon").show();
        $(".levelsCon").hide();
    });
        $("#lvl2").click(function() {
        level = 2;
        intiLvl2();
        $(".levelsCon").hide();
    });
    //pause button
     $("#pausebtcon").click(function () {
        $("#pause").toggle();
        if ($("#pause").is(":visible")) {
            noLoop();
        } else {
            loop();
        }

    });
      $("#levels").click(function () {
        $(".levelsCon").show();
        $("#pause").hide();
        $(".pausebtcon").hide();
        level = 0;
    });
    $("#MMenu").click(function () {
        $(".MMcon").show();
        $("#pause").hide();
        $("#pausebtcon").hide();
        level = 0;

    });
    $("#playbt").click(function () {
        $(".levelsCon").show();
        $(".MMcon").hide();
    });  
});