let control = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(40);
  text(control, 200,200);
}

function keyPressed(){
  control = 1;
}

function keyReleased(){
  control = 0;
}
