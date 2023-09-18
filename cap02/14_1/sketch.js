let t=0;
let x;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10,255,70,20);
  x=100*cos(t)+200;
  circle(x,200,20);
  t=t+0.1;
}
