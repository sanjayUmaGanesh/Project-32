const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box18;
var box10,box11,box12,box13,box14,box15,box16,box17;
var box19,box20,box21,box22,box23,box24,box25,box26;
var box27,box28,box29,box30,box31,box32,box38;
var ball1,chain,box33,box34,box35,box36,box37,random1,random2,random3;
var bg = "red";
var score = 0;

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    //level 1
    box1 = new Box(430-40,370,40,50);
    box2 = new Box(460-40,370,40,50);
    box3 = new Box(490-40,370,40,50);
    box4 = new Box(520-40,370,40,50);
    box5 = new Box(550-40,370,40,50);
    box6 = new Box(580-40,370,40,50);
    box7 = new Box(610-40,370,40,50);
    box8 = new Box(435-30,345,40,50);
    box9 = new Box(465-30,345,40,50);
    box10 = new Box(495-30,345,40,50);
    box11 = new Box(525-30,345,40,50);
    box12 = new Box(555-30,345,40,50);
    box13 = new Box(585-30,345,40,50);

    box14 = new Box(440-20,305,40,50);
    box15 = new Box(470-20,305,40,50);
    box16 = new Box(500-20,305,40,50);
    box17 = new Box(530-20,305,40,50);
    box18 = new Box(560-20,305,40,50);

    box19 = new Box(445-10,270,40,50);
    box20 = new Box(475-10,270,40,50);
    box21 = new Box(505-10,270,40,50);
    box22 = new Box(535-10,270,40,50);

    box23 = new Box(450,235,40,50);
    box24 = new Box(480,235,40,50);
    box25 = new Box(510,235,40,50);

    box26 = new Box(455 + 10,200,40,50);
    box27 = new Box(485 + 10,200,40,50);

    box28 = new Box(460+20,165,40,50)

    box29 = new Box(845,280,40,50);
    box30 = new Box(875,280,40,50);
    box31 = new Box(905,280,40,50);
    box32 = new Box(935,280,40,50);

    box33 = new Box(858,240,40,50);
    box34 = new Box(888,240,40,50);
    box35 = new Box(918,240,40,50);

    box36 = new Box(875,200,40,50);
    box37 = new Box(905,200,40,50);
   
    box38 = new Box(890,165,40,50);


    ball1 = new ball(10,100);
    chain = new Slingshot(ball1.body,{x: 190, y: 300})
    ground = new Ground(480,400,400,10);
    ground1 = new Ground(887,300,200,10);
}

function draw(){

if(frameCount % 20 === 0){
    random1 = random(5,1000);
    random2 = random(5,1000);
    random3 = random(5,1000);
}

    
if(bg)
    background(bg);
    Engine.update(engine);
    fill(random1,random2,random3);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    fill(random1,random2,random3);
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    fill(random1,random2,random3);
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    fill(random1,random2,random3);
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    fill(random1,random2,random3);
    box23.display();
    box24.display();
    box25.display();
    box23.score();
    box24.score();
    box25.score();
    fill(random1,random2,random3);
    box26.display();
    box27.display();
    box26.score();
    box27.score();
    fill(random1,random2,random3);
    box28.display();
    fill(random1,random2,random3);
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    fill(random1,random2,random3)
    box33.display();
    box34.display();
    box35.display();
    box33.score();
    box34.score();
    box35.score();
    fill(random1,random2,random3)
    box36.display();
    box37.display();
    box36.score();
    box37.score();
    fill(random1,random2,random3)
    box38.display();
    box38.score();

    ball1.display();
    ground.display();
    ground1.display();

    //fill(white);
    textSize(20)
    text(score,30,30);

    getBackgroundImg();


    if(keyCode === 32){
        chain.attach(ball1.body);
    }
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
    chain.fly()
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)
    
    if(hour >=06 && hour <=12){
        bg = "blue";
    }
    else if(hour >=13 && hour <=14){
        bg = "yellow";
    }
    else if(hour >=14 && hour <=19){
        bg = "orange";
    }
    else{
        bg = "black"
    }

    //backgroundImg = loadImage(bg);
    console.log(bg);
}