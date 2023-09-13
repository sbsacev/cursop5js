let flechas = [];
let cuantos = 15;
let signo = 1;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  for (let j = 0; j < cuantos; j++) { //arreglo de flechas
    for (let i = 0; i < cuantos; i++) {
      let posX = (i * width) / cuantos + width / (2 * cuantos);
      let posY = (j * height) / cuantos + height / (2 * cuantos);
      flechas.push(new Flechas(posX, posY));
    }
  }
}

function draw() {
  noCursor();
  background(200, 200, 0);
  for (let flecha of flechas) { //una forma de invocar a todos los objetos
    flecha.show();  //función creada en la clase Flechas
  }
  fill(255, 125, 30);
  ellipse(mouseX, mouseY, 16, 16); //dibujo un círculo como carga
  textSize(20);
  if (signo == 1) {
    fill(0);
    text("+", mouseX, mouseY);
  } else {
    fill(0);
    text("-", mouseX, mouseY);
  }
}

function mouseReleased() { //al hacer clic se cambia el signo de la carga
  signo*=-1;
}
