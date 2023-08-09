let pelota;

function setup() {
  createCanvas(400, 400);
  pelota= new Pelota(200,200);
}

function draw() {
  background(220,100,60,80);
  pelota.mostrar();
  pelota.mover();
}
