let x=200; //posición inicial x de la pelota
let y=200; //posición inicial x de la pelota
let vx;    //velocidad x de la pelota
let vy;    //velocidad y de la pelota

function setup() {
  createCanvas(400, 400);
  vx=random(4,6); //se le asigna valor a velocidad vx
  vy=random(5,8); //se le asigna valor a velocidad vy
}

function draw() {
  background(220,100,60,30);
  //si la pelota choca con los bordes, cambia de dirección
  if(x>width || x<0){
     vx*=-1; //si vx es positivo cambia a negativo (y viceversa)
     }
    if(y>height || y<0){
     vy*=-1; //si vy es positivo cambia a negativo (y viceversa)
     }
  
  circle(x,y,20);  //se dibuja el círculo
  x+=vx; //x cambia en una cantidad vx
  y+=vy; //y cambia en una cantidad vy
}
