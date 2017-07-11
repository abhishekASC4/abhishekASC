var type = ["rock", "paper", "scissors"];
var userChoice = type[1];
var comChoice = type[Math.floor(Math.random()*3)];

if(userChoice === type[1]);{
    if(comChoice == type[1]);{
        console.log("The computer picked " + comChoice + ". You tied.");
    };
    if(comChoice == type[2]);{
        console.log("The computer picked " + comChoice + ". the computer wins.");
    };
    if(comChoice == type[3]);{
        console.log("The computer picked " + comChoice + ". You win.");
    };
};
if(userChoice === type[2]);{
    if(comChoice == type[1]);{
        console.log("The computer picked " + comChoice + ". You win.");
    };
    if(comChoice == type[2]);{
        console.log("The computer picked " + comChoice + ".You tied.");
    };
    if(comChoice == type[3]){
        console.log("The computer picked " + comChoice + ". The computer wins.");
    };
};
if(userChoice === type[3]);{
    if(comChoice == type[1]);{
        console.log("The computer picked " + comChoice + ". The computer wins.");
    };
    if(comChoice == type[2]);{
        console.log("The computer picked " + comChoice + ". You win.");
    }
    if(comChoice == type[3]);{
        console.log("The computer picked " + comChoice + ". You tied.");
    }
}