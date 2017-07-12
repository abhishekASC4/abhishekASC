function rand(num){ // Returns a number between 0 and num
    var randNum = Math.random()*num; // Num is used to multiply by to set upper limit
    var output = Math.floor(randNum); // Rounds down, upper limit not included to work with arrays
    return output
}
console.log(rand(2));

var myDice = ['one','two','three','four','five','six']
console.log("You rolled a " + myDice[rand(6)]);