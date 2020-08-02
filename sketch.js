var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,invisiblecopter;
var bar1,barSprite1,bar2,barSprite2,bar3,barSprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	invisiblecopter = createSprite(10, 200, 10,10);
	invisiblecopter.visible = false;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

	helicopterSprite=createSprite(10, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
    
	groundSprite=createSprite(width/2, height-35, width,30);
	groundSprite.shapeColor=color(255)

	barSprite1 = createSprite(400,648,200,20);
	barSprite2 = createSprite(500,628,20,60);
	barSprite3 = createSprite(300,628,20,60);

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.rectangle(width/2 , 200,10,10,{restitution : 0.8,isStatic :true,density:1} );
	World.add(world,packageBody);
	
	bar1 = Bodies.rectangle(400,648,200,20,{isStatic:true,friction:1});
	World.add(world, bar1);
	bar2 = Bodies.rectangle(500,648,20,100,{isStatic:true,friction:1});
	World.add(world, bar2);
	bar3 = Bodies.rectangle(300,648,20,100,{isStatic:true,friction:1});
    World.add(world, bar3);
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 30 , {isStatic:true,friction:1} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  packageBody.position.x = invisiblecopter.x;
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  

  barSprite1.x = bar1.position.x;
  barSprite2.x = bar2.position.x;
  barSprite3.x = bar3.position.x;

  helicopterSprite.velocityX = 3;
  invisiblecopter.velocityX  = 3;
  packageSprite.x = invisiblecopter.x;
  
 
	
  keyPressed();	

  if(packageBody.position.y>=620) {
	invisiblecopter.velocityX  = 0;
	  Matter.Body.setStatic(packageBody, true); 
	  packageBody.position.x = groundSprite.x;
	  packageBody.position.y = 630;
  }


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 
	
	Matter.Body.setStatic(packageBody, false); 
	packageBody.restitution = 0.8;
	 // Look at the hints in the document and understand how to make the package body fall only on
     invisiblecopter.velocityX  = 0;
  }
}



