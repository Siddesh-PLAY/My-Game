var edges;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22;
var wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall30,wall40,wall41;
var wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53,wall54,wall55,wall56,wall57,wall58,wall59,wall60,wall61
var player1,player2;
var laser1,laser2,laser3,laser4,laser5,laser6,laser7,laser8,laser9,laser10,laser11,laser12,laser13,laser14,laser15,laser16,laser17,laser18,laser19,laser20;
var laser21;
var diamond1,diamond2;

function setup() {
  createCanvas(1400,800);
 player1= createSprite(620,750,15,15);
 player2= createSprite(880,750,15,15);
//Player spawn box
wall1=createSprite(600,750,15,150);
//wall1.shapeColor="white";
wall2=createSprite(900,750,15,150);
wall3=createSprite(660,680,133,15);
wall4=createSprite(840,680,133,15);
//Left Side wall
wall5=createSprite(520,750,150,15);
wall6=createSprite(452,650,15,200);
wall7=createSprite(359,550,200,15);
wall8=createSprite(359,675,15,250);
wall9=createSprite(200,550,15,250);
wall10=createSprite(156,668,100,15);
wall11=createSprite(55,554,170,15);
wall12=createSprite(72,296,400,15);
wall13=createSprite(276,246,15,150);
wall14=createSprite(180,172,207,15);
wall15=createSprite(350,255,15,150);
wall15=createSprite(493,186,300,15);
wall16=createSprite(455,245,200,15);
wall17=createSprite(555,316,15,200);
wall19=createSprite(455,323,200,15);
//Diamond Area1
wall20=createSprite(638,279,15,200);
wall21=createSprite(831,373,400,14);
wall22=createSprite(1025,279,15,200);
wall23=createSprite(720,186,170,15);
wall24=createSprite(934,186,170,15);
//Right Side
wall25=createSprite(790,631,400,15);
wall26=createSprite(985,641,15,34);
wall27=createSprite(790,631,400,15);
wall28=createSprite(988,694,130,15);
wall29=createSprite(985,752,15,120);
wall30=createSprite(1155,740,350,15);
wall31=createSprite(1164,693,15,90);
wall32=createSprite(1110,655,110,15);
wall33=createSprite(1052,651,15,150);
wall34=createSprite(989,576,140,15);
wall35=createSprite(866,554,15,150);
wall36=createSprite(1034,475,350,15);
wall37=createSprite(933,417,15,102);
wall38=createSprite(1202,377,15,200);
wall39=createSprite(1159,281,100,15);
wall40=createSprite(1111,238,15,100);
wall41=createSprite(1068,188,100,15);
wall42=createSprite(1065,81,15,200);
wall43=createSprite(1323,668,15,150);
wall44=createSprite(1393,630,150,15);
wall45=createSprite(1362,554,15,150);
wall46=createSprite(1362,275,15,300);
wall47=createSprite(1294,128,150,15);
wall48=createSprite(1226,57,15,150);
wall49=createSprite(1183,50,100,15);
wall50=createSprite(268,425,150,15);
wall51=createSprite(395,425,30,15);
wall52=createSprite(411,443,15,50);
wall53=createSprite(505,461,200,15);
wall54=createSprite(598,520,15,130);
wall55=createSprite(670,577.5,150,15);
wall56=createSprite(738,520,15,130);
wall57=createSprite(670,445,15,130);
wall58=createSprite(1290,400,15,400);
wall59=createSprite(1272,595,50,15);
wall60=createSprite(1230,219,130,15);
wall61=createSprite(1173,170,15,100);
//Lasers
laser1=createSprite(525,605,10,150);
laser1.shapeColor="red";























}

function draw() {
  background(0);
  for(var i=1; i<=61;i++){
    textSize(15);
    fill("pink");
    var wall="wall"+i
    text(i,wall.x,wall.y)
  
  }
  edges= createEdgeSprites();
  drawSprites();
  
  fill("red");
  textSize(15)
  text(World.mouseX,mouseX,mouseY)
  textSize(15)
  text(World.mouseY,mouseX+40,mouseY)
  //Player Keys
  if(keyDown(UP_ARROW)){
    player1.velocityY=-2;
  }
  if(keyDown(DOWN_ARROW)){
  player1.velocityY=2;
  }
  if(keyDown(LEFT_ARROW)){
  player1.velocityX=-2
  }
  if(keyDown(RIGHT_ARROW)){
  player1.velocityX=2; 
  }

for(var i=1; i<=61;i++){
  textSize(15);
  fill("pink");
  var wall="wall"+i
  text(i,wall.x,wall.y)

}

}
