let x=200;
let y=300;
let r=30;
let R=255;
let G=0;
let B=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(R,G,B);
  circle(x,y,2*r);
}

function mousePressed(){
  if(dist(mouseX,mouseY,x,y)<=r){
    R=0;
    B=255;
  }
}