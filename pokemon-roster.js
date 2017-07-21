var prompt = require('prompt-sync')();
var roster = [["Lucario","Type: Fighting Steel","HP: 70", "ATK: 110", "DEF: 70","Legend: false"],["Machamp","Type: Fighting","HP: 90","ATK: 130","DEF: 80","Legend: false"],["Metagross","Type: Steel Psychic","HP: 80","ATK: 135","DEF: 130","Legend: false"],["Electivire","Type: Electric","HP: 75","ATK: 123","DEF: 67","Legend: false"],["Terakion","Type: Rock","HP: 91","ATK: 129","DEF: 90","Legend: true"],["Zekrom","Type: Dragon","HP: 100","ATK: 150","DEF: 120","Legend: true"]];
function pokemonStats(n){
    var num = n + 1;
    var pokemon = "#" + num + " ";
    for(i=0;i<roster[n].length;i++){
        if(i==5){
            pokemon = pokemon +  roster[n][i]
        }else {
        pokemon = pokemon +  roster[n][i] + " > ";
        }
    }
    return pokemon
};
x = 0
function listArrays(){    
    while(x<roster.length){
        console.log(pokemonStats(x));
        x = x + 1;
    };
};
function newStat(b,c){
    b = roster[roster.length][c]
};
listArrays();
y = 0
while(y==0){
    var ask = prompt("Do you want to add a new pokemon?");
    if(ask == "yes"){
        var newName = prompt("What is the name of the pokemon? ");
        var newType = prompt("What is the type/types of the pokemon? ");
        var newHP = prompt("What is the HP stat of the pokemon? ")
        var newATK = prompt("What is the attack stat of the pokemon? ");
        var newDEF = prompt("What is the defense stat of the pokemon? ")
        var isLegend = prompt("Is the pokemon a legendary")
        c = 0
        newPokemon(newName,c)
        c = c + 1
        newPokemon(newType,c)
        c = c + 1
        newPokemon(newHP,c)
        c = c + 1
        newPokemon(newATK,c)
        c = c + 1
        newPokemon(newDEF,c)
        c = c + 1
        newPokemon(isLegend,c)
        listArrays();
    }
    else if(ask == "no"){
        y = 1
    }
    else{
        console.log("Please enter yes or no.")
    }
};
