function setup(){
    createCanvas(1500,800)
}
function randomNum(x){
    return Math.floor(Math.random()*x)
}
function randomColor(){
    fill(randomNum(256),randomNum(256),randomNum(256))
    stroke(randomNum(256),randomNum(256),randomNum(256))
}
function drawShapes(){
    randomColor()
    var b = randomNum(2)
    if(b===0){
        ellipse(mouseX,mouseY,randomNum(50),randomNum(50));
    }else if(b===1){
        rect(mouseX,mouseY,randomNum(50),randomNum(50));
    }
}
function mouseDragged(){
    drawShapes();
    return false
}