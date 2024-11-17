// salvatierra braian y zapata rocio com1 
// cuento "casa tomada"
// https://youtu.be/6k_5bCypGOE  

let imagenes = [];
let textos = [];
let estado = 0; // controlar las imagenes
let indiceTexto = 0; // control del texto
let yPos = 450;
let sonido;

function preload() {
  // cargar las imagenes
  for (let i = 0; i < 16; i++) {
    imagenes[i] = loadImage('data/pantalla' + i + '.jpg');
  }
  textos = loadStrings("data/texto.txt");
  sonido =loadSound("data/suspenso.mp3");
  
}

function setup() {
  createCanvas(640, 480);
   sonido.setVolume(0.5); //reduzco el volumen sonido 
  for (let i = 0; i < 16; i++) {
    imagenes[i].resize(640, 480);
  }
  textSize(15);
 
}

function draw() {
  dibujarPantallas();
}


 
