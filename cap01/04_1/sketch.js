let texto="Esto es un texto";
let a=400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text(texto, 200,30);
  text("El valor de a es: "+a, 50,100);
  
  push();
  textAlign(CENTER,CENTER);
  textSize(20);
  text("Esto también es un texto.",200,200);
  pop();
  
  text("Esto es un texto un poco más largo ubicado en una caja de texto de ciertas dimensiones",200,300,100,150);
}
