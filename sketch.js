
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;

var ground, paper;



function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    

    ground = new Ground(width/2,670,width,20);
    paper = new Paper(200,200,50,50);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display()
 
}



