function setup(){
    createCanvas(500,500)
    background('blue')
    rectMode(CENTER)
}
var a = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var b = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var c = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var d = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var e = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var f = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var g = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var h = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var i = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
var j = {
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0,
    eight:0,
    nine:0,
    ten:0
}
function update(randomX,randomY){
    if(randomY === 1){
        grid[randomX].one = 1
    }
    if(randomY === 2){
        grid[randomX].two = 1
    }
    if(randomY === 3){
        grid[randomX].three = 1
    }
    if(randomY === 4){
        grid[randomX].four = 1
    }
    if(randomY === 5){
        grid[randomX].five = 1
    }
    if(randomY === 6){
        grid[randomX].six = 1
    }
    if(randomY === 7){
        grid[randomX].seven = 1
    }
    if(randomY === 8){
        grid[randomX].eight = 1
    }
    if(randomY === 9){
        grid[randomX].nine = 1
    }
    if(randomY === 10){
        grid[randomX].ten = 1
    }
}
// if(ships === 0 ){
//         // for(i=4;i>0;i--){
//         //     randomX = Math.floor((random(500))/50) 
//         //     randomY = Math.floor((random(500) + 50)/50)
//         //     randomDirection = Math.floor(random(4))
//         //     update(randomX,randomY)
//         //     if(randomDirection === 0){
//         //         randomX = randomX - 1
//         //     }else if(randomDirection === 1){
//         //         randomX = randomX + 1
//         //     }else if(randomDirection === 2){
//         //         randomY = randomY - 1
//         //     }else if(randomDirection === 3){
//         //         randomY = randomY + 1
//         //     }
//         //     if(randomY>10){
//         //         randomY = randomY - 2
//         //     }else if(randomY<0){
//         //         randomY = randomY + 2
//         //     }
//         //     update(randomX,randomY)
//         // }
//         for(i=31;i>0;i--){
//             randomX = Math.floor((random(500))/50) 
//             randomY = Math.floor((random(500) + 50)/50)
//             update(randomX,randomY)
//             // if(randomY === 1){
//             //     grid[randomX].one = 1
//             // }
//             // if(randomY === 2){
//             //     grid[randomX].two = 1
//             // }
//             // if(randomY === 3){
//             //     grid[randomX].three = 1
//             // }
//             // if(randomY === 4){
//             //     grid[randomX].four = 1
//             // }
//             // if(randomY === 5){
//             //     grid[randomX].five = 1
//             // }
//             // if(randomY === 6){
//             //     grid[randomX].six = 1
//             // }
//             // if(randomY === 7){
//             //     grid[randomX].seven = 1
//             // }
//             // if(randomY === 8){
//             //     grid[randomX].eight = 1
//             // }
//             // if(randomY === 9){
//             //     grid[randomX].nine = 1
//             // }
//             // if(randomY === 10){
//             //     grid[randomX].ten = 1
//             // }
//         ships = 1
//     }
var grid = [a,b,c,d,e,f,g,h,i,j]
var ships = 0
function draw(){
    if(ships === 0 ){
        // for(i=4;i>0;i--){
        //     randomX = Math.floor((random(500))/50) 
        //     randomY = Math.floor((random(500) + 50)/50)
        //     randomDirection = Math.floor(random(4))
        //     update(randomX,randomY)
        //     if(randomDirection === 0){
        //         randomX = randomX - 1
        //     }else if(randomDirection === 1){
        //         randomX = randomX + 1
        //     }else if(randomDirection === 2){
        //         randomY = randomY - 1
        //     }else if(randomDirection === 3){
        //         randomY = randomY + 1
        //     }
        //     if(randomY>10){
        //         randomY = randomY - 2
        //     }else if(randomY<0){
        //         randomY = randomY + 2
        //     }
        //     update(randomX,randomY)
        // }
        for(i=31;i>0;i--){
            randomX = Math.floor((random(500))/50) 
            randomY = Math.floor((random(500) + 50)/50)
            update(randomX,randomY)
            // if(randomY === 1){
            //     grid[randomX].one = 1
            // }
            // if(randomY === 2){
            //     grid[randomX].two = 1
            // }
            // if(randomY === 3){
            //     grid[randomX].three = 1
            // }
            // if(randomY === 4){
            //     grid[randomX].four = 1
            // }
            // if(randomY === 5){
            //     grid[randomX].five = 1
            // }
            // if(randomY === 6){
            //     grid[randomX].six = 1
            // }
            // if(randomY === 7){
            //     grid[randomX].seven = 1
            // }
            // if(randomY === 8){
            //     grid[randomX].eight = 1
            // }
            // if(randomY === 9){
            //     grid[randomX].nine = 1
            // }
            // if(randomY === 10){
            //     grid[randomX].ten = 1
            }
        ships = 1
    }
    if(mouseIsPressed){
        var xCord = Math.floor(mouseX/50)
        var yCord = Math.floor((mouseY+50)/50)
        newXCord =  xCord*50 + 25
        newYCord = yCord*50 - 25
        for(i=0;i<grid.length;i++){
            fill('white')
            if(yCord === 1){
                if(grid[xCord].one === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
            if(yCord === 2){
                if(grid[xCord].two === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }        
            }
            if(yCord === 3){
                if(grid[xCord].three === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
            if(yCord === 4){
                if(grid[xCord].four === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
            if(yCord === 5){
                if(grid[xCord].five === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
            if(yCord === 6){
                if(grid[xCord].six === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
            if(yCord === 7){
                if(grid[xCord].seven === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
            if(yCord === 8){
                if(grid[xCord].eight === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
            if(yCord === 9){
                if(grid[xCord].nine === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
            if(yCord === 10){
                if(grid[xCord].ten === 1){
                    fill('red')
                    rect(newXCord,newYCord,50,50)
                }else{
                    rect(newXCord,newYCord,50,50)
                }
            }
        }
    }
    // for(i=0;i<grid.length;i++){
    //     fill('grey')
    //     xCord = (50* i) + 25;
    //     if(grid[i].one === 1){
    //         rect(xCord,75,50,50)
    //     }
    //     if(grid[i].two === 1){
    //         rect(xCord,125,50,50)
    //     }
    //     if(grid[i].three === 1){
    //         rect(xCord,175,50,50)
    //     }
    //     if(grid[i].four === 1){
    //         rect(xCord,225,50,50)
    //     }
    //     if(grid[i].five === 1){
    //         rect(xCord,275,50,50)
    //     }
    //     if(grid[i].six === 1){
    //         rect(xCord,325,50,50)
    //     }
    //     if(grid[i].seven === 1){
    //         rect(xCord,375,50,50)
    //     }
    //     if(grid[i].eight === 1){
    //         rect(xCord,425,50,50)
    //     }
    //     if(grid[i].nine === 1){
    //         rect(xCord,475,50,50)
    //     }
    //     if(grid[i].ten === 1){
    //         rect(xCord,525,50,50)
    //     }
    // }
}
