const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,cannonBall;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
//crie um objeto para bala de canhão
  cannonBall = new CannonBall(cannon.x,cannon.y);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
//exibir a bala de canhão 
  cannonBall.display();
  //keyReleased();
}






function keyReleased() {
 //use keydown para chamar a função de disparo
 if (keyCode ==DOWN_ARROW) {
  cannonBall.shoot();
 }
}
