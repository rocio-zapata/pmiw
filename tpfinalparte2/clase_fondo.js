class Fondo {
 constructor() {
    this.imagenes = [];//arreglo de imagenes
    this.posiciones = []; //las posicionamos una atra de otra
    this.velocidad = 2; 

    
    for (let i = 0; i < 3; i++) { 
      this.imagenes.push(loadImage('data/fondo' +i+'.png'));
      this.posiciones.push(i * width);
    }
  }

  mover() {
    for (let i = 0; i < this.imagenes.length; i++) {
      this.posiciones[i] -= this.velocidad;
      if (this.posiciones[i] <= -width) {
        this.posiciones[i] = width * (this.imagenes.length - 1);
      }
    }
  }

  dibujar() {
    for (let i = 0; i < this.imagenes.length; i++) {
      image(this.imagenes[i], this.posiciones[i], 0, width, height);
    }
  }

  reiniciar() {
    for (let i = 0; i < 3; i++) { 
      this.posiciones[i] = i * width;
    }
  }
}
