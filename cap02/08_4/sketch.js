let x=0;
let y=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(x,y,40);
}

function mouseDragged(){
  x=mouseX;
  y=mouseY;
}
