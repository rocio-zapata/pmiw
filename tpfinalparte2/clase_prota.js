class Prota {
  constructor() {
    this.ancho = 30;
    this.alturaOriginal = 80;
    this.alturaReducida = 30;
    this.posX = width / 2;
    this.posY = height - this.alturaReducida;
    
    this.estaSaltando = false;
    this.velocidadSalto = -8; // Esta afecta a la altura del salto
    this.gravedad = 0.5; // La velocidad con que cae
    this.velocidadY = 0;
    this.velocidadMovimientoX = 5;
     this.imagenes = [];

    for (let i = 0; i < 3; i++) {
      this.imagenes.push(loadImage('data/prota' + i + '.png')); 
    }
  }

  mover() {
    // Movimiento a los lados
    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.velocidadMovimientoX;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += this.velocidadMovimientoX;
    }

    // Salto
    if (keyIsDown(UP_ARROW) && !this.estaSaltando) {
      this.estaSaltando = true;
      this.velocidadY = this.velocidadSalto;
    }
    if (this.estaSaltando) {
      this.posY += this.velocidadY;
      this.velocidadY += this.gravedad;
      
      //chequeo si aterrizo
      if (this.posY >= height - this.alturaOriginal) {
        this.posY = height - this.alturaOriginal;
        this.estaSaltando = false;
      }
    }

    
    if (keyIsDown(DOWN_ARROW) && !this.estaSaltando) {
      this.altura = this.alturaReducida; // Reducimos la altura a la mitad si se presiona la flecha abajo
      this.posY = height - this.altura; // Ajustamos la posición posY para que se achique hacia abajo
    } else if (!this.estaSaltando) {
      this.altura = this.alturaOriginal; // Regresamos a la altura original
      this.posY = height - this.alturaOriginal; // reiniciamos posY para la altura completa
    }

    // Limitar el movimiento dentro de los bordes
    this.posX = constrain(this.posX, 0, width - this.ancho);
  }

  dibujar() {
    let imagenActual;
    if (this.estaSaltando) {
      imagenActual = this.imagenes[0]; // Imagen de salto
    } else if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {
      imagenActual = this.imagenes[1]; // Imagen de movimiento
    } else if (keyIsDown(DOWN_ARROW)) {
      imagenActual = this.imagenes[2]; // Imagen de agachado
    } else {
      imagenActual = this.imagenes[0]; // Imagen normal
    }

    // Dibujamos al personaje con la imagen seleccionada
    image(imagenActual, this.posX, this.posY, this.ancho, this.altura);
  }
  
  reiniciar() {
    // reinicio todas las propiedades a su valor inicial
    this.posX = width / 2;
    this.posY = height - this.alturaOriginal;
    this.altura = this.alturaOriginal;
    this.estaSaltando = false;
    this.velocidadY = 0;
  }
}
