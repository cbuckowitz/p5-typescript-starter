
new p5((p: p5) => {

  let t = 0;

  p.setup = () => {
    console.log("🪐 - Instance Setup initialized - P5 is running");

    p.createCanvas(320, 160);
    p.rectMode(p.CENTER);

  };

  p.draw = () => {
    p.background(200);
    p.text("instance mode sketch", 10, 20);
    t += p.deltaTime * .001;

    p.rect(150, 80, 100 * p.cos(t), 100 * p.cos(t));
  };
}, document.getElementById('p5sketch'));
