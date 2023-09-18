let control=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  print(control);
}

function mousePressed(){
  control=1;
}

function mouseReleased(){
  control=0;
}
