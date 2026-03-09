
var sandy= 0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    background(120,128,204); //pink background
}

//The draw function happens over and over again
function draw() {

  //circle
  stroke(255,30,30); // red border
  strokeWeight(2);
  fill(68,112,mouseY,255); //green center
  ellipse(150,sandy,40,40); // green oval on left side
  fill(random(130,255),random (30,255),random(2,255));
  stroke(93,100,148);
  strokeWeight(5);
  rect(random(0,150),random(height),80,40); 
  strokeWeight(2);
  fill(30,230,240);
  strokeWeight(0);
  triangle(200,150,325,400,425,mouseX);
  strokeWeight(5);
  stroke(148,145,93);
  line(75,75,450,sandy);
  fill(230,40,210);
  stroke(255,255,255);
  strokeWeight(5);
  textFont('Courier');
  textSize(70);
  text('Party Time',45,250);
  strokeWeight(0);
  ellipse(mouseX,mouseY,mouseY-50,mouseX-50);

}

function mousePressed(){
  if (sandy>=500) {
    sandy=0;
  } else {
     sandy= sandy+10;
  }

}
