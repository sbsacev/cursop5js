let a=1;
let b=2;
let c=3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(a==b){
    text("a y b son iguales",200,200);
  }else{
    text("a y b son distintos",200,200);
  }
  
  if(b<c){
    text("b es menor que c",200,300);
  }else{
    text("b es mayor o igual que c",200,300);
  }
}
