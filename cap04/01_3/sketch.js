function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(20);
  text(rag(HALF_PI),200,200);
}

function rag(x){
  let g=180*x/PI;
  return g;
}
