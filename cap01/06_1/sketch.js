let puntaje=32;
let nota;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,100,0);
  if(puntaje<=30){
     nota=map(puntaje,0,30,1,4);
     }else{
     nota=map(puntaje,30,50,4,7);
  }
  textSize(40);
  text(nota,width/2,height/2);
}
