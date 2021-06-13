const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,body;

function setup()
{
    createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
    
    groundoptions= { isStatic : true}
    ground= Bodies.rectangle(200,390,400,20,groundoptions);
    World.add(world,ground);
    
    object1options= {restitution:1}
    object1= Bodies.rectangle(200,200,20,20,object1options);
    World.add(world,object1);

    object2options= {restitution:2}
    object2= Bodies.rectangle(200,300,20,20,object2options);
    World.add(world,object2);
}


function draw()
{
    background("gold");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(object1.position.x,object1.position.y,20,20);
    rect(object2.position.x,object2.position.y,20,20);
    }

