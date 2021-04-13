const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg = "sprites/white.png";
function preload(){
    getBackgroundImage();
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
         
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    
    

    box1 = new Box(600,320,70,70);
    box2 = new Box(680,320,70,70)
    box3 = new Box(760,320,70,70)
    box4 = new Box(840,320,70,70)

    box5 = new Box(640,240,70,70);
    box6 = new Box(720,240,70,70);
    box7 = new Box(800,240,70,70);

    box8 = new Box(680,160,70,70);
    box9 = new Box(760,160,70,70);

    box10 = new Box(720,80,70,70);

    bird = new Bird(200,60);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:60});
}

function draw(){
    background(bg)
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()


    ground.display();


    bird.display();
    platform.display();
    //log6.display();
    ;    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(bird.body);
    }
}

async function getBackgroundImage(){
    var response = await fetch('https://worldtimeapi.org/api/timezone/America/New_York')
var responseJSON = await response.json()
console.log(responseJSON);

var datetime = responseJSON.datetime;
console.log(datetime);

//2021-03-09T07:12:18.226711+05:30

var hour = datetime.slice(11,13); 
console.log(hour);

if (hour > 6 && hour < 18){
    bg = loadImage("sprites/white.png")
  
}
else{
    bg = loadImage("sprites/black.jpg")
   
}

}
