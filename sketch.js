
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var treeImg=loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	World.add(world,Bodies);

	tree=image(treeImg,600,350,40,40);

	//Create the Bodies Here.
	stone=new Stone(150,50);
	girl=new Girl(200,600);
	mango1=new Mango(560,310);
	mango2=new Mango(580,340);
	mango3=new Mango(585,330);
	mango4=new Mango(590,320);
	mango5=new Mango(596,335);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  girl.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}



