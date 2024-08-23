function setup() {
  createCanvas(600, 600);
    background("rgb(209,209,20)")
}

function draw() {

  stroke("purple");
  fill("#F4B907");
  
  //console.log(mouseIsPressed)
  if  (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 30);
  }
  
}
