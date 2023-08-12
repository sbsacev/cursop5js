let x=0;
let img = [];

function preload(){
  for(let i=0; i<10; i++){
   img[i]=loadImage("ani"+nf(i,2)+".png");
  }
}

function setup() {
  createCanvas(500, 500);
  frameRate(20);
}

function draw() {
  background(220);
  let index=x%10;
  image(img[index],0,0);
  x++;
}
