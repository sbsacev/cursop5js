let a=1;
let b=2;
let c=3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(a<b && b<c){
    text("Se cumplen ambas condiciones",100,200);
  }
  
  if(a>b || b<c){
    text("Se cumple una de las dos condiciones",100,300);
  }
}
