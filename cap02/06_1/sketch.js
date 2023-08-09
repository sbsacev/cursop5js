let video;

function setup() {
  createCanvas(640, 480);
  video=createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(220);
  image(video,0,0);
}
