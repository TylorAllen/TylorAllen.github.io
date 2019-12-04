var background = function (window) {
    'use strict';

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;

    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;

        // container which will be returned
        var background;

        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];

        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'#fc03f8');
            background.addChild(backgroundFill);

            // TODO: 3 - Add a moon and starfield
            var shape = draw.bitmap('img/moon.png');
            shape.x = 100;
            shape.y = 45;
            var circle;
            for(var i=0;i<100;i++) {
                circle = draw.circle(10,'white','LightGray',2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle);
            }
            var moon = draw.bitmap('https://media2.giphy.com/media/WQXTPsMJztP2g/source.gif');
            moon.x = 300;
            moon.y = 25;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            var food = draw.bitmap("https://i.pinimg.com/originals/ab/4a/3d/ab4a3dc3f72d1bbed5f468321baa7a49.gif");
            food.x = 0;
            food.y = 25;
            food.scaleX = 1.0;
            food.scaleY = 1.0;
            var food2 = draw.bitmap("https://i.pinimg.com/originals/ab/4a/3d/ab4a3dc3f72d1bbed5f468321baa7a49.gif");
            food2.x = 600;
            food2.y = 25;
            food2.scaleX = 1.0;
            food2.scaleY = 1.0;
            background.addChild(moon);
            background.addChild(food);
            background.addChild(food2);
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var i = 0; i < 10; i++) {
            var buildingHeight = Math.round(Math.random() * 1000);
            var building = draw.rect(75,buildingHeight,'LightGray','Black',1);
            building.x = 200*i;
            building.y = groundY-buildingHeight;
            background.addChild(building);
            buildings.push(building);

        }

            // TODO 4: Part 1 - Add a tree

            tree = draw.bitmap('img/tree.png');
            tree.x = 0;
            tree.y = 0;
            background.addChild(tree);

        } // end of render function - DO NOT DELETE


        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables

            // TODO 4: Part 2 - Move the tree!
          if(tree.x < -200) {
            tree.x = canvasWidth;
        }
          tree.x = tree.x - 1;

            // TODO 5: Part 2 - Parallax
             for(var i = 0; i < buildings.length; i++){
                 buildings[i].x = buildings[i].x - 1;
             }
        } // end of update function - DO NOT DELETE



        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;

        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);

        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
