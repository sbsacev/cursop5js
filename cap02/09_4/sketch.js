let texto = "";

function setup(){
  createCanvas(400,400);
}
function draw() {
 background(200);
 textSize(30);
 text(texto,200,200);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    texto = "arriba";
  }
  if (keyCode === DOWN_ARROW) {
    texto = "abajo";
  }
  if (keyCode === LEFT_ARROW) {
    texto = "izquierda";
  }
  if (keyCode === RIGHT_ARROW) {
    texto = "derecha";
  }
}
