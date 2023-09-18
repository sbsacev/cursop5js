let dx;
let dy;
let dz=0;
let inc=0.1;
let cuan=40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  dy=0;
  for(let y=0; y<height; y+=height/cuan){
     dx=0;
    for(let x=0; x<width; x+=width/cuan){
      noStroke();
      fill(noise(dx,dy,dz)*155+100,noise(dx,dy,dz)*155+100,255);
      rect(x,y,width/cuan,height/cuan);
      dx+=inc;
    }
   dy+=inc;
  }
  dz+=0.01;
}