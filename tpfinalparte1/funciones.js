function mousePressed() {
  
  // pantalla de creditos
  if (botonPresionado(520, 10, 110, 40)) {
    estado = 15; 
  }
  
  if(estado === 15  && botonPresionado(520, 400, 110, 40)){
    estado = 0;
  
  }

  // pantalla 1
  if (botonPresionado(270, 300, 110, 40)) {
    estado = 1; 
    indiceTexto = 0;
  }

  // Pantalla 2 
  if (estado === 1 && botonPresionado(520, 400, 110, 40)) {
    estado = 2; 
    indiceTexto = 1; 
    return;
  }

  // pntalla 2 decision
  if (estado === 2) {
    if (botonPresionado(100, 400, 110, 40)) {
      estado = 3; 
      indiceTexto = 2;
    }
    if (botonPresionado(430, 400, 110, 40)) {
      estado = 4; 
      indiceTexto = 3;
    }
  }


  // pantalla 3
  if (estado === 3 && botonPresionado(520, 400, 110, 40)) {
    estado = 5; 
    indiceTexto = 4; 
    return;
    
  }
  //pantalla 5
  if (estado === 5 && botonPresionado(520, 400, 110, 40)) {
    estado = 6; 
    indiceTexto = 5; 
    return;
  }

  // Pantalla 6
  if (estado === 6) {
    if (botonPresionado(100, 400, 110, 40)) {
      estado = 7; //huir
      indiceTexto = 6;
    }
    if (botonPresionado(430, 400, 110, 40)) {
      estado = 8; //seguir investigando
      indiceTexto = 7; 
    }
  }

  // pantalla 8 juego
  if (estado === 8 && botonPresionado(520, 400, 110, 40)) {
    estado = 9; //ganaste por que no hay juego 
    indiceTexto = 8; 
    return;
  }



  // pantalla 4 el otro camino
  if (estado === 4 && botonPresionado(520, 400, 110, 40)) {
    estado = 11; 
    indiceTexto = 9;
    return;
  }

  // pantalla 11 bifurcacion
  if (estado === 11) {
    if (botonPresionado(100, 400, 110, 40)) {
      estado = 12; 
      indiceTexto = 10; 
    }
    if (botonPresionado(430, 400, 110, 40)) {
      estado = 13; 
      indiceTexto = 11; 
    }
  }



  // pantalla 13
  if (estado === 13 && botonPresionado(520, 400, 110, 40)) {
    estado = 14; 
    indiceTexto = 12; 
    return;
  }

 
 
  
   // condicion de reinicio en pantallas
  if ((estado === 7 || estado === 9 || estado === 12 || estado === 14) && botonPresionado(520, 400, 110, 40)) {
    estado = 0; 
    indiceTexto = 0;
  }
}
