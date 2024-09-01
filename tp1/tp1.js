//rocio zapata 94748/5 Com1
// https://youtu.be/bwIczttS0NU

let  migrilla;
let correccion=0;
let max_distance;
let mirect=30;

function preload() {
  migrilla = loadImage ("data/migrilla.jpg");
}
function setup() {
  createCanvas (800, 400);
  mouseX = (600);
  mouseY = (200);
  noStroke();
  max_distance = dist (0, 0, width, height/2);
  area = calculateRectangleArea(100, 50);
  print ("El area del rectangulo es : " + area );
}

function draw() {
  background (255);
  image (migrilla, 0, 0, 400, 400);

  grilla(400, 0, 15, 40) ;
  grilla(450, 50, 20, 15 ) ;
  grilla (450, mouseY-150, 20, 15 );

  for (let i = 400; i <= width; i += 60) {
    for (let j = 0; j <= height; j += 60) {
      let size = dist(mouseX, mouseY, i, j);
      size = map(size, 0, max_distance, 10, mirect);  
      rect(i, j, size, size);
    }
  }
}

function grilla( x, y, t, c) {

  for (let i=0; i<c; i++) {
    for (let j=0; j<c; j++) {
      if ((i+j)%2===0) {
        fill(0, 104, 139);
      } else {
        fill(31, 200, 131);
      }
      rect (x+i*t, y+j*t, t, t) ;
    }
  }
  for (let i=0; i<c+1; i++) {
    for (let j=0; j<c+1; j++) {

      if ((i+j)%10===0) {
        correccion=0;
      } else if ((i+j)%10===5) {
        correccion = 255;
      }
      if ((i+j)%2==0) {
        fill(255-correccion);
      } else {
        fill(0+correccion);
      }
      circle(x+i*t, y+j*t, t/3);
    }
  }
}

function calculateRectangleArea ( width,  height){ 
  return width * height;
  
}

function mousePressed() {
  mirect = random(10, 50);
}
