function setup(){
    createCanvas(1500,800)
    fill('blue')
    ellipse(50,100,50,100)
    fill('red')
    rect(25,200,50,100)
    fill('green')
    triangle(25,500,100,500,50,375)
}
function mousePressed() {
  if (value == 0) {
    value = 255;
    fill('blue')
  } else {
    value = 0;
    fill('red')
  }
}
function drawShapes(){
    mousePressed()
    ellipses(mouseX,mouseY,50,50)
}