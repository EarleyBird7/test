var ball;
var position,database,location;

function preload(){
bg=loadImage("Hot Air Ballon-01.png")
balloonI=loadImage("Hot Air Ballon-02.png")
}

function setup(){
    database=firebase.database()
    createCanvas(1500,700);
    balloon = createSprite(250,650,150,150);
    balloon.addImage("balloon", balloonI);
    location=database.ref("ball/positions")
    location.on("value",readPosition)
}



function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
database.ref('ball/positions').set({
    'x':position.x+x,
    'y':position.y+y
})
}

function readPosition(data){
position=data.val()
balloon.x=position.x
balloon.y=position.y
}