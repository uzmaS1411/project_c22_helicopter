
/*var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
    Matter.Body.setStatic(packageBody, false);
  }
}
*/

var helimg, helsprite,packimg,packsprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld;

var gnd;

function preload(){
	helimg = loadImage("helicopter.png");
	packimg = loadImage("package.png");
}

function setup(){
	createCanvas(800, 700);
	myengine= Engine.create();
	// myworld is myengine's world
	myworld = myengine.world;

	var op={ 
		restitution:0.4,
		isStatic:true
	}
	packageBody = Bodies.circle(width/2 , 80 , 5 , op);
	World.add(myworld,packageBody);

	ground = Bodies.rectangle(width/2, 640, width, 20 , {isStatic:true} );
	World.add(myworld, ground);
	 
	
	packsprite=createSprite(width/2, 80, 10,10);
	packsprite.addImage(packimg)
	packsprite.scale=0.2

	helsprite = createSprite(width/2,80,10,10,{isStatic:true});
	helsprite.addImage(helimg);
	helsprite.scale = 0.7;

	gnd = createSprite(1,640,2*width,20);
	gnd.shapeColor ="white";




}

function draw(){

	background("black");
	Engine.update(myengine);
	ellipseMode(RADIUS)
	ellipse(packageBody.position.x,packageBody.position.y,10,10)
	rectMode(CENTER)
	rect(ground.position.x,ground.position.y,width,20);
	


	if(keyDown("DOWN_ARROW"))
	{
		Matter.Body.setStatic(packageBody, false);
	}
	packsprite.x=packageBody.position.x;
	packsprite.y = packageBody.position.y;
	drawSprites();

}