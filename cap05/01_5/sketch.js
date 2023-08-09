let colores=[];
let col1=0;
let col2=0;
let col3=0;
let c1=0;
let c2=0;
let c3=0;

function setup() {
  createCanvas(600, 400);
  colores[0]=color(0,0,0);           //negro    0
  colores[1]=color(168,115,50);      //café     1
  colores[2]=color(255,0,0);         //rojo     2
  colores[3]=color(255,193,8);       //naranjo  3
  colores[4]=color(255,255,0);       //amarillo 4
  colores[5]=color(0,255,0);         //verde    5
  colores[6]=color(0,0,255);         //azul     6
  colores[7]=color(225,0,255);       //morado   7
  colores[8]=color(155,155,155);     //gris     8
  colores[9]=color(255,255,255);     //blanco   9
}

function draw() {
  background(220);
  
  push(); //dibujo la resistencia (fondo)
  strokeWeight(4);
  stroke(150);
  line(0,290,width,290);
  strokeWeight(2);
  stroke(255);
  line(0,294,width,294);
  noStroke();
  fill(245, 232, 162);
  rect(100,230,280,120,15);
  pop();
  
  push(); //defino los selectores de color
  for(let y=0; y<10; y++){
    for(let x=0; x<3; x++){
      fill(colores[y]);
      stroke(0);
      rect(40*x+150,20+y*20,30,20);
    }
  }
  pop();
  
  noStroke();
  fill(col1); //dibujo y pinto primera franja de color
  rect(150,230,30,120);
  
  fill(col2); //dibujo y pinto segunda franja de color
  rect(190,230,30,120);
  
  fill(col3); //dibujo y pinto tercera franja de color
  rect(230,230,30,120); 
  push();
  //escribo los valores asociados a cada color y el valor de la resistencia
  fill(0);
  textSize(30);
  text(c1,155,380);
  text(c2,195,380);
  text(c3,235,380);
  text("= "+(c1*10+c2)*pow(10,c3)+" [Ω]",260,380);
  textAlign(CENTER);
  text("Código de colores para resistencias eléctricas, expresadas en Ω (ohm)",290,50,310,400);
  pop();
}

function mousePressed(){
  for(let y=0; y<10; y++){  //elijo la primera banda de color
  if(mouseX>150 && mouseX<180 && mouseY>20+y*20 && mouseY<40+y*20){
     c1=y;
    col1=colores[y];
  }
  }
  
  for(let y=0; y<10; y++){  //elijo la segunda banda de color
  if(mouseX>190 && mouseX<220 && mouseY>20+y*20 && mouseY<40+y*20){
     c2=y;
    col2=colores[y];
  }
  }
  
   for(let y=0; y<10; y++){  //elijo la tercera banda de color
  if(mouseX>230 && mouseX<260 && mouseY>20+y*20 && mouseY<40+y*20){
     c3=y;
    col3=colores[y];
  }
  }
}
