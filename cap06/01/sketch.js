function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  beginShape();
  for(let x=0; x<width; x++){
    vertex(x,random(100,300));
  }
  endShape();
  noLoop();
}