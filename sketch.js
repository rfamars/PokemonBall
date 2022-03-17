let zombies = [];
function setup() {
  createCanvas(600, 400);
  r=3;

  for (let i = 0; i < 60; i++) {
    zombies.push(new Mover());
  }
}

function draw() {
  background(200);
  
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].gerakCuy();
    zombies[i].tampil();
    zombies[i].cekBatas();
  }
}


class Mover {
  constructor(){
    this.location =
      createVector(random(width/2),random(height/2));
    
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.panjanglebar = random(0, 0);
    
  }
  
  tampil(){
    
    //warna putih
    noStroke();
    fill('white');
    rect(this.location.x-2, this.location.y-2, 4, 4);
    rect(this.location.x+2, this.location.y+2, 8, 2);
    rect(this.location.x-10, this.location.y+2, 8, 2);
    rect(this.location.x-8, this.location.y+4, 16, 4);
    rect(this.location.x-4, this.location.y+8, 8, 2);
    
    //warna random
    noStroke();
    fill('Red');
    rect(this.location.x-10, this.location.y-2, 6, 2);
    rect(this.location.x+4, this.location.y-2, 6, 2)
    rect(this.location.x-10, this.location.y-4, 8, 2);
    rect(this.location.x+2, this.location.y-4, 8, 2);
    rect(this.location.x-8, this.location.y-8, 16, 4);
    rect(this.location.x-4, this.location.y-10, 8, 2)
    
    //warna hitam
    noStroke();
    fill('Black');
    rect(this.location.x+2, this.location.y, 10, 2);
    rect(this.location.x-12, this.location.y, 10, 2);
    rect(this.location.x-12, this.location.y-4, 2, 8);
    rect(this.location.x+10, this.location.y-4, 2, 8);
    rect(this.location.x-10, this.location.y-8, 2, 4);
    rect(this.location.x+8, this.location.y-8, 2, 4);
    rect(this.location.x-8, this.location.y-10, 4, 2);
    rect(this.location.x+4, this.location.y-10, 4, 2);
    rect(this.location.x-4, this.location.y-12, 8, 2);
    rect(this.location.x-10, this.location.y+4, 2, 4);
    rect(this.location.x+8, this.location.y+4, 2, 4);
    rect(this.location.x-8, this.location.y+8, 4, 2);
    rect(this.location.x+4, this.location.y+8, 4, 2);
    rect(this.location.x-4, this.location.y+10, 8, 2);
    
  }
  
  gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    var w = p5.Vector.sub(mouse,CENTER);
    noStroke()
    
