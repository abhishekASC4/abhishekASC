var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var bank = 1000;
var items = []
var inventory = ["Hyrulian sword", "Potion", "Hyrulian shield", "Bow"]
var prices = [250, 50, 150, 220]
console.log("You have 1,000 rupees.");
i = 0
// loops until i exceeds the inventory length
// i exceeding inventory length means that all items were asked about
while(i<inventory.length){
    var answer = prompt("Do you want to buy a " + inventory[i] + ": ");
    if(answer == "yes"){
        items.push(inventory[i]);
        inventory.splice(i,1); // removes the item from the inventory lowering length by 1
        bank = bank - prices[i];
        prices.splice(i,1) // removes the price from the price array lowering length by 1
        // Lowered length means i does not have to change to ask to buy next item
    }
    else if(answer == "no"){ // adds 1 to i so that it moves on to the next item instead of asking repeatedly to buy the same index
        // since nothing is removed the indexes do not move down one requiring i to be 1 higher
        i = i + 1
    }
    else{
        console.log("Please enter yes or no.")
    }
    console.log("Your inventory now contains: " + items);
    console.log("You have " + bank + " rupees left.");
    if(i>inventory.length - 1){
        answer = prompt("Do you want to look through the inventory again: ")
        if(answer == "yes"){
            i = 0
        }
    }
};