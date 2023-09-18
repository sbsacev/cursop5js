let dx=0;
let inc=0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  beginShape();
  for(let x=0; x<width; x++){
    vertex(x,noise(dx)*200+100);
    dx+=inc;
  }
  endShape();
  noLoop();
}