function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  beginShape();
  for(let i=0; i<width; i++){
    let y=sin(0.1*i);
    let yreal=map(y,-1,1,300,100);
    vertex(i,yreal);
  }
  endShape();
}
