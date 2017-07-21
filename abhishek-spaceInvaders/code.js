function setup(){
    createCanvas(400,600)
    background(0)
    rectMode(CENTER)
}
 var alien1 = {
    x:100,
    y:50,
    shown:0

}
var alien2 = {
    x:200,
    y:50,
    shown:0 
}

var alien3 = {
    x:300,
    y:50,
    shown:0 
}

var alien4 = {
    x:100,
    y:100,
    shown:0 
}

var alien5 = {
    x:200,
    y:100,
    shown:0 
}

var alien6 = {
    x:300,
    y:100,
    shown:0 
}

var alien7 = {
    x:100,
    y:150,
    shown:0 
}

var alien8 = {
    x:200,
    y:150,
    shown:0 
}

var alien9 = {
    x:300,
    y:150,
    shown:0 
}

var alien10 = {
    x:100,
    y:200,
    shown:0
}

var alien11 = {
    x:200,
    y:200,
    shown:0 
}

var alien12 = {
    x:300,
    y:200,
    shown:0 
}

var alien13 = {
    x:100,
    y:250,
    shown:0 
}

var alien14 = {
    x:200,
    y:250,
    shown:0
}

var alien15 = {
    x:300,
    y:250,
    shown:0 
}
var aliens = [alien1,alien2,alien3,alien4,alien5,alien6,alien7,alien8,alien9,alien10,alien11,alien12,alien13,alien14,alien15];
// triangle(170,550,200,500,230,550)
var ship = {
    x1:170,
    y1:550,
    x2:200,
    y2:500,
    x3:230,
    y3:550
}
var projectile = {
    x: ship.x2,
    y: 470,
    showProjectile: false
}
function keyPressed(){
    if(keyCode === UP_ARROW || keyCode === 32){
        if(projectile.showProjectile=== false){
            projectile.x = ship.x2
        }
        projectile.showProjectile = true
    }
}
function checkHit(alien,projectile){
    if((alien.x - 40)< projectile.x && (alien.x + 40)> projectile.x){
        if((alien.y -40)< projectile.y && (alien.y + 40)> projectile.y){
            alien.shown = 1
            projectile.showProjectile = false
            projectile.x = 200
            projectile.y = 470
        }
    }
}
var time = 0
var left = false
function draw(){
    if(projectile.y<0){
        projectile.showProjectile = false
        projectile.x = 200
        projectile.y = 470
    }
    background(0)
    fill(0,255,0)
    if(keyIsDown(LEFT_ARROW)){
        ship.x1 -= 2
        ship.x2 -= 2
        ship.x3 -= 2
    }
    if(keyIsDown(RIGHT_ARROW)){
        ship.x1 += 2
        ship.x2 += 2
        ship.x3 += 2
    }
    for(var i=0;i<15;i++){
        if(aliens[i].shown === 0){
            rect(aliens[i].x,aliens[i].y,75,40)
            checkHit(aliens[i],projectile)
        }
    }
    // time += 1
    // if(time === 60){
    //     for(var b=0;b<15;b++){
    //         if(left === false){
    //             aliens[b].x += 10
    //         }else{
    //             aliens[b].x -= 10
    //         }
    //     }
    //     time = 0
    // }
    if(projectile.showProjectile === true){
        fill(255,255,0)
        rect(projectile.x,projectile.y,10,20)
        projectile.y -= 6
    }
    fill(0,0,255)
    triangle(ship.x1,ship.y1,ship.x2,ship.y2,ship.x3,ship.y3)
}