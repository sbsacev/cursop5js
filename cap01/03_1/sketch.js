function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  strokeWeight(4);
  beginShape();
  vertex(50,50);
  vertex(50,100);
  vertex(100,400);
  vertex(300,50);
  endShape();
}
