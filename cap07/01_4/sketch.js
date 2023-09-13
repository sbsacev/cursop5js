function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); //el ángulo se cambia a grados
}

function draw() {
  background(0); //fondo negro
  let n = map(mouseX,0,width,0,10); //valor de n entre 0 y 10
  let a = map(mouseY,0,height,80,5); //valor de a entre 5 y 80
  
  translate(width/2,height/2); //origen al centro de la pantalla
  noFill(); //sin relleno
  stroke(map(mouseY,0,height,200,255),map(mouseX,0,height,180,255),map(mouseX,0,height,180,255)); //línea de color variable
  strokeWeight(2); //grosor de línea igual a 2 
  beginShape(); //se comienza a graficar
  for (let ang = 0; ang <= 720; ang++) { //ciclo para el ángulo hasta un valor 720
    let r = a + a * cos(n*ang); //relación de r con el ángulo
    let x = r * cos(ang); //cambio de coordenadas polar a eje x
    let y = r * sin(ang); //cambio de coordenadas polar a eje y
    vertex(x, y); //se añaden puntos a la curva
  }
  endShape(); //se termina de graficar
  
  noStroke(); //texto sin borde
  fill(255); //texto blanco
  textSize(16); //tamaño de texto igual a 16
  text("a = "+a,-180,170); //muestra el valor de a
  text("n = "+n,-180,190); //muestra el valor de n
}
