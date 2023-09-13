let x=[]; //arreglo para la posición en eje x
let y=[]; //arreglo para la posición en eje y
let largo=4; //distancia del ancho de la pantalla
let t=0; //tiempo inicial
let lambda; //longitud de onda
let c=10; //velocidad de la onda
let amplitud; //amplitud de la onda
let f; //variable para la frecuencia

function setup() {
 createCanvas(800, 400); //pantalla de 800 x 400 pixels
  for(let i=0; i<width; i++){ //se recorren todos los puntos del ancho de la pantalla
  x[i]=i*largo/width; //se calcula la posición x de acuerdo al ancho de la pantalla y se añade cada dato al arreglo x[i]
  }
 rectMode(CENTER); 
 }

function draw() {
  background(0,0,255); //fondo de color azul claro
  noCursor(); //se oculta el cursor en pantalla
  
  f=map(mouseX,0,width,1,80); //la posición x del mouse asigna la frecuencia
  amplitud=map(mouseY,0,height,150,0); //la posición y del mouse asigna la amplitud
  amplitud=constrain(amplitud,0,150); //se limita la amplitud entre 0 y 150
  lambda=c/f; //se calcula la longitud de onda λ
  
  //acá se comienza a dibujar la onda viajera
  stroke(255); //línea blanca
  strokeWeight(3); //grosor 3
  fill(0,0,122); //se rellena de color azul oscuro
  push(); 
  translate(0,height/2); //se traslada el origen al centro del lado izquierdo
  beginShape(); //comienza a plantear la figura a dibujar
  vertex(0,height/2); //se añade un punto inicial abajo a la izquierda
  for(let j=0; j<width; j++){ //se recorren todos los puntos del ancho de la pantalla
  y[j]=amplitud*cos((2*PI/lambda)*x[j]-2*PI*f*t); //se calcula la altura de cada punto de la onda de acuerdo a x[j], el tiempo y la amplitud de la onda.
  vertex(j,y[j]); //se dibuja cada punto de la onda en pantalla
  }
  vertex(width,height/2); //se añade un punto final abajo a la derecha
  endShape();
  //acá se termina de dibujar la onda
  
  strokeWeight(2); //línea de grosor 2
  fill(0); //color negro
  stroke(255,100,0); //línea rojiza
  ellipse(width/2,y[int(width/2)],8,8); //círculo de referencia en la mitad de la onda
  pop();
  
  noStroke(); //el texto no tiene bordes
  fill(255); //el texto se rellena de color blanco
  textSize(16); //tamaño del texto
  textAlign(CENTER); //se alinea texto en el centro
  text("Longitud de Onda",width/2, height-30); //se añade texto
  rect(width/2, height-20,width/largo*lambda,2); //se dibuja referencia para longitud de onda
  ellipse(mouseX,mouseY,4,4); //reemplazo el cursor por un círculo
  t+=0.001;
}
