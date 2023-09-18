let v1;
let v2;
let a;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(220);
  v1=createVector(5,0);
  v2=createVector(-5,3);
  a=v1.angleBetween(v2);
}