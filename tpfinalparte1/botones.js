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
