const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 

var ground; 
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var launcher; 

var polygon, polygonImage; 

function preload() { 
  polygonImage = loadImage("polygon.png"); 
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world; 

  ground = new Ground(400,300,150,10);
  b1 = new Box(350,280,30,30); 
  b2 = new Box(380,280,30,30); 
  b3 = new Box(410,280,30,30); 
  b4= new Box(440,280,30,30); 
  b5 = new Box(370,250,30,30); 
  b6 = new Box(400,250,30,30); 
  b7 = new Box(430,250,30,30); 
  b8 = new Box(390,220,30,30); 
  b9 = new Box(420,220,30,30); 
  b10 = new Box(410,190,30,30); 

  polygon = Bodies.rectangle(100,300,50,50); 
  World.add(world,polygon); 

  launcher = new SlingShot(this.polygon,{x:100,y:350});

  
}

function draw() {
  background(0); 

  Engine.update(engine);

  ground.display(); 
  fill("pink"); 
  b1.display();
  b2.display(); 
  b3.display(); 
  b4.display(); 
  b5.display(); 
  b6.display(); 
  b7.display(); 
  b8.display(); 
  b9.display(); 
  b10.display(); 

  imageMode(CENTER); 
  image(polygonImage,polygon.position.x,polygon.position.y,50,50); 

  launcher.display(); 

}

function mouseDragged(){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed() {
  if(keyCode = 32) {
    Matter.Body.setPosition(polygon, {x:200,y:50}); 
    slingshot.attach(polygon);
  }
}