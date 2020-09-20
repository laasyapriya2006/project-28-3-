const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;
var boy,boyImg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var slingShot1;

function preload()
{
   boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(1100,700);

  engine = Engine.create();
	world = engine.world;

    ground = new Ground(550,680,1100,20);

    tree = new Tree();

    stone = new Stone(125,525,50);

    mango1 = new Mango(1000,300);
    mango2 = new Mango(820,300);
    mango3 = new Mango(870,200);
    mango4 = new Mango(895,300);
    mango5 = new Mango(950,200);
    mango6 = new Mango(730,300);
    mango7 = new Mango(1070,280);
    mango8 = new Mango(910,160);

    slingShot1 = new SlingShot(stone.body,{x:140,y:500});

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(80,80,80);

  ground.display();
  
  tree.display();

  image(boyImg,100,400,250,350);

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);

  slingShot1.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot1.Fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    slingshot.attach(stone.body);
  }
}

function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<-lmango.radius+lstone.radius+280/2){
    Matter.Body.setStatic(lmango.body,false);
  }

}