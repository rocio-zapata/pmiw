function dibujarBoton(x, y, w, h, texto) {
 if(botonPresionado(x, y, w, h)){
  fill(50, 230, 12);
 } else{
  
   fill(10,10,10);
 }
  rect(x, y, w, h, h/4);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
}

function botonPresionado(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
//ASI LIMPIAMOS EL DRAW UNA FUNCION SI PARAMETROS :(
function dibujarPantallas(){
   fill(255); // color del texto
  image(imagenes[estado], 0, 0);
  textAlign(LEFT, TOP); 

    //pantalla de juego
  if (estado === 8) { 
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Jugar");
  }
  
  //Pantalla de ganaste 
  if (estado === 9) { 
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Reiniciar");
  }


  //Pantalla 12
  if (estado === 12) { 
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Reiniciar");
    
  }

  //Pantalla del otro camino
  if (estado === 11) {
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(100, 400, 110, 40, "La perdonas");
    dibujarBoton(430, 400, 110, 40, "La encierras");
  }

  //Pantalla 13
  if (estado === 13) {
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Siguiente");
  }
  
   if (estado === 14) { 
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Reiniciar");
    
  }
  // creditos
    if (estado === 15) { 
    creditos(); // dibujo los creditos en movimiento
    dibujarBoton(520, 400, 110, 40, "Atras");
  } else {
    // reiniciamos la posicion a 450 
    yPos = 450;
  }

  // Pantalla 7
  if (estado === 7) {
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Reiniciar");
  }

  // pantalla 6
  if (estado === 6) { 
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(100, 400, 110, 40, "Huir");
    dibujarBoton(430, 400, 110, 40, "Seguir");
  }
  
  // pantalla 5
  if (estado === 5) { 
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Siguiente");
  }
  
   if (estado === 4) {
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Siguiente");
  }
  
  if (estado === 3) { 
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Siguiente");
  }

  if (estado === 2) { 
    text(textos[indiceTexto], 20, 20, 600, 400);
    dibujarBoton(100, 400, 110, 40, "Se quedan");
    dibujarBoton(430, 400, 110, 40, "Se van");
  }

  if (estado === 1) {
    text(textos[indiceTexto], 20, 20, 600, 400); 
    dibujarBoton(520, 400, 110, 40, "Siguiente");
    
    if (!sonido.isPlaying()) {
      sonido.loop(); // Reproduce el sonido en bucle si no está sonando
    }
  }

  if (estado === 0) {
    dibujarBoton(520, 10, 110, 40, "Creditos");
    dibujarBoton(270, 300, 110, 40, "Empezar");
    sonido.stop();
  }

}
