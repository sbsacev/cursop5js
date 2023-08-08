let datos;
let x=[];
let y=[];

function preload(){
  datos=loadStrings("valores.txt");  
}

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(200);

  for(let i=0; i<datos.length; i++){
     let dato=split(datos[i],';');
     x[i]=dato[0];
     y[i]=dato[1];
  }
}
