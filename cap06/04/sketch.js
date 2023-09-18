let dx;
let dy=0;
let inc=0.1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let y=0; y<height; y+=height/40){
     dx=0;
    for(let x=0; x<width; x+=width/40){
      noStroke();
      fill(noise(dx,dy)*255);
      rect(x,y,10,10);
      dx+=inc;
    }
   dy+=inc;
  } 
  noLoop();
}