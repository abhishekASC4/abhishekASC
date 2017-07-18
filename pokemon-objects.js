var pokemonRoster = [ 
    Slaking = {
    Type: ["Normal"],
    HP: 150,
    ATK: 160,
    DEF: 100,
    Speed: 100,
    legend: false
}, blaziken = {
    HP: 80,
    Type: ["fire","fighting"],
    Speed: 80,
    ATK: 120,
    DEF: 70,
    legend: false
}, Garchomp = {
    HP: 108,
    Type: ["dragon", "ground"],
    Speed: 102,
    ATK: 130,
    DEF: 95,
    legend: false
}, Lucario = {
    Type: ["Fighting", "Steel"],
    HP: 70,
    ATK: 110,
    DEF: 70,
    Speed: 90,
    legend: false
},Metagross = {
    Type: ["Steel", "Psychic"],
    HP: 80,
    ATK: 135,
    DEF: 130,
    Speed: 70,
    legend: false
}, Haxorus = {
    Type: ["Dragon"],
    HP: 76,
    ATK: 147,
    DEF: 90,
    Speed: 97,
    legend: false
}]
function printRoster(){
    for(var i=0;i<pokemonRoster.length;i++){
        console.log("Type: " + pokemonRoster[i].Type)
        console.log("HP: " + pokemonRoster[i].HP)
        console.log("ATK: " + pokemonRoster[i].ATK)
        console.log("DEF: " + pokemonRoster[i].DEF)
        console.log("Speed: " + pokemonRoster[i].Speed)
        console.log("Legend: " + pokemonRoster[i].legend)
    }
}
printRoster();
function pokemonAttacked(){
    for(var i=0;i<pokemonRoster.length;i++){
        pokemonRoster[i].HP = pokemonRoster[i].HP - 10
    }
}
pokemonAttacked();
printRoster();