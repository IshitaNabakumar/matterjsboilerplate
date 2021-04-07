
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var bucket1,bucket2,bucket3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(100,100);
  bucket1=new Bucket(698,685,135,10);
  bucket2=new Bucket(771,648,10,65);
  bucket3=new Bucket(624,648,10,65);
  ground = new Ground(600,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed()
{
    if (keyCode === UP_ARROW)
    {
          Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    }
}

