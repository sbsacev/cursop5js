let texto;

function preload(){
  texto=loadStrings("archivo.txt");  
}

function setup(){
  createCanvas(400,400);
}

function draw(){<z
  background(200);
  textSize(16);
  for(let i=0; i<texto.length; i++){
     text(texto[i],20,30+20*i);
  }
}
