var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        function createEnemy(x, y) {
    // all code from TODO 11 and 12
    var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare)
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.onPlayerCollision = function() {
    console.log('The enemy has hit Halle');
    game.changeIntegrity(-10);
    game.changeIntegrity(10);
    enemy.fadeOut();
};
enemy.onProjectileCollision = function(){
    game.increaseScore(100);
    enemy.fadeOut();
}
}
      function createReward(x, y) {
    // all code from TODO 11 and 12
    var reward =  game.createGameItem('enemy',25);
var redSquare = draw.bitmap("http://clipartist.net/social/Squiggly/robot_girl_black_white_line_art.png");
redSquare.x = -25;
redSquare.y = -25;
reward.addChild(redSquare)
reward.x = x;
reward.y = y;
reward.scaleX = 0.5;
reward.scaleY = 0.5;
game.addGameItem(reward);
reward.velocityX = -1;
reward.onPlayerCollision = function() {
    console.log('The reward has hit Halle');
    game.increaseScore(100);
    reward.fadeOut();
};
}
       function createSawBlade(x,y) {
            // your code goes here
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }
 createEnemy(400,groundY-10);
 createEnemy(800,groundY-100);
 createEnemy(1200,groundY-50);
 createReward(1500,groundY-110);
        function createBox(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('https://png.pngtree.com/element_pic/00/16/07/05577b3638a0803.jpg');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        };
        createBox(200, 0);

        for(var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            createSawBlade(gameItem.x, gameItem.y);
        }
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}