var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  helicopterIMG=loadImage("helicopter.png");
  packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(400, 400);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color("brown");
  
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
   World.add(world, ground);
   fill("brown");
 
   box2 = new Box(200,350, 200,20 , {isStatic:true} );
  box2.shapeColor=color("red");
  World.add(world, box2);

 	box1 = new Box(90,320, 20,100 , {isStatic:true} );
  box1.shapeColor=color("red");
  World.add(world, box1);

 	 box3 = new Box(300,320, 20,100 , {isStatic:true} );
   box3.shapeColor=color("red");
  World.add(world, box3);
  
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
 
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}

  } else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}
