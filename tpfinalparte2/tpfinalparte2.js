// braian salvatierra y rocio zapata com 1
// https://youtu.be/jw-tqv5xsW4

let pantallaPrincipal;


function setup() {
  createCanvas(640, 480);
  pantallaPrincipal = new PantallaPrincipal();
}

function draw() {
  pantallaPrincipal.mostrar();  
}

function mousePressed() {
  pantallaPrincipal.mousePressed();  
}
