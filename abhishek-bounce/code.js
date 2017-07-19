function setup(){
    createCanvas(600,600)
    background(25,50,5)
    stroke(25,50,5)
}
var x = 300
var y = 20
var vx = 10
var vy = 10
var xPaddle = 300
var yPaddle = 590
function draw(){
    fill(25,50,5)
    ellipse(x,y,50,50)
    rect(xPaddle,yPaddle,100,3)
    if(-10<x && x<10){
        vx = random(10);
    }else if(590<x && x<610){
        vx = random(-10,0);
    }
    if(-10<y && y<10){
        vy = random(10);
    }
    if((xPaddle+100)>x&&(xPaddle-100)<x){
        if((yPaddle+10)>y&&(yPaddle-3)<y){
            vy = random(-10,0)
        }
    }
    x = x + vx
    y = y + vy
    if(keyIsDown(LEFT_ARROW)){
        xPaddle -= 10
    }
    if(keyIsDown(RIGHT_ARROW)){
        xPaddle += 10
    }
    fill(255)
    ellipse(x,y,20,20)
    rect(xPaddle,yPaddle,100,3)
}