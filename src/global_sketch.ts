
function setup() {
  // TODO put setup code here
  console.log("🚀 - Global Setup initialized - P5 is running");

  createCanvas(320, 160);
}

let x = 0;

function draw() {
  // TODO put drawing code here
  background(240);

  text("global mode sketch", 10, 20);
  x += deltaTime * .001;

  ellipse(150, 80, 100 * sin(x));

}