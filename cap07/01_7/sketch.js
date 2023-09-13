let tabla;
let col = [];
let mx = 0;
let my = 0;
let control = 0;

function preload() {  //Se carga el archivo json
  tabla = loadJSON("tabla.json");
}

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < tabla.elements.length; i++) {
    col[i] = "#" + tabla.elements[i].cpk_hex; //color del elemento
  }
}

function draw() {
  background(36, 95, 138);
  push();
  textAlign(CENTER);
  fill(255);
  textSize(30);
  text("Tabla periódica", width / 2, 40);
  pop();
  for (let i = 0; i < tabla.elements.length; i++) {
    let x = tabla.elements[i].xpos * 42 - 20; //posición x
    let y = tabla.elements[i].ypos * 50; //posición y
    push();
    stroke(0, 100);
    fill(color(col[i]));
    rect(x, y, 42, 50);
    textAlign(CENTER);
    textSize(20);
    fill(0);
    text(tabla.elements[i].symbol, x + 20, y + 30); //símbolo
    pop();
  }

  for (let i = 0; i < tabla.elements.length; i++) {
    let x = tabla.elements[i].xpos * 42 - 20;
    let y = tabla.elements[i].ypos * 50;
    if (mx >= x && mx < x + 42 && my >= y && my < y + 50) {
      push();
      strokeWeight(4);
      if (col[i] === "#null") {
        fill(color("#ffffffdd"));
      } else {
        fill(color(col[i] + "dd"));
      }
      rectMode(CENTER);
      rect(width / 2, height / 2, 420, 500, 10, 10, 10, 10);
      fill(0);
      textSize(180);
      textAlign(CENTER);
      text(tabla.elements[i].symbol, width / 2, 240);
      textSize(28);
      text(tabla.elements[i].name, width / 2, 300); //nombre
      textSize(18);
      fill(255);
      text(tabla.elements[i].electron_configuration, width / 2, 580);  //configuración electrónica
      pop();
      textSize(20);
      fill(0);
      text(tabla.elements[i].atomic_mass, 210, 450); //masa atómica
      text(tabla.elements[i].number, 565, 80);
     //se dibujan las capas atómicas
      for (let j=0; j<tabla.elements[i].shells.length; j++) {
        fill(0, 0, 255);
        circle(515, 450, 10);
        noFill();
        circle(515, 450, j * 20 + 30);
        for (let k=0; k<tabla.elements[i].shells[j]; k++) {
          push();
          translate(515, 450);
          rotate((k * 2 * PI) / tabla.elements[i].shells[j]);
          if (j == tabla.elements[i].shells.length - 1) {
            strokeWeight(2);
            fill(255, 250, 0);
          } else {
            fill(255, 0, 0);
          }
          circle((j * 20 + 30) / 2, 0, 8);
          pop();
        }
      }
    }
  }
}

function mousePressed() { //Se detecta en qué elemento se hace clic
  mx = mouseX;
  my = mouseY;
}