    //orange
    fill(255,140,0);
    rect(mouse.x+(r*-4), mouse.y+(r*-13), (r*1),(r*3));
    rect(mouse.x+(r*3), mouse.y+(r*-13), (r*1),(r*3));
    rect(mouse.x+(r*-4), mouse.y+(r*-10), (r*8),(r*5));
    rect(mouse.x+(r*-5), mouse.y+(r*-5), (r*10),(r*3));
    rect(mouse.x+(r*-5), mouse.y+(r*-5), (r*10),(r*3));
    rect(mouse.x+(r*-4), mouse.y+(r*-2), (r*8),(r*2));
    rect(mouse.x+(r*-5), mouse.y+(r*0), (r*10),(r*2));
    rect(mouse.x+(r*-6), mouse.y+(r*2), (r*12),(r*2));
    rect(mouse.x+(r*-7), mouse.y+(r*4), (r*14),(r*3));
    rect(mouse.x+(r*7), mouse.y+(r*-7), (r*1),(r*2));
    rect(mouse.x+(r*-8), mouse.y+(r*-7), (r*1),(r*2));
    rect(mouse.x+(r*9), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*-10), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*10), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*-11), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*11), mouse.y+(r*-4), (r*1),(r*2));
    rect(mouse.x+(r*-12), mouse.y+(r*-4), (r*1),(r*2));
    rect(mouse.x+(r*12), mouse.y+(r*-2), (r*1),(r*2));
    rect(mouse.x+(r*-13), mouse.y+(r*-2), (r*1),(r*2));
    
    //warna kuning
    fill(255,222,173)
    rect(mouse.x+(r*2), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x-(r*3), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x-(r*4), mouse.y+(r*4), (r*8),(r*2));
    rect(mouse.x-(r*3), mouse.y+(r*6), (r*6),(r*1));
    rect(mouse.x-(r*3), mouse.y+(r*7), (r*6),(r*1));
    rect(mouse.x-(r*2), mouse.y+(r*7), (r*4),(r*1));
    
    //warna hitam
    fill('black');
    rect(mouse.x-(r*5), mouse.y-(r*2), (r*1),(r*2));
    rect(mouse.x-(r*6), mouse.y-(r*6), (r*1),(r*5));
    rect(mouse.x-(r*5), mouse.y-(r*13), (r*1),(r*8));
    rect(mouse.x-(r*4), mouse.y-(r*14), (r*1),(r*1));
    rect(mouse.x-(r*3), mouse.y-(r*13), (r*1),(r*3));
    rect(mouse.x-(r*2), mouse.y-(r*11), (r*1),(r*3));
    rect(mouse.x-(r*1), mouse.y-(r*11), (r*2),(r*1));
    rect(mouse.x+(r*1), mouse.y-(r*11), (r*1),(r*3));
    rect(mouse.x+(r*2), mouse.y-(r*13), (r*1),(r*3));
    rect(mouse.x+(r*3), mouse.y-(r*14), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y-(r*13), (r*1),(r*8));
    rect(mouse.x+(r*5), mouse.y-(r*6), (r*1),(r*5));
    rect(mouse.x+(r*4), mouse.y-(r*2), (r*1),(r*2));
    rect(mouse.x+(r*5), mouse.y+(r*0), (r*1),(r*2));
    rect(mouse.x+(r*6), mouse.y+(r*2), (r*1),(r*2));
    rect(mouse.x+(r*7), mouse.y+(r*4), (r*1),(r*3));
    rect(mouse.x+(r*6), mouse.y+(r*7), (r*1),(r*2));
    rect(mouse.x+(r*3), mouse.y+(r*9), (r*3),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*8), (r*6),(r*1));
    rect(mouse.x+(r*-6), mouse.y+(r*9), (r*3),(r*1));
    rect(mouse.x+(r*-7), mouse.y+(r*7), (r*1),(r*2));
    rect(mouse.x+(r*-8), mouse.y+(r*4), (r*1),(r*3));
    rect(mouse.x+(r*-7), mouse.y+(r*2), (r*1),(r*2));
    rect(mouse.x+(r*-6), mouse.y+(r*0), (r*1),(r*2));
    rect(mouse.x+(r*-4), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*7), (r*1),(r*1));
    rect(mouse.x+(r*2), mouse.y+(r*7), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-1), mouse.y+(r*3), (r*2),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*-7), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*-7), (r*1),(r*1));
    
    //putih
    fill('white');
    rect(mouse.x+(r*-4), mouse.y+(r*-5), (r*1),(r*2));
    rect(mouse.x+(r*3), mouse.y+(r*-5), (r*1),(r*2));
    
    //cokelat
    fill(140,82,45);
    rect(mouse.x+(r*3), mouse.y+(r*1), (r*1),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*1), (r*1),(r*1));
    rect(mouse.x+(r*2), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*-2), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*1), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y+(r*4), (r*1),(r*2));
    rect(mouse.x+(r*-5), mouse.y+(r*4), (r*1),(r*2));
    rect(mouse.x+(r*-6), mouse.y+(r*5), (r*1),(r*1));
    rect(mouse.x+(r*5), mouse.y+(r*5), (r*1),(r*1));
    rect(mouse.x+(r*-6), mouse.y+(r*7), (r*3),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*7), (r*3),(r*1));
    rect(mouse.x+(r*-7), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-5), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*-8), (r*1),(r*6));
    rect(mouse.x+(r*7), mouse.y+(r*-8), (r*1),(r*1));
    rect(mouse.x+(r*8), mouse.y+(r*-7), (r*2),(r*1));
    rect(mouse.x+(r*8), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*7), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*10), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*11), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*12), mouse.y+(r*-4), (r*1),(r*2));
    rect(mouse.x+(r*11), mouse.y+(r*-2), (r*1),(r*1));
    rect(mouse.x+(r*13), mouse.y+(r*-2), (r*1),(r*3));
    rect(mouse.x+(r*12), mouse.y+(r*0), (r*1),(r*1));
    rect(mouse.x+(r*-7), mouse.y+(r*-8), (r*1),(r*6));
    rect(mouse.x+(r*-8), mouse.y+(r*-8), (r*1),(r*1));
    rect(mouse.x+(r*-8), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*-9), mouse.y+(r*-7), (r*1),(r*2));
    rect(mouse.x+(r*-10), mouse.y+(r*-7), (r*1),(r*1));
    rect(mouse.x+(r*-11), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*-12), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*-13), mouse.y+(r*-4), (r*1),(r*2));
    rect(mouse.x+(r*-12), mouse.y+(r*-2), (r*1),(r*1));
    rect(mouse.x+(r*-14), mouse.y+(r*-2), (r*1),(r*3));
    rect(mouse.x+(r*-13), mouse.y+(r*0), (r*1),(r*1));
    
    //biru tua
    fill(25,25,112);
    rect(mouse.x+(r*2), mouse.y+(r*-3), (r*1),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*-3), (r*1),(r*1));
    rect(mouse.x+(r*1), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*-2), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*5), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*-6), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*7), mouse.y+(r*-4), (r*1),(r*1));
    rect(mouse.x+(r*-8), mouse.y+(r*-4), (r*1),(r*1));
    rect(mouse.x+(r*7), mouse.y+(r*-3), (r*2),(r*1));
    rect(mouse.x+(r*-9), mouse.y+(r*-3), (r*2),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*-2), (r*4),(r*1));
    rect(mouse.x+(r*-10), mouse.y+(r*-2), (r*4),(r*1));
    rect(mouse.x+(r*5), mouse.y+(r*-1), (r*7),(r*1));
    rect(mouse.x+(r*-12), mouse.y+(r*-1), (r*7),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*0), (r*3),(r*1));
    rect(mouse.x+(r*-9), mouse.y+(r*0), (r*3),(r*1));
    
    //biru muda
    fill(65,105,225);
    rect(mouse.x+(r*8), mouse.y+(r*-5), (r*1),(r*2));
    rect(mouse.x+(r*9), mouse.y+(r*-5), (r*1),(r*3));
    rect(mouse.x+(r*10), mouse.y+(r*-4), (r*1),(r*3));
    rect(mouse.x+(r*-9), mouse.y+(r*-5), (r*1),(r*2));
    rect(mouse.x+(r*-10), mouse.y+(r*-5), (r*1),(r*3));
    rect(mouse.x+(r*-11), mouse.y+(r*-4), (r*1),(r*3));
    rect(mouse.x+(r*-3), mouse.y+(r*-4), (r*1),(r*1));
    rect(mouse.x+(r*2), mouse.y+(r*-4), (r*1),(r*1));
    
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = (2, 10);
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}