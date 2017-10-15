// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.floor(Math.random()* 400);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.speed;
    if (this.x >500){
     this.reset();
   }
//this.checkCollisions();
   };
    //this.checkCollisions();

    //}
//};

Enemy.prototype.checkCollisions = function(){
     if(player.x < this.x + this.width &&
        player.x + player.width > this.x &&
        player.y < this.y + this.height &&
        player.height + player.y > this.y){
          console.log("collision!!");
          player.x = 215;
          player.y = 400;
        }
        return "banana"  // <-- add unnecessary return to show that function is being accessed correctly
};

Enemy.prototype.reset = function() {
  this.speed = Math.floor(Math.random() * 400);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function(x, y){
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
  enemyWidth = 50;
  enemyHeight = 60;
  playerWidth = 40;
  playerHeight = 55;
};


Player.prototype.update = function(dt){
  if (this.y == -10){
    this.y = 400
  }
  if (this.x == -10){
    this.x = 400
  }
};

Player.prototype.checkCollisions = function(x,y){
  var enemy = x;
  var enemy = y;
  if(player.x < this.x + this.width &&
     player.x + player.width > this.x &&
     player.y < this.y + this.height &&
     player.height + player.y > this.y){
       console.log("collision!!");
       player.x = 215;
       player.y = 400;
     }
     return "banana"  // <-- add unnecessary return to show that function is being accessed correctly
};

//Player.prototype.reset=function(){
  //this.x=
  //this.y=
//};

//**Player.prototype.resetPlayer = function(){
  //this.x = ;
  //this.y = ;
//}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//added prototype.handleInput to make enemies move.
Player.prototype.handleInput = function(direction) {
  if (direction === "up") {
    this.y = this.y - 50;
  }
  if (direction === "down") {
    this.y = this.y + 50;
  }
  if (direction === "left") {
    this.x = this.x - 50;
  }
  if (direction === "right") {
    this.x = this.x + 50;
  }
};

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//my note: added three new enemies in an array
var allEnemies = [new Enemy(50,100), new Enemy (70, 200), new Enemy (50, 300)];

var player = new Player(250,400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
