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
  stand2 = new Stand(700,200,200,10);
  hexagon=new Poolygon(50,50,50,50);
  slingshot=new Slingshot(hexagon.body,{x:200,y:235});
  // Stand-1
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  // Stand-2
  //top
Bblock1=new Block(700,70,30,40);
//level two
Bblock2=new Block(700,110,30,40);
Bblock3=new Block(670,110,30,40);
Bblock4=new Block(730,110,30,40);
//level 3 
Bblock5=new Block(730,150,30,40);
Bblock6=new Block(760,150,30,40);
Bblock7=new Block(700,150,30,40); 

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  ground.display();
  stand1.display();
  stand2.display();
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
  fill(247, 239, 103);
  block16.display();
  noFill();
  hexagon.display();
  fill("lightgray");
  Bblock1.display();
  fill("green")
  Bblock2.display();
  Bblock3.display();
  Bblock4.display();
  fill(244, 122, 158)
  Bblock5.display();
  Bblock6.display();
  Bblock7.display();

}
function mouseDragged() {
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}
function mouseReleased() {
  slingshot.fly();
}