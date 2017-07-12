function randLetter(){
    var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var index = Math.floor(Math.random()*letter.length); // generates a random index to pick a letter
    var output = letter[index];
    return output 
};
function randWord(){
    var word = "";
    var wordLength = Math.ceil(Math.random()*10) + 1
    for(i=0;i < wordLength; i++){
        word = word + randLetter();
    };
    return word;
};
var sentence = "";
function capitalizeFirst(string){
    string = string.charAt(0).toUpperCase()
    return string
}
function randSentence(){
    var sentenceLength = Math.ceil(Math.random()*10 + 1)
    for(i=0;i < sentenceLength; i++){
        sentence = sentence + " " + randWord();
    };
    sentence = sentence + ".";
    finalSentence = capitalizeFirst(sentence);
    return finalSentence
}
console.log(randSentence());