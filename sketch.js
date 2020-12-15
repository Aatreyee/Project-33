const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine;
var world;
var ground;
var divisions=[];

var plinkos=[];
var partical=null;
var score=0;
var turn=0;

var gameState="play";

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground( width/2,height-5,width,10);




  for(var k=0;k<=width;k=k+80)
  {
    divisions.push(new Divisions(k ,height-150));
  }

  for(var j=40;j<=width;j=j+50){

    plinkos.push(new Plinko(j,75));

  }

  for(var j=15;j<=width;j=j+50){

    plinkos.push(new Plinko(j,175));
    
  }

  for(var j=40;j<=width;j=j+50){

    plinkos.push(new Plinko(j,275));
    
  }

  for(var j=15;j<=width;j=j+50){

    plinkos.push(new Plinko(j,375));
    
  }

 

}


function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  textSize(20);
  fill(255);
  text ("Score " +score ,250,50);

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

 
  
  if(partical!==null)
  {
    partical.display();
     if(partical.body.position.y>760)
     {
        if(partical.body.position.x<300)
        {
          score=score+500;
        }
        if(partical.body.position.x>300 && partical.body.position.x<600){
          score=score+100;
        }
        if(partical.body.position.x>600 && partical.body.position.x<800){
          score=score+200;
        }
          partical=null;
          if(turn>=5) 
            gameState="end";
        }
     }   
  
     if(gameState==="end"){
       textSize(40);
      fill(255);
       text("Game Over",220,250);
     }

  
}

function mousePressed(){
  if(gameState !=="end")
    {
      turn++;
      partical=new Particle(mouseX,10,10,10);
      
    }
}

