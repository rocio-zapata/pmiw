class Juego {
  constructor() {
    this.fondo = new Fondo();
    this.prota = new Prota();
    this.obstaculos = new Obstaculos();
    this.sombra = new Sombra();
    this.perdio = false; // si perdio
    this.gano = false;  // si gano
    this.tiempoLimite = 50; // duracion del juego
  
   this.tiempoRestante = this.tiempoLimite; //controlador
    this.botonJuego = new Boton(width / 2 - 50, height / 2 + 20, 100, 40);
  }

  mover() {
    if (!this.perdio && !this.gano) {
    
      this.fondo.mover();
      this.prota.mover();
      this.obstaculos.mover();
      this.sombra.mover();
      this.obstaculos.agregarObstaculo();      
      this.colisiones();
      this.temporizador();
    }
  }

  mostrar() {
    this.fondo.dibujar();
    this.prota.dibujar();
    this.obstaculos.dibujar();
    this.sombra.dibujar();

    // Si perdio, mostrar pantalla de "Perdiste"
    if (this.perdio) {
      this.mostrarPantallaPerdiste();
    } else if (this.gano) {
      // Si gano, mostrar pantalla de "Ganaste"
      this.mostrarPantallaGanaste();
    }
  }

  colisiones() {
    for (let i = 0; i < this.obstaculos.posiciones.length; i++) {
      let obstaculo = this.obstaculos.posiciones[i];

      
      let alturaSuperior = obstaculo.altura / 2; // Calcular la mitad arriba del obstaculo (si es el obstaculo 1)
      let ySuperior = obstaculo.y;  // colision con la parte superior del obstáculo

      // verificar la colision del prota con el obstaculo
      if (
        this.prota.posX < obstaculo.x + this.obstaculos.ancho &&
        this.prota.posX + this.prota.ancho > obstaculo.x &&
        this.prota.posY < ySuperior + alturaSuperior &&  // Solo detectar la mitad superior
        this.prota.posY + this.prota.altura > ySuperior
      ) {
        // Solo reducir la velocidad si no se ha tocado ya este obstaculo
        if (!obstaculo.colisionado) {
          this.prota.velocidadMovimientoX = max(this.prota.velocidadMovimientoX - 2, 1);  // Reducir velocidad max 1
          this.sombra.width += 50;  // Incrementar tamaño de la sombra
          obstaculo.colisionado = true;  // toco 
        }
      }
    }

    // si el prota toca la sombra
    if (this.prota.posX < this.sombra.width) {
      this.perdio = true;
    }
  }

  
  mostrarPantallaPerdiste() {
    background(200, 0, 0, 150);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Perdiste", width / 2, height / 2 - 50);
    this.botonJuego.botonDibujar("Reiniciar");
  }

  // Mostrar pantalla de "Ganaste"
  mostrarPantallaGanaste() {
    background(0, 200, 0, 150); // fondo con tranpariencia
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Ganaste", width / 2, height / 2 - 50);
    this.botonJuego.botonDibujar("Inicio");
  }

  //temporizador
  temporizador() {
    if (this.tiempoRestante > 0) {
      this.tiempoRestante -= 1 / frameRate(); // restar tiempo
    } else if (!this.perdio) {
      // si se acabo el tiempo gana
      this.gano = true;
    }
  }

  reiniciarJuego() {
    this.fondo = new Fondo();
    this.prota = new Prota();
    this.obstaculos = new Obstaculos();
    this.sombra = new Sombra();
    this.perdio = false;
    this.gano = false;
    this.tiempoRestante = this.tiempoLimite; // restablecer el temporizador
  }

 
mousePressed() {
  // Verifica si se presionó el boton "Reiniciar" o "Inicio" dependiendo del estado
  if (this.botonJuego.botonPresionado()) {
    if (this.perdio) {
      // Si el jugador perdio, reiniciar el juego 
      this.reiniciarJuego();
      estadoPantalla = 2; 
    } else if (this.gano) {
      // Si el jugador gano, solo cambiar al estado 0
      estadoPantalla = 0; 
    }
  }
}

}
