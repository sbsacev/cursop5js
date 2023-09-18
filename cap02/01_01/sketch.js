let v;

function setup() {
  createCanvas(400, 400);
  v=createVector(3,5);
}

function draw() {
  background(220);
  text("componente x = "+v.x,40,40);
  text("componente y = "+v.y,40,60);
}