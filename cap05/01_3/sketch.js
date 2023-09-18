let imagen;
let indice;
let col;

function preload(){
  imagen=loadImage("fish.png");
}

function setup(){
  createCanvas(512,512);
  pixelDensity(1);
}

function draw(){
  background(0,20,255);
  
  image(imagen,0,0);
  fill(0,220);
  rect(0,0,width,height);
  loadPixels();
  for(let x=mouseX-70; x<mouseX+70; x++){
    for(let y=mouseY-70; y<mouseY+70; y++){
      let indice = (y*width+x)*4;
      col=imagen.get(x,y);
      if(dist(mouseX,mouseY,x,y)<70){
        pixels[indice]=col[0];
        pixels[indice+1]=col[1];
        pixels[indice+2]=col[2];
        pixels[indice+3]=255;
      }
    }
  }
  updatePixels();
}
