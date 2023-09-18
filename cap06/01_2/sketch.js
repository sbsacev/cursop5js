let indice;

function setup(){
  createCanvas(400,400);
  pixelDensity(1);
}

function draw(){
  background(0,20,255);
  loadPixels();
  for(let x=mouseX-50; x<mouseX+50; x++){
    for(let y=mouseY-50; y<mouseY+50; y++){
      indice = (y*width+x)*4;
      pixels[indice]=random(255);
      pixels[indice+1]=random(255);
      pixels[indice+2]=random(255);
      pixels[indice+3]=255;
    }
  }
  updatePixels();
}
