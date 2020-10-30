// Dot Intersection
//Global vars
var dots = [];
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(800, 600);
  //Call Dots
  for (var i = 0; i < 50; i++) {
    dots[i] = new Dot(random(width), random(height));
  }

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {

  background(0);
  for (var i = 0; i < dots.length; i++) {
    dots[i].update();
    dots[i].display();
    for (var j = 0; j < dots.length; j++) {
      if ( i != j && dots[i].Intersects(dots[j])) {
        dots[i].changecolor();
        dots[j].changecolor();
      }
    }
  }
}
