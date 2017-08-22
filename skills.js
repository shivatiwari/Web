var balls = [];
var angle = 0.0;
    
function preload(){
  // ima6 = loadImage('http://i.imgur.com/OyIHIxA.png');
}

function setup()
{
    img1 = loadImage('http://i.imgur.com/97zRmwL.png');
    img2 = loadImage('http://i.imgur.com/5vQMyGR.png');
    img3 = loadImage('http://i.imgur.com/2VgdI6O.png');
    img4 = loadImage('http://hello.p5js.org/assets/p5-sq-reverse.svg');
    img5 = loadImage('http://i.imgur.com/2VHctAJ.png');
    
    
    
    e1 = new Eye(innerWidth/3.5, innerHeight/1.5, 120);
    e2 = new Eye(innerWidth/1.2, innerHeight/5, 180);
    e3 = new Eye(innerWidth/1.05, innerHeight/1.05, 280);
    e4 = new Eye(50, 50, 25);
    
    
    createCanvas(innerWidth,innerHeight);
    
    for(var i=0; i< 50; i++)
        {
   balls[i] = new Ball(innerWidth/1.2, innerHeight/5); 
        }
    
}



function draw()
{
    //background(255,10);
   
    for(var i = 0; i < balls.length; i++)
        {
    balls[i].move();
            
    balls[i].bounce();
            
    balls[i].display();
            
       
    for(var j = 0; j < balls.length; j++)
            {
   
            if(i != j && balls[i].intersects(balls[j]))
                {
                    balls[i].bounceback();
                    balls[j].bounceback();
                }
            }
        }
    if(mouseIsPressed)
        {
        balls.push(new Ball(mouseX,mouseY));
        }
    if(balls.length > 25)
        {
            balls.splice(0,1);
        }
    
    
    
    push();
    //translate(width/8, height/10);
    rect(width/7.5, height/8.5,99,25);
    rect(width/3, height/8.4,95,25);
    rect(width/1.9, height/8.5,99,25);
//    rotate(angle);
//    angle += 0.001;
    push();
  push();
    image(img1, width/8, height/8, img1.width/4, img1.height/4);
    image(img2, width/3, height/8, img2.width/4, img2.height/4);
    image(img3, width/1.9, height/8.5, img3.width/10, img3.height/10);
    image(img4, width/1.9, height/8.5, img4.width/10, img4.height/10);
    image(img5, width/1.9, height/1.8, img5.width/3, img5.height/3);
    pop(); 
    
    e1.update(mouseX, mouseY);
     e1.display();
    e2.update(mouseX, mouseY);
     e2.display();
    e3.update(mouseX, mouseY);
     e3.display();
    e4.update(mouseX, mouseY);
     e4.display();
    pop();
   //image(ima6,width/5, height/1.8,ima6.width/2,ima6.height/2);
     
    pop();
}


function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

    var  r = random(100);
    var  g = random(100,200);
    var  b = random(110);
    
    
  this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function () {
    push();
      noStroke(0);
    translate(this.x, this.y);
    fill(51);//(r, g, b);
    ellipse(0, 0, this.size+20, this.size+20);
      
      fill(200);
    ellipse(0, 0, this.size+10, this.size+10);
      
      fill(255);
    ellipse(0, 0, this.size, this.size);
      
    rotate(this.angle);
    fill(51);//(r, g, b);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
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





function Ball(x,y)
{
    
  var  r = random(200,255);
 var   g = random(100,200);
  var  b = random(200,255);
    this.x = x;
    this.y = y;
    this.r = 4;
     var s = 2;
//    this.xspeed = 2;
//    this.yspeed = 2;
    this.xspeed =random(-s,s);
    this.yspeed =random(-s,s);

    this.move = function()
    {
          this.x = this.x + this.xspeed;
          this.y = this.y + this.yspeed;  
        
        
    }
    
    this.display = function()
    {
        
//        if(mouseIsPressed)
//        {
//            
//    fill(255);
//    strokeWeight(5);
//    stroke(random(255,0,0));
//}
//   else{ 
   //fill(255, 150, 0);
    strokeWeight(4);
    stroke(random(255),0,0,100);//(r,g,b)//
 //   }
    
   for(var i = 0; i <10; i++)
   {
       line(this.x,this.y,random(this.x-10,this.x+10),random(this.y-10,this.y+10));
    //line(this.x,this.y,random(mouseX-100,mouseX+100),random(mouseY-100,mouseY+100));
    }
    //ellipse(this.x,this.y,40,40);

//        stroke(random(255));
//        strokeWeight(5);
//        fill(255);
//       //image(ima6,this.x, this.y,width/2,height/2);
//        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.bounceback = function()
    {
        this.xspeed = this.xspeed * -1;
         this.yspeed = this.yspeed * -1;
//        other.xspeed = other.xspeed * -1;
//        other.yspeed = other.yspeed * -1;
        
        
    }
    this.bounce = function()
    {
         
         if(this.x > width || this.x < 0)
        this.xspeed = this.xspeed * -1;
    
    if(this.y > height || this.y <0)
        this.yspeed = this.yspeed * -1;

    }
    this.intersects = function(other)
    {
      var d = dist(this.x,this.y, other.x,other.y);
        if(d <= this.r + other.r)
           {
           return true;
           }
        else{
            return false;
        }
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}