let v1;
let v2;

function setup() {
  createCanvas(400, 400);
  background(220);
  v1=createVector(3,5);
  v2=createVector(4,8);
  
  v1.sub(v2);
}