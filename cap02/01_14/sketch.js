let v1;
let v3;

function setup() {
  createCanvas(400, 400);
  background(220);
  v1=createVector(3,5);
  
  v3=p5.Vector.normalize(v1);
}