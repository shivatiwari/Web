var e1, e2, e3;


var canvas;
var mic;

var input;
var analyzer;
var r, g, b,d4;
var col = {
    r:255,
    g:0,
    b:0
}
function setup() {
    
    img1 = loadImage('http://i.imgur.com/sXkphzK.png');
    img2 = loadImage('http://i.imgur.com/6xF1hYJ.png');
    img3 = loadImage('http://i.imgur.com/TX9LH9h.png');

    
    
    noStroke();
    
        r = random(255);
        g = random(255);
        b = random(255);
        d4 = random(0,0.1);
  //createCanvas(windowWidth, windowHeight);
    
     canvas = createCanvas(windowWidth,windowHeight);
    
    
    
  background(250);
    
   
    canvas.position(0,0);
    canvas.style('z-index','-1');
    //audio input for circle 
    mic = new p5.AudioIn();
    mic.start();
    
  // Create an Audio input
  input = new p5.AudioIn();

  input.start();
}








function draw() {
  
   background(255);  
    var vol = mic.getLevel();
    fill(255,0,0,250);
    stroke(51);
    strokeWeight(10);
    ellipse(width/1.99,height/2.30,100+vol*width);//f
//    textSize(100+vol*width);
//    text("f",width/2.04,height/2.02);
    ellipse(width/4.05,height/2.30,100+vol*width);//li
    ellipse(width/1.315,height/2.30,100+vol*width);//ig
    
    
    
  //giving random color values
    col.r = random(100, 255);
    col.g = 0;
    col.b = random (100,255);
    
  // Get the overall volume (between 0 and 1.0)
//  var volume = input.getLevel();

  // If the volume > 0.1,  a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
//  var threshold = 0.01;
//  if (volume > threshold) {
//    noStroke(0);
//    fill(col.r,col.g,col.b,200);
//    rect(random(40, width), random(height), volume*50, volume*50);
//  }

  // Graph the overall potential volume, w/ a line at the threshold
//  var y = map(volume, 0, 1, height, 0);
//  var ythreshold = map(threshold, 0, 1, height, 0);

//  noStroke();
//  fill(175);
//  rect(0, 0, 10, height);
//  // Then draw a rectangle on the graph, sized according to volume
//  fill(0);
//  rect(0, y, 20, y);
//  stroke(0);
//  line(0, ythreshold, 19, ythreshold);
//    
    //linkenin
     pop();
    noStroke();
    fill(r+100, g-100, b+100,1);
    ellipse(width/(5.5+d4), height/2.45, 265, 265);
    pop();
    //fb
    push();
    //strokeWeight(2);
    //stroke(r, g, b);
    noStroke();
    fill(r, g, b, 1);
    ellipse(width/(2.2+d4), height/2.2, 200, 200);
    //instagram
    pop();
    noStroke();
    fill(r-100, g+100, b-100, 1);
    ellipse(width/(1.35+d4), height/2.2, 250, 250);
    pop();
    
    
    
    push();
    image(img1, width/5, height/3, img1.width/4, img1.height/4);
    image(img2, width/2.2, height/3, img2.width/4, img2.height/4);
    image(img3, width/1.4, height/3, img3.width/4, img3.height/4);
    pop();  
    
   
}

function mousePressed() {
  // Check if mouse is inside the circle
  var d1 = dist(mouseX, mouseY, width/(5.5+d4), height/2.45);
  var d2 = dist(mouseX, mouseY, width/(2.2+d4), height/2.2);
  var d3 = dist(mouseX, mouseY, width/(1.35+d4), height/2.2);
  if (d1 < 100) {
    // Pick new random color values
      window.open("https://www.linkedin.com/in/shivansh-tiwari-47b83210a/");
      
    r = random(255);
    g = random(255);
    b = random(255);
  }if (d2 < 100) {
    // Pick new random color values
      window.open("https://www.facebook.com/shivanshtiwari22");
    r = random(255);
    g = random(255);
    b = random(255);
  }if (d3 < 100) {
    // Pick new random color values
      //link('www.youtube.com/watch?v=CgjfXlXLn1c');
      window.open("https://www.instagram.com/shivatiwa_/"); 
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

