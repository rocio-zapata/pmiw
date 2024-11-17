function mousePressed() {
    //creditos
   if (estado === 0 && botonPresionado(520, 10, 110, 40)) {
    estado = 15;
  } 
   //pantallas 
  else if (estado === 0 && botonPresionado(270, 300, 110, 40)) {
    estado = 1;
    indiceTexto = 0;
  } 
  else if (estado === 1 && botonPresionado(520, 400, 110, 40)) {
    estado = 2;
    indiceTexto = 1;
  } 
  else if (estado === 2 && botonPresionado(100, 400, 110, 40)) {
    estado = 3;
    indiceTexto = 2;
  } 
  else if (estado === 2 && botonPresionado(430, 400, 110, 40)) {
    estado = 4;
    indiceTexto = 3;
  } 
  else if (estado === 3 && botonPresionado(520, 400, 110, 40)) {
    estado = 5;
    indiceTexto = 4;
  } 
  else if (estado === 5 && botonPresionado(520, 400, 110, 40)) {
    estado = 6;
    indiceTexto = 5;
  } 
  else if (estado === 6 && botonPresionado(100, 400, 110, 40)) {
    estado = 7;
    indiceTexto = 6;
  } 
  else if (estado === 6 && botonPresionado(430, 400, 110, 40)) {
    estado = 8;
    indiceTexto = 7;
  } 
  else if (estado === 8 && botonPresionado(520, 400, 110, 40)) {
    estado = 9;
    indiceTexto = 8;
  } 
  else if (estado === 4 && botonPresionado(520, 400, 110, 40)) {
    estado = 11;
    indiceTexto = 9;
  } 
  else if (estado === 11 && botonPresionado(100, 400, 110, 40)) {
    estado = 12;
    indiceTexto = 10;
  } 
  else if (estado === 11 && botonPresionado(430, 400, 110, 40)) {
    estado = 13;
    indiceTexto = 11;
  } 
  else if (estado === 13 && botonPresionado(520, 400, 110, 40)) {
    estado = 14;
    indiceTexto = 12;
  } 
  // reiniciamos las pantallas 
  else if ((estado === 7 || estado === 9 || estado === 12 || estado === 14 || estado === 15) && botonPresionado(520, 400, 110, 40)) {
    estado = 0;
    indiceTexto = 0;
  }
}

  //el movimiento de los creditos
function creditos() {
  push();
  textSize(32);
  textAlign(CENTER);
  fill(255);
  text("Casa Tomada \n Autor: Julio Cortazar \n Hecho por: \n Salvatierra Braian \n Zapata Rocio \n Comision 1 \n Jose Bugiolachi \n Fernando Cardos ", width / 2, yPos);
  //si posicion en y es menor a 50 se mueve
  if (yPos > 50) {
    yPos -= 2; //velocidad de movimiento
  }
  pop();
}
