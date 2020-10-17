class Box {
  constructor(x, y, width, height) {
    var options = {
        'friction':3,
        'density':0.01,
        'stifness':1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 5){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
    World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
    //tint(255,this.Visiblity);
     //rect(this.body.position.x, this.body.position.y, width, height);
     pop();

     
      
    }
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -4){
        score = score + 10 ;
  }
}
};
