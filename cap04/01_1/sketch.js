let x=200
let y=100;
let indice;

function setup(){
  createCanvas(400,400);
  pixelDensity(1);
}

function draw(){
    background(255);
    indice=(y*width+x)*4;
    loadPixels();
    pixels[indice]=255; //valor canal R
    pixels[indice+1]=0; //valor canal G
    pixels[indice+2]=255; //valor canal B
    pixels[indice+3]=255; //valor canal alfa (transparencia)
    updatePixels();
}
