var ball;
var database;
var position;

function setup(){
    database = firebase.database();
    
    createCanvas(500,500);

    ball = createSprite(250,250,20, 20);
    ball.shapeColor = "blue";

    var ballposition = database.ref('ball/position');
    ballposition.on("value", readPosition);
}

function draw(){
    background("black");

    if(keyDown (LEFT_ARROW)){
        writePosition(-1, 0);
    }

    if(keyDown (RIGHT_ARROW)){
        writePosition(1, 0);
    }

    if(keyDown (UP_ARROW)){
        writePosition(0, -1);
    }

    if(keyDown (DOWN_ARROW)){
        writePosition(0, 1);
    }

    drawSprites();
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(x, y){
    database.ref('ball/position').set({
        'x':position.x + x, 
        'y':position.y + y,
    })
    

}