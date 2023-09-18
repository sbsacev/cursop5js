let t=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,55,170,20);
  translate(width/2,height/2);
  rotate(t);
  circle(100,0,20);
  t=t+0.1;
}
