class Divisions
{
    constructor(x,y){

        var options={
            isStatic:true
            
        }
            this.body = Bodies.rectangle(x,y,10,300,options);  
            this.width=10;
            this.height=300;
            World.add(world,this.body);   
    }
       display() 
        {    

    var pos=this.body.position;
    rectMode(CENTER);
    
    rect(pos.x,pos.y,10,300);
    
    }
    
}
