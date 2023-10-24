function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  flor(150,200,40);
  flor(200,300,10);
  flor(mouseX,mouseY,15);
}

function flor(x,y,r){
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
