var pokemonRoster = ["Greninja","Blaziken","Garchomp","Metagross","Tyranitar"];
var firstToFight = pokemonRoster[0];
var secondToFight = pokemonRoster[1];
pokemonRoster.pop();
pokemonRoster.push("Hydreigon","Alakazam");
var rosterSize = pokemonRoster.length;

console.log("My pokemon roster is: " + pokemonRoster);
console.log("First to fight is: " + firstToFight);
console.log("Second to fight is: " + secondToFight);
console.log("Size of my roster is: " + rosterSize);
if(rosterSize >= 5){
    for (var i = 0; i < rosterSize; i++){
        var n = rosterSize - i - 1 
        console.log(pokemonRoster[n])
    };
} else{
    console.log("You Can't Play! Not enough Pokemon")
};
console.log("test command");