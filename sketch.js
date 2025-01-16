function setup() {
  createCanvas(400, 400);
textAlign(CENTER,CENTER);
  text('click for cheese', 200, 200);

}


function mouseClicked(){

let holepunch = 1
let holecount = 15
  
  background(255);

  noStroke()
  fill (255, 224, 145)
   rect(50, 50, 300, 300);   
  

  
  for ( holepunch = 0; holepunch < holecount; holepunch+=1){
    

  let x = random(50, 350);
  let y = random(50, 350);
  let holesize = random(10, 60);
    
    fill(255);
    circle(x, y, holesize);

  }
  

}
