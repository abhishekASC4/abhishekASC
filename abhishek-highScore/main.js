var database = firebase.database().ref();
function getComp(){
    var rps = Math.floor(Math.random()*3);
    return rps
    // 0 is rock
    // 1 is paper
    // 2 is scissors
}
var tie = 'You and the computer tied. <br> try again.';
var win = "You beat the computer, one point gained. <br> click to play again.";
var lose = 'You lost to the computer. <br> click to start over '
function checkRock(input,comp){
    var output = null;
    // if computer picked rock outputs tie
    if (comp === 0) {
        output = tie
        placeData(0)
    }// if computer picked paper outputs loss
    else if (comp === 1) {
        output = lose
        placeData(-1)
    }// if computer picked scissors outputs win
    else if (comp === 2) {
        output = win
        placeData(1)
    }
    return output;
}
function checkPaper(input,comp){
    var output = null;
    // if computer picked paper outputs tie
    if (comp === 1) {
        output = tie
        placeData(0)
    }// if computer picked scissors outputs loss
    else if (comp === 2) {
        output = lose
        placeData(-1)
    }// if computer picked rock outputs win
    else if (comp === 0) {
        output = win
        placeData(1)
    }
    return output;
}
function checkScissors(input,comp){
    var output = null;
    // if computer picked scissors outputs tie
    if (comp === 2) {
        output = tie
        placeData(0)
    }// if computer picked rock outputs loss
    else if (comp === 0) {
        output = lose
        placeData(1)
    }// if computer picked paper outputs win
    else if (comp === 1) {
        output = win
        placeData(-1)
    }
    return output
}
function checkWin(input){
    var output = null;
    // if user picks rock compares to computer
    if(input === 0){
        output = checkRock(input,getComp());
    }
    // if user picks paper compares to computer
    if(input === 1){
        output = checkPaper(input,getComp());
    }
    // if user picks scissors scissors compares to computer
    if (input === 2) {
        output = checkScissors(input,getComp());
    }
    return output
}
function outcome(input){
    var winTest = checkWin(input)
    $('.answer').empty()
    $('.answer').append("<p class=>"+winTest+"</p>")
}
// Checks on click
function checkClick(){
    $('.rock').click(function () {
        outcome(0);
    })
    $('.paper').click(function () {
        outcome(1);
    })
    $('.scissors').click(function () {
        outcome(2);
    })
}
function player(name){
    this.name = name;
    this.score = 0;
}
function updateDB(){
    var submitPlayer = {
        name: $('.player').text(),
        score: $('.score').text(),
    }
    console.log(submitPlayer)
    database.push(submitPlayer)
}
function placeData(add){
    var oldScore = $('.score').text()
    score = parseInt(oldScore) + add
    $('.score').remove()
    $('body').append("<p class= 'score'style='display:none'>" + score + "</p> ")
}
function handleSubmit(){
    name = $('.form-control').val();
    $('.leaderboard').append("<h1>Welcome "+name+"</h1>")
    $('body').append("<p class='name' style='display:none'>"+name+"</p>")
    $('.form-control').remove();
    $('.submit').remove();
    var newPlayer = new player(name);
    $('body').append("<p class='player'style='display:none'>" + newPlayer.name + "</p>")
    $('body').append("<p class= 'score'style='display:none'>" + newPlayer.score + "</p> ")
}
// Checks clicked button for input and changes it to a number to be used in checkWin()
$('document').ready(function(){
    checkClick();
    $('.submit').click(function(){
        handleSubmit();
    });
    $('.update').click(function(){
        updateDB()
    })
    database.on("child_added", function (rowData) {
        var row = rowData.val();
        var name = row.name;
        var score = row.score;
        var fullText = "<p>" + name + ": " + score + "</p>";
        $(".leaderboards").append(fullText);
    })
})