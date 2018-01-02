function Player(name, health){
       this.name=name;
       this.health=health;
       this.attack = function (opponent){
           opponent.health -= 10;    
       }

}

var player1 = new Player ('Johnson', 200)
var player2 = new Player ('Jingwen', 100)

Player.prototype.health = function(opponent){
        opponent.health +=5;
}



var turn = function(player1, player2){
    do {
        var x = Math.floor(Math.random()*2);
        if(x ==0 ){
            player1.attack(player2);
            // console.log(player2.name + player2.health)
        }
        else if (x == 1) {
            player2.attack(player1);
            // console.log(player1.name + player1.health)
        }
    }while (player1.health>0 && player2.health>0) 
}
    turn(player1, player2)
// console.log(turn(player1.health, player2.health))

// var result = function (player1, player2){
//     if (player1.health == 0) {
//         console.log(player2.name + ' won')
//     }
//     else if (player2.health == 0) {
//         console.log(player1.name + ' won')
//     }
// }
//  result(player1, player2)

// console.log(player1.health)

// console.log(player2.health)