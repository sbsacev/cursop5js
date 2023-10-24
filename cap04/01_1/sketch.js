let x=100;
let y=200;
let r=20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  push();
  fill(255,255,0);
  circle(x+r,y,2*r);
  circle(x,y+r,2*r);
  circle(x-r,y,2*r);
  circle(x,y-r,2*r);
  fill(255,50,50);
  circle(x,y,2*r);
  pop();
}