p5.disableFriendlyErrors = true;

var gameManager = new GameManager();

p5.disableFriendlyErrors = true;

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(60);
  gameManager.render();
}
