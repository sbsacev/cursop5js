let ta = 0;
let tb = 0;
let tiempo;
let control = 0;
let texto='Iniciar cronómetro';

function setup() {
  createCanvas(512, 512);
  textAlign(CENTER);
}

function draw() {
  background(147, 252, 61);
  textSize(20);
  text(texto,width/2,80);
  tiempo=(tb-ta)/1000;
  if(tiempo>0){
  push();
  textSize(40);
  text(round(1000*tiempo)/1000+ " [s] ", width/2,120);
  pop();
  }
  text("Son las "+hour()+" horas, con "+minute()+" minutos y "+second()+" segundos.",width/2,240);
}

function keyReleased() {
  control++;
}

function mouseReleased() {
  control++;
}

function keyPressed() {
   if (control % 2 == 0) {
    ta = millis();
    texto='Detener';
  }
  if (control % 2 == 1) {
    tb = millis();
    texto='Iniciar cronómetro';
  }
  return false;
}

function mousePressed() {
   if (control % 2 == 0) {
    ta = millis();
    texto='Detener';
  }
  if (control % 2 == 1) {
    tb = millis();
    texto='Iniciar cronómetro';
  }
}
