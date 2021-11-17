var diam=10
var diam1=15
function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
   background("#000000");
   fill("#FFFFFF");
   //Head and body
   ellipse(240,433,135,135);
   ellipse(240,317,100,100);
   //snowflake
   ellipse(150,200,diam,diam);
   ellipse(300,100,diam,diam);
   ellipse(350,300,diam,diam);
   ellipse(200,50,diam,diam);
   ellipse(80,300,diam,diam);
   ellipse(50,400,diam,diam);
   ellipse(400,100,diam,diam);
   ellipse(450,400,diam,diam);
   ellipse(50,50,diam,diam);
   ellipse(300,200,diam,diam);
   ellipse(450,220,diam,diam);
   ellipse(75,150,diam,diam);
   ellipse(450,50,diam,diam);
   ellipse(230,200,diam1,diam1);
   ellipse(350,360,diam1,diam1);
   ellipse(150,450,diam1,diam1);
   diam=10+mouseX/80;
   fill("#000000")
   //eyes
   ellipse(width/2-32,height/1.6-15,15,20);
   ellipse(width/2+12,height/1.6-15,15,20);
   //mouth
   ellipse(240,345,20,20);
   //text
   stroke("#FFFFFF");
   fill("#FFFFFF");
   textSize(25);
   textFont("Georgia");
   text("Snowday",width-115,480);
}
function mousePressed(){
    if (diam1>=700){
      diam1=0;
    }else{
     diam1=diam1+20 
    }
  }

