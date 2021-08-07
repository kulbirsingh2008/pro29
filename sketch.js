const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon;
function preload(){
  polygon_img=loadImage("polygon.png");

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(730,200,200,10);
  
  polygon = Bodies.circle(50,200,20);
  
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:100,y:200})
 
  //level one (1)
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two (1)
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three (1)
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top(1)
  block16 = new Block(390,155,30,40);

  //level one (2)
  block_1 = new Block(700,190,30,40);
  block_2 = new Block(730,190,30,40);
  block_3 = new Block(760,190,30,40);
  block_4 = new Block(790,190,30,40);
  block_5 = new Block(670,190,30,40);
  //level two (2)
  block_7 = new Block(700,150,30,40);
  block_8 = new Block(730,150,30,40);
  block_9 = new Block(760,150,30,40);
  //top (2)
  block_10 = new Block(730,110,30,40);


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  
  
  
  ground.display();
  stand1.display();
  stand2.display();
  slingshot.display();

  //polygon.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x, polygon.position.y,40,40);
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill(rgb(211,113,227))
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();
  fill(rgb(253,2,220))
  block_7.display();
  block_8.display();
  block_9.display();
  fill(rgb(247,190,201))
  block_10.display();
  
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
}