var font;
var vehicles = [];

function preload() {
  font = loadFont('Images/Inconsolata-Regular.ttf');
     
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);

  var points = font.textToPoints('Under Construction',innerWidth/6 , innerHeight/2, 100, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    
  }
}

function draw() {
  background(255);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxspeed = 10;
  this.maxforce = 1;
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);

  arrive.mult(1);
  flee.mult(5);

  this.applyForce(arrive);
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function() {
  stroke(100);
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
}


Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Vehicle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}