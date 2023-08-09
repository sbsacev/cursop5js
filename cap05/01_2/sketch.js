let a, b, c, d, e; //declarar factores del polinomio

function setup() {
  createCanvas(800, 600);
  //acá se crean los deslizadores para las variables 
  A = createSlider(-15, 15, 0, 30 / width); 
  A.position(10, 10);
  A.size(80);
  B = createSlider(-15, 15, 0, 30 / width);
  B.position(10, 30);
  B.size(80);
  C = createSlider(-15, 15, 0, 30 / width);
  C.position(10, 50);
  C.size(80);
  D = createSlider(-15, 15, 0, 30 / width);
  D.position(10, 70);
  D.size(80);
  E = createSlider(-150, 150, 0, 30 / width);
  E.position(10, 90);
  E.size(80);

  // se crea el check para la Derivada
  checkbox = createCheckbox('', false);
  checkbox.position(10, 115);

  //se crea el botón de reinicio
  button = createButton('Inicio');
  button.position(10, height-30);
  button.size(50, 20);
  button.mousePressed(Resetear);
}

function draw() {
  background(0); //Se establece fondo negro
  textSize(14); //Tamaño de texto en 14
  noStroke();
  fill(0, 255, 0);
  
  //Se adquieren los datos de acuerdo a los deslizadores
  // y se muestran en pantalla.
  a = A.value();
  text("a = " + a, 100, 23);
  b = B.value();
  text("b = " + b, 100, 43);
  c = C.value();
  text("c = " + c, 100, 63);
  d = D.value();
  text("d = " + d, 100, 83);
  e = E.value();
  text("e = " + e, 100, 103);
  
  text("Derivada", 35, 129);
  text("x", width / 2 - 10, 10);
  text("t", width - 8, height / 2 + 12);
  
  push(); 
  translate(width / 2, height / 2); //traslada el origen (0,0) a la mitad del canvas
  noFill();
  beginShape(); //inicio de gráfica de la curva
  for (let j = -width / 2; j < width / 2; j++) { //ciclo que calcula la función
    let t1 = map(j, -width / 2, width / 2, -15, 15); //valores de t
    let treal = map(t1, -15, 15, -width / 2, width / 2); //t en pantalla
    let x1 = -(a * pow(t1, 4) + b * pow(t1, 3) + c * pow(t1, 2) + d * t1 + e); //valores de x
    let xreal = map(x1, -200, 200, -height / 2, height / 2); //x en pantalla
    stroke(255, 0, 0); //línea de color rojo
    vertex(treal, xreal); //dibuja cada uno de los puntos de la curva
  } //fin del ciclo
  endShape(); //fin de gráfica de la curva
  pop(); 

  //Se calcula y muestra un punto sobre la curva de acuerdo a posición del mouse
  let tt = map(mouseX - width / 2, -width / 2, width / 2, -15, 15);
  let mousexx = -(a * pow(tt, 4) + b * pow(tt, 3) + c * pow(tt, 2) + d * tt + e);
  let posX = map(mousexx, -200, 200, -height / 2, height / 2);
  ellipse(mouseX, posX + height / 2, 4, 4);
  
  noStroke();
  text("x = " + (-mousexx), width-200, 20); //muestra valor de x en pantalla
  text("t = " + tt, width-200, 40); //muestra valor de t en pantalla

  stroke(0, 255, 0); //ejes de color verde
  line(0, height / 2, width, height / 2); //eje t
  line(width / 2, 0, width / 2, height); //eje x

  if (checkbox.checked()) { //activa y calcula derivada (tangente a la curva)
    let derivada = -(4 * a * pow(tt, 3) + 3 * b * pow(tt, 2) + 2 * c * tt + d);
    noStroke();
    text("dx/dt = " + (-derivada), width-200, 60);

    push(); //dibuja la tangente a la curva
    translate(mouseX, posX + height / 2);
    rotate(atan(derivada/18)); //se inclina la línea de acuerdo a valor de la derivada
    strokeWeight(2); //se ajusta grosor de la recta
    stroke(0, 0, 255); //línea de color azul
    line(-40, 0, 40, 0);
    pop(); //fin dibujo tangente
  }
}

function Resetear() { //función que reinicia las variables
  A.value(0);
  B.value(0);
  C.value(0);
  D.value(0);
  E.value(0);
  checkbox.checked(false);
}
