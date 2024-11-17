class Sombra {
  constructor() {
    this.width = 10; // Ancho inicial de la sombra
    this.velocidad = 0.1; // Velocidad de crecimiento inicial
    this.imagen = loadImage('data/sombra.png'); 
  }


  mover() {
    // Incrementamos el ancho de la sombra usando la velocidad definida
    this.width += this.velocidad;
  }

  dibujar() {
    if (this.imagen) {
      image(this.imagen, 0, 0, this.width, height); // La imagen se expande horizontalmente
    } 
  }

  reiniciar() {
    // Restablecer el tamaño de la sombra
    this.width = 10;
  }
}
