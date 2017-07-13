var prompt = require('prompt-sync')();
var roster = [["Lucario","Type: Fighting Steel","HP: 70", "ATK: 110", "DEF: 70","Legend: false"],["Machamp","Type: Fighting","HP: 90","ATK: 130","DEF: 80","Legend: false"],["Metagross","Type: Steel Psychic","HP: 80","ATK: 135","DEF: 130","Legend: false"],["Electivire","Type: Electric",75,123,67,false],["Terakion","Rock",91,129,90,true],["Zekrom","Dragon",100,150,120,true]];
function pokemonStats(n){
    var pokemon = "#" + n + " "
    for(i=0;i<roster[n].length;i++){
        pokemon = pokemon + "> "
    }
};