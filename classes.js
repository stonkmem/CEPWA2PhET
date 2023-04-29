class Boat{
  constructor(x, y){
    rectMode(RADIUS);
    this.s = createVector(x, y);
    this.v = createVector(0, 0);
    this.a = createVector(0, 0);
  }
  applyA(ax, ay){
    this.a.add(createVector(ax, ay));
  }
  epoch(){
    this.v.add(this.a);
    this.v.x = constrain(this.v.x, -10, 10);
    this.v.y = constrain(this.v.y, -3, 3);
    this.s.add(this.v);
    this.s.x = constrain(this.s.x, 25/2, width-25/2);
    this.a = createVector(0, 0);
    noStroke();
    fill(0, 255, 80);
    rect(this.s.x, this.s.y, 25, 10);
    stroke(0, 0, 255);
  }
}