class Obstaculos {
  constructor() {
    this.ancho = 30; // ancho inicial de los obstaculos
    this.alturaBase = 30; // Altura base para obstaculos
    this.posiciones = []; // arrelgo para almacenar las posiciones de los obstaculos
    this.tiempoUltimaCreacion = 0; // control del tiempo para agregar obstaculos
    this.imagenes = []; //arreglo para almacenar las imagenes de los obstaculos

    // Cargar las imagenes 
    for (let i = 0; i < 2; i++) {
      this.imagenes.push(loadImage('data/obstaculo' + i + '.png'));
    }
  }

  mover() {
    for (let i = 0; i < this.posiciones.length; i++) {
      this.posiciones[i].x -= 2; // restamos 2 a la posicion del arreglo

      if (this.posiciones[i].x < -this.ancho) {
        this.posiciones.splice(i, 1); //elimina el obstaculo del arreglo si salio de la pantalla
      }
    }
  }

  agregarObstaculo() {
    if (millis() - this.tiempoUltimaCreacion > 2500) { //tiempo para cada obstaculo
      let nuevaX = width + random(40, 100);
      let imgAleatoria = int(random(0, this.imagenes.length)); // Seleccionar imagen aleatoria
      let altura = imgAleatoria === 1 ? 60 : this.alturaBase; // si el obstaculo es 1 entonces le damos una altura de 60 px sino es altura base
      let yPos = height - altura;

      
      this.posiciones.push({ x: nuevaX, y: yPos, imgAleatoria, altura, colisionado: false });//agregamos un nuevo obstaculos con estas propiedades y con su determinmada imagen
      this.tiempoUltimaCreacion = millis();
    }
  }

  dibujar() {
    for (let i = 0; i < this.posiciones.length; i++) {
      let obstaculo = this.posiciones[i]; // el obstaculo inicial
      let imgAleatoria = obstaculo.imgAleatoria; // indice exacto del obstaculo
      if (this.imagenes[imgAleatoria]) { // Dibujar la imagen correspondiente
        
        image(
          this.imagenes[imgAleatoria],
          obstaculo.x,
          obstaculo.y,
          this.ancho,
          obstaculo.altura // Usar la altura del obstaculo
        );
      }
    }
  }
}
