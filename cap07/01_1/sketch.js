// Esto es un comentario y no tiene incidencia en el código
let x0, y0, angulo0, t, v0, g, x, y; //Se declaran las variables a utilizar
let R, G, B; //Se declaran las variables para el color de fondo

// La función setup se ejecuta una sola vez
function setup() {
  createCanvas(400, 400); //Se genera el entorno visual de 400x400 pixeles
  x0 = 50; //Posición inicial eje x
  y0 = 150; //Posición inicial eje y
  angulo0 = 60; //Ángulo inicial de lanzamiento
  t = 0; //Se inicia el tiempo a t = 0
  v0 = 60; //Rapidez inicial
  g = 9.8; //Aceleración de gravedad

  R = random(255); //Valor aleatorio entre 0 y 255 (Rojo)
  G = random(255); //Valor aleatorio entre 0 y 255 (Verde)
  B = random(255); //Valor aleatorio entre 0 y 255 (Azul)
}

//La función draw se repite una y otra vez
function draw() {
  background(R, G, B); //Se establece el color de fondo
  x = x0 + v0*cos(angulo0*PI/180)*t; //Se calcula posición x del proyectil en cada instante
  y = y0 + v0*sin(angulo0*PI/180)*t-0.5*g*pow(t,2); //Se calcula posición y del proyectil en cada instante
  stroke(0); //El proyectil se dibuja con una borde negro
  fill(255, 0, 0); //El proyectil se rellena de color rojo
  ellipse(x, height - y, 16, 16); //El proyectil es un círculo de diámetro 16 pixeles

  t += 0.1; //La simulación avanza cada 0.1 segundos, para más lento disminuir éste número

  //La siguiente condición establece que si el proyectil sale de la pantalla, el tiempo se reinicia
  if (height - y > height || x > width || x < 0) {
    t = 0;
  }
}
