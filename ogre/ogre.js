function setup(){
    $("body").append(
        '<h1>Welcome to Ogre Fighter v1.0</h1>'
    );
    $("body").append(
        "<div><h3>STATS</h3><p id='stats'></p></div>"
    );
    $("body").append(
    "<button onclick='attack()'>Attack the Ogre!</button>"
    );
    $("body").append(
        "<div id='ogres'></div>"
    );
    updateStats();
};
$(document).ready(setup);
var HP = 100;
var gold = 0;
var numberDefeated = 0;

function updateStats(){
    $('#stats').text("HP: " + HP + " // Gold: " + gold + " // Ogres Slain: " + numberDefeated);
};
function attack(){
    if(HP>0){
        if(Math.random()*100>gold){
            gold = gold + 10;
            numberDefeated++;
            $('#ogres').prepend(
                "<p style='color: blue'>You won + 10 gold.</p>"
            );
        }else{
            gold--;
            HP--;
            $('#ogres').prepend(
                "<p style='color: red'>You lost! - 1 gold.</p>"
            )
        }
    updateStats();
    spawnOgre();
    }else{
        $('#ogres').prepend(
            "<h1>GAME OVER!</h1>"
        );
    };
};
function spawnOgre(){
    $("#ogres").prepend(
        "<img src='http://wiki.metin2.co.uk/images/thumb/2/21/Ogre_Warrior.png/200px-Ogre_Warrior.png'>"
    );
}