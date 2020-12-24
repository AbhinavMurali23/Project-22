var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,624);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2
     
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	var packageBody_options = {
		restitution : 0.6,
		friction : 0,
		isStatic : true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);
	 	
	ground = Bodies.rectangle(width/2, 570, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
}

function draw() {
  
  background("lightblue");

  Engine.update(engine);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  rectMode(CENTER);
  rect(width/2,180,5,5);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     
	Matter.Body.setStatic(packageBody,false );

 }
}