class Bootloader extends Phaser.Scene {
  constructor() {
    super({
      key: "Bootloader" //Nombre interno o clave de referencia
    });
  }

  init() {
    console.log("Escena Bootloader");
  }
  preload() {
    this.load.path = "./assets/"; //Ruta de todas las imagenes
    this.load.image(["yoshi_fondo", "yoshi"]); //Arreglo de imagenes
  }
  create() {
    this.yoshi = this.add.image(100, 100, "yoshi"); //atributo
    const keyCodes = Phaser.Input.Keyboard.KeyCodes;
    // this.teclaA = this.input.keyboard.addKey(keyCodes.A);
    // this.teclas = this.input.keyboard.addKeys({
    //   arriba: keyCodes.UP,
    //   abajo: keyCodes.DOWN,
    //   s: keyCodes.S
    // });
    this.teclas = this.input.keyboard.addKeys("up, down, s");
    this.teclas.up.on("down", () => {
      console.log("Haz presionado la tecla ARRIBA");
    });
    this.teclas.down.on("down", () => {
      console.log("Haz presionado la tecla ABAJO");
    });
    this.teclas.s.on("down", () => {
      console.log("Haz presionado la tecla S");
    });
    // this.input.keyboard.on('keydown', (evento) => {
    //     // se muestra todo el evento
    //     console.log('Se ha presionado la tecla: ', evento);
    //     });
    // this.input.keyboard.on('keydown', (evento) =>{
    //     // se detecta exactamente la 'e' minúscula
    //     if( evento.key === 'e' )
    //     console.log('Se ha presionado la tecla e');
    //     });
    this.input.keyboard.on("keydown", evento => {
      // se detecta exactamente la 'e' minúscula
      if (evento.key === "e") console.log("Se ha presionado la tecla e");
    });
    this.input.keyboard.on("keydown", evento => {
      // se detecta exactamente la 'e' minúscula
      if (evento.key === "e") console.log("Se ha presionado la tecla e");
    });
    this.cursor = this.input.keyboard.createCursorKeys();
    console.log(this.cursor); // Para ver el contenido
    this.cursor.left.on("down", () => {
      console.log("Haz presionado la tecla IZQUIERDA");
    });
    this.combo = this.input.keyboard.createCombo(
      [keyCodes.DOWN, keyCodes.RIGHT],
      { resetOnMatch: true }
    );
    this.input.keyboard.on("keycombomatch", () => {
      console.log("El combo se ha ejecutado");
    });
  }
  update(time, delta) {
    if (this.cursor.left.isDown) {
      console.log("Haz presionado la tecla IZQUIERDA");
    }
    // this.yoshi.alpha = 0.2;
    // ESTA FUNCION CREA UN CICLO INFINITO
    // if (Phaser.Input.Keyboard.JustDown(this.teclaA)) {
    //   console.log("Haz presionado la tecla A");
    // }
    // if (Phaser.Input.Keyboard.JustUp(this.teclaA)) {
    //   console.log("Haz soltado la tecla A");
    // }
    // if( this.teclaA.isDown ){
    //     console.log('Haz presionado la tecla A');
    //     }
    //     if( this.teclaA.isUp ){
    //     console.log('Haz soltado la tecla A');
    //     }
  }
}

export default Bootloader;
