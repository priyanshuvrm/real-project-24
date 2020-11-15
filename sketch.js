
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine , world;

var ground , boxSprite1 , boxSprite2 , boxSprite3 , ball;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution:0.5 , 
		friction:1 , 
		density:1     
	  }

	  ball = Bodies.circle(200,100,20,ball_options);
      World.add(world,ball);

	  var ground_options = {
		  isStatic:true
	  }
	

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, height-35, width,10,ground_options);
World.add(world,ground);
	boxSprite1 = createSprite(702,620,15,60);
	boxSprite1.shapeColor = color(255,0,0);

	boxSprite2 = Bodies.rectangle(620,642,150,15,ground_options);
	boxSprite2.shapeColor = color(255,0,0);
	World.add(world,boxSprite2);

	boxSprite3 = createSprite(538,620,15,60);
	boxSprite3.shapeColor = color(255,0,0);

	Engine.run(engine);
  
}


function draw() {
	background(255,255,255);  
	Engine.update(engine);
	rectMode(CENTER);
	fill("aqua");
	rect(ground.position.x , ground.position.y , width,10);
    fill("red");
	rect(boxSprite2.position.x , boxSprite2.position.y , 150 , 15 )
  ellipseMode(RADIUS);
  ellipse(ball.position.x , ball.position.y , 20 , 20);
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball , ball.position,{x:40 , y:-40});
	}
}