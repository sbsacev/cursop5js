let control=0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(220);
  textSize(20);
  text("control = "+control,width/2,40);
  text("control%3 = "+control%3,width/2,70);
  circle(control%3*100+100,300,50);
}

function mousePressed(){
  control++;
}