function Dot(x, y) {

  this.x = x;
  this.y = y;
  this.r = 20;
  this.col = color(255);

  this.changecolor = function() {

    this.col = color(random(255), random(255), random(255));
  };
  this.Intersects = function(other) {

    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  };
  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);

  };
  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  };


}
