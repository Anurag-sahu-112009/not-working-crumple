
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper (100,100,20,20);

	ground1 = new Ground (350,680,700,20)


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);


  paper1.display();
  ground1.display();
  
  drawSprites();
 
}



