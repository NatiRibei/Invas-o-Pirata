class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
    //crie um corpo circular
    this.body = Bodies.circle(x,y,this.r,options);
    //carregue a imagem
    this.image = loadImage("./assets/cannonball.png");
    this.trajectory = [];
    World.add(world, this.body);
  }

  shoot() {
    
    //defina o ângulo da bala para o canhão
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    //defina valor estático para o corpo
    Matter.Body.setStatic(this.body, false);
    //defina a velocidade da bala para fazê-la se mover
    Matter.Body.setVelocity(this.body, {x: velocity.x, y: velocity.y});
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    console.log(pos);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //mostrar a imagem
    image(this.image,0,0,this.r,this.r);
    pop();

    //obter as posições da bala e adicionar na matriz trajetória
    if (this.body.velocity.x > 0 && this.body.position.x > 300){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

    //defina a imagem para a trajetória
    for (var i=0; i < this.trajectory.length; i++){
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
    }
  }

