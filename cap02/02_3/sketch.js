function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push();
  fill(255,0,0);
  strokeWeight(8);
  stroke(0,255,0);
  circle(200,200,100);
  pop();
  rect(200,350,100,50);
}
