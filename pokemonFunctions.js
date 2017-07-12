function randLetter(){
    var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var index = Math.floor(Math.random()*letter.length); // generates a random index to pick a letter
    var output = letter[index];
    return output 
};
var word = "";
function randWord(){
    var wordLength = Math.ceil(Math.random()*10) + 1
    for(i=0;i < wordLength; i++){
        word = word + randLetter();
    };
    return word;
};
console.log(randWord());