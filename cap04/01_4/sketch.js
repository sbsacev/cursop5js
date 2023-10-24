function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(20);
  text(raiz(1,0,1),200,200);
}

function raiz(x, y, z){
  return sqrt(x*x+y*y+z*z);
}
