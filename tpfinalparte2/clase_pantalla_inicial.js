class Boton {

  constructor(bx, by, ancho, alto) {
    this.bx = bx;
    this.by = by;
    this.ancho = ancho;
    this.alto = alto;
  }


  botonDibujar(texto) {
    textAlign(CENTER, CENTER);
    textSize(25);
    this.texto = texto;
    fill(0, 0, 255);
    rect(this.bx, this.by, this.ancho, this.alto);
    fill(255);
    text(this.texto, this.bx+this.ancho/2, this.by+this.alto/2);
  }

  botonPresionado() {
    return mouseX>this.bx && mouseX<this.bx+this.ancho && mouseY>this.by && mouseY<this.by+this.alto;
  }
}

//--------------------------------------->

class PantallaInicio {
  constructor(pantallaPrincipal) {
    this.pantallaPrincipal = pantallaPrincipal; 
    this.imagen = loadImage('data/fondoIni.jpg'); 
    this.botonJugar = new Boton(width / 2 - 100, height / 2, 200, 60); 
    this.botonCredito = new Boton(480, 400, 120, 60);  
  }

  mostrar() {
    image(this.imagen, 0, 0, width, height);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Escapando de la Oscuridad", width / 2, height / 2 - 100); 
    //botones
    this.botonJugar.botonDibujar("Jugar");
    this.botonCredito.botonDibujar("Creditos");
  }

  mousePressed() {
    
    if (this.botonJugar.botonPresionado()) {
      this.pantallaPrincipal.estadoPantalla = 1; 
    } 
   
    else if (this.botonCredito.botonPresionado()) {
      this.pantallaPrincipal.estadoPantalla = 3; 
    }
  }
}


//--------------------------------------->

class PantallaInstrucciones {
  constructor(pantallaPrincipal) {
    this.pantallaPrincipal = pantallaPrincipal; 
    this.botonListo = new Boton(width / 2 - 100, height / 2 + 50, 200, 60); 
  }

  mostrar() {
    background(220);
    textSize(20);
    textAlign(CENTER, TOP);
    fill(0);
    text("Instrucciones del Juego: \n Sobrevive 50 segundos \nSalta con la flecha hacia arriba ↑ \n agachate con la flecha hacia abajo ↓ \n muevete hacia los lados con las flechas  ← →\n Evita que la oscuridad te consuma \n  por cada obstaculo que toque ella crecera mas rapido \n y te reducira la velocidad \n  las lamparas la unica forma de esquivarlas es agachandote \n y las mesas saltandolas .", width / 2, 20);

    
    this.botonListo.botonDibujar("Listo");
  }

  mousePressed() {
   
    if (this.botonListo.botonPresionado()) {
      this.pantallaPrincipal.estadoPantalla = 2;  // Cambiar a la pantalla del juego
    }
  }
}


//--------------------------------------->


class Creditos {
  constructor(pantallaPrincipal) {
    this.pantallaPrincipal = pantallaPrincipal;  
    this.yPos = height;  // Comienza desde la parte inferior de la pantalla
    this.texto = "Hecho por: \n Salvatierra Braian \n Zapata Rocio \n Comision 1  \n Docente:Jose Bugiolachi \n Fernando Cardos"
    this.botonListo = new Boton(width / 2 - 100, height - 80, 200, 60); 
  }

  mostrar() {
    background(10);
    push();
    textSize(32);
    textAlign(CENTER ,CENTER);
    fill(255);
    // Mostrar el texto de los créditos
    text(this.texto, width / 2, this.yPos);

   
    if (this.yPos > 50) {
      this.yPos -= 2;  // Velocidad de movimiento
    }
    pop();

    this.botonListo.botonDibujar("Listo");
  }
  
  mousePressed() {
    
    if (this.botonListo.botonPresionado()) {
      this.pantallaPrincipal.estadoPantalla = 0;  // Regresar a la pantalla de inicio
    }
  }
}


//--------------------------------------->
class PantallaPrincipal {
  constructor() {
    this.estadoPantalla = 0; 
    this.pantallaInicio = new PantallaInicio(this); //this pantalla principal dentro de la clase para ultilizar cel paso de pantalla
    this.creditos = new Creditos(this);  
    this.pantallaInstrucciones = new PantallaInstrucciones(this); 
    this.juego = new Juego();
  }

  mostrar() {
    if (this.estadoPantalla === 0) {
      // Pantalla de inicio
      this.pantallaInicio.mostrar();
    } else if (this.estadoPantalla === 1) {
      // Pantalla de instrucciones
      this.pantallaInstrucciones.mostrar();
    } else if (this.estadoPantalla === 2) {
      // Juego
      this.juego.mostrar();
      this.juego.mover();
    } else if (this.estadoPantalla === 3) {
      // Creditos
      this.creditos.mostrar();
    }
  }

  mousePressed() {
    if (this.estadoPantalla === 0) {
      this.pantallaInicio.mousePressed();  // Verificamos si se presionó el botón en la pantalla de inicio
    } else if (this.estadoPantalla === 1) {
      this.pantallaInstrucciones.mousePressed();  // Verificamos si se presionó el botón en la pantalla de instrucciones
    } else if (this.estadoPantalla === 2) {
      this.juego.mousePressed();
    } else if (this.estadoPantalla === 3) {
      this.creditos.mousePressed();
    }
  }
}
