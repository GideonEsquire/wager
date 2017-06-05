function preload() {

  data = loadJSON("db.json");

}

function setup() {

  background(0);
  fill(255);
  text(data.Housework[2], 10, 50);

}

function draw() {

}
