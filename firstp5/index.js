function setup() {
  // // Create the canvas
  // createCanvas(720, 400);
  // background(58, 74,90);

  // // // Set colors
  // // fill(204, 101, 192, 127);
  // // stroke(127, 63, 120);

  // // // A rectangle
  // // rect(40, 120, 120, 40);
  // // An ellipse
  // ellipse(100, 100, 64, 80);
  // // // A triangle
  // // triangle(300, 100, 320, 100, 310, 80);

  // // // A design for a simple flower
  // // translate(580, 200);
  // // noStroke();
  // // for (var i = 0; i < 10; i ++) {
  // //   ellipse(0, 30, 20, 80);
  // //   rotate(PI/5);
  // // }

  createCanvas(500,500);
  background(255);
  stroke('black');
  strokeWeight(10);
  ellipse(250,250,250,250)
  fill('red');
  arc(250,250,250,250,PI,0,CHORD);
  fill('white');
  ellipse(250,250,75,75);
  strokeWeight(3);
  ellipse(250,250,35,35);
}
