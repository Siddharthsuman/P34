const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;



var world, engine, ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18,box19,box20;
var hero,rope1,monster;
var backgroundImg;
function preload(){
backgroundImg=loadImage("images/GamingBackground.png");

}

function setup() {
  var canvas=createCanvas(4500,1000);
   engine=Engine.create()
   world=engine.world;
   

   
   ground=new Ground(600,480,1201,20);

   
    //C1
    
    
    box1=new Box(710,480,40,40);
    box2=new Box(710,440,40,40);
    box3=new Box(710,400,40,40);
    box4=new Box(710,360,40,40);
    box5=new Box(710,320,40,40);
    box6=new Box(710,280,40,40);
    box7=new Box(710,240,40,40);
    box8=new Box(710,200,40,40);
    box9=new Box(710,160,40,40);
    box10=new Box(710,120,40,40);
    box11=new Box(710,80,40,40);
    box12=new Box(710,400,40,40);
   
    //C2
    box13=new Box(800,480,40,40);
    
    box14=new Box(800,440,40,40);
    box15=new Box(800,400,40,40);
    box16=new Box(800,360,40,40);
    box17=new Box(800,320,40,40);
    box18=new Box(800,280,40,40);
    box19=new Box(800,240,40,40);
    
    box20=new Box(800,200,40,40);
    box21=new Box(800,160,40,40);
    box22=new Box(800,120,40,40);
    box23=new Box(800,80,40,40);
    box24=new Box(800,40,40,40);
    //C3
    box25=new Box(900,480,40,40); 
    box26=new Box(900,440,40,40);
    box27=new Box(900,400,40,40);
    box28=new Box(900,360,40,40);
    box29=new Box(900,320,40,40);
    box30=new Box(900,280,40,40);
    box31=new Box(900,240,40,40); 
    box32=new Box(900,200,40,40);
    box33=new Box(900,160,40,40);
    box34=new Box(900,120,40,40);
    box35=new Box(900,80,40,40);
    box36=new Box(900,40,40,40);
   //C4
   box37=new Box(1000,480,40,40); 
   box38=new Box(1000,440,40,40);
   box39=new Box(1000,400,40,40);
   box40=new Box(1000,360,40,40);
   box41=new Box(1000,320,40,40);
   box42=new Box(1000,280,40,40);
   box43=new Box(1000,240,40,40); 
   box44=new Box(1000,200,40,40);
   box45=new Box(1000,160,40,40);
   box46=new Box(1000,120,40,40);
   box47=new Box(1000,80,40,40);
   box48=new Box(1000,40,40,40);
   
  
    hero=new Hero(160,100,180,180)
   rope1=new Rope(hero.body,{x:300,y:100})

   monster=new Monster(1150,80,200,200)
  }

function draw() {
 background(0, 255, 237);
  Engine.update(engine)
  ground.display();
  push();  
  stroke(155, 0, 0)
  fill(234, 11, 11)
 box1.display();
 box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
 box7.display();
  box8.display();
  box9.display()
  box10.display();
  box11.display();
  box12.display();
  pop();
  push();
  fill(48, 188, 201)
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
pop();
push();
fill(146, 234, 121);
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
pop();
push();
fill(201, 93, 234)
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display(); 
  box48.display();
  pop();
  hero.display();
  rope1.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

