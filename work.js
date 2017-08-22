
var canvas;
var img;
var maxParticles, particleBreakDistance, repelDist;
var particles = [];

function preload()
{
    img = loadImage('http://i.imgur.com/4bgpl8F.png');
    myFont = loadFont('Images/Inconsolata-Regular.ttf');
    myFont2 = loadFont('Images/IndieFlower.ttf');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

   
    frameRate(60);
    strokeWeight(2);
    stroke(255);
   
    maxParticles = 50;
    repelDist = max(width, height)/10;
    particleBreakDistance = 500;//max(width, height) / 40;
    while (particles.length < maxParticles) {
        obj = [createVector(random(width), random(height)), createVector(random(4) - 2, random(4) - 2)];
        particles.push(obj);
    }
}

function drawParticles() {
    
    
      
    colorMode(HSB, 100);
    for (var i = 0; i < particles.length; i++) {
        var posi = particles[i][0];
        for (var j = i + 1; j < particles.length; j++) {
            var posj = particles[j][0];
            var dist = posi.dist(posj);
            if (dist <= particleBreakDistance) {
                strokeWeight(1);//(2-(dist/particleBreakDistance));
                stroke(100*(posi.x/width), 90, 90 ,255 - 255*dist/particleBreakDistance );
                line(posi.x, posi.y, posj.x, posj.y);
            }
        }
    }

    colorMode(RGB, 255);
    fill(255, 255, 255, 200);
    noStroke();

    var mousePos = createVector(mouseX, mouseY);

    for (var i = 0; i < particles.length; i++) {
        var pos = particles[i][0];
        var speed = particles[i][1];
        var randSize = 1 + random(2);
        ellipse(pos.x, pos.y, randSize, randSize);
        fill(0);
        pos.add(speed);

        var distToMouse = mousePos.dist(pos);

        if (distToMouse < repelDist) {
            var repel = createVector(pos.x - mousePos.x, pos.y - mousePos.y);
            var distFrac = (repelDist - distToMouse) / repelDist
            repel.setMag(50 * distFrac * distFrac);
            pos.add(repel);
        }

        if (pos.x > width) {
            pos.x -= width;
            pos.y += random(height / 10) - height / 20;
        }
        else if (pos.x < 0) {
            pos.x += width;
            pos.y += random(height / 10) - height / 20;
        }

        if (pos.y > height) {
            pos.y -= height;
            pos.x += random(width / 10) - width / 20;
        }
        else if (pos.y < 0) {
            pos.y += height;
            pos.x += random(width / 10) - width / 20;
        }
    }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    background(255);
   
//    push();textSize(15);
//    fill(59,100);
//    textFont(myFont2);
//    text('<h1>',70,150);
//    pop();
    //
    textFont(myFont);
    textSize(64);
    fill(0,100);
    noStroke();
    text('Hello!,',100,200);
    fill(0, 139, 139,150);
    textSize(50);
    text('I am Shivansh Tiwari,',100,245);
    fill(0, 59, 59,150);
    text('web developer.',100,290);
    //
//    push();
//    textSize(15);
//    textFont(myFont2);
//    fill(59,100);
//    text('</h1>',70,310);
//    pop();
    
    textSize(20);
     fill(59,100);
    text('Front End Developer.',100,340);
   
    
    
    drawParticles();
    
    particleBreakDistance = min(particleBreakDistance + 1, width / 12);
    
    
    push();
    image(img, width/4, height/5.5, img.width/4, img.height/4);
    pop();
}
