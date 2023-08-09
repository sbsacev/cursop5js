class Flechas {
  constructor(x, y) { //parámetros que recibirá cada flecha
    this.x = x;
    this.y = y;
  }

  show() { //función que dibuja cada flecha
    push();
    let d = dist(mouseX, mouseY, this.x, this.y);
    let alfa = map(d, 0, 500, 255, 0);
    let largo = map(d, 0, 500, 20, 2);
    stroke(0, 0, 0, alfa);
    strokeWeight(3);
    translate(this.x, this.y);
    rotate(atan2(signo * (-mouseY + this.y), signo * (-mouseX + this.x))); //se gira el ángulo de acuerdo a la posición del mouse
    line(largo, 0, largo - 3, -3);
    line(largo, 0, largo - 3, 3);
    line(-largo, 0, largo, 0);
    pop();
  }
}
