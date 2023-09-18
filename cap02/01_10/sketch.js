let v1;
let v2;
let p;

function setup() {
  createCanvas(400, 400);
  background(220);
  v1=createVector(3,5);
  v2=createVector(4,8);
  
  p=v1.dot(v2);
}