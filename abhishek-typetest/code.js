function setup(){
    createCanvas(1000,800);
    background(24,26,37);
}
var userInput = ""
var sentences = ["jump over a log","do what you want", "finish your work"]
var sentenceTest = ""
function randomSentence(){
    sentenceTest = sentences[Math.floor(Math.random()*sentences.length)]
}
var pointTotal = 0
randomSentence();
function keyTyped(){
    fill(255)
    text("Current points " + pointTotal.toString(),500,450)
    userInput = userInput + key
    fill(24,26,37)
    if(key === "1"){
        userInput = "";
        rect(0,300,1000,100)
        pointTotal--;
        text("Current points " + pointTotal.toString(), 500, 450)
        rect(0,200,1000,300)
    }else if(userInput === sentenceTest){
        fill(24,26,37)
        pointTotal++
        text("Current points " + pointTotal.toString(), 500, 450)
        rect(0,200,1000,300)
        randomSentence();
        userInput = ""
    }else{
        fill(24,26,37)
        rect(0,300,1000,200)
    }
}
function draw(){
    stroke(24,26,37)
    textSize(32)
    fill(255)
    textAlign(CENTER)
    text("To clear your input press 1", 500, 550)
    text("Clearing your input removes a point, make sure to get it right!", 500, 650)
    text("Current points " + pointTotal.toString(),500,450)
    text("Please type the sentence below", 500, 100);
    text(sentenceTest, 500,250)
    text(userInput, 500, 350)
}