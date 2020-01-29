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
    this.yoshif = this.add.image(100, 100, "yoshi_fondo"); //atributo
    this.yoshi = this.add.image(100, 100, "yoshi"); //atributo
    const keyCodes = Phaser.Input.Keyboard.KeyCodes;
    this.spacebar = this.input.keyboard.addKey(keyCodes.SPACE);
    this.shift = this.input.keyboard.addKey(keyCodes.SHIFT);
    this.cursor = this.input.keyboard.createCursorKeys();
    this.combo = this.input.keyboard.createCombo(
      [keyCodes.Z, keyCodes.X, keyCodes.C],
      { resetOnMatch: true }
    );

    this.input.keyboard.on("keycombomatch", () => {
      this.yoshi.setTint('0xff0000');
      this.yoshif.setTint('0x0000ff');
      setInterval(()=>{
        this.yoshif.setTint('0xffffff');
        this.yoshi.setTint('0xffffff');
      }, 500)
    });
  }
  update(time, delta) {

    if( this.shift.isDown ){
      this.yoshif.alpha-=0.1;
    }
    if( this.shift.isUp ){
      this.yoshif.alpha=1;
    }
    if( this.spacebar.isDown ){
      this.yoshi.alpha-=0.1;
    }

    if( this.spacebar.isUp ){
      this.yoshi.alpha=1;
    }
    if (this.cursor.left.isDown) {
      this.yoshi.x -= 2;
      this.yoshif.x -= 2;
    }

    if (this.cursor.right.isDown) {
      this.yoshi.x += 2;
      this.yoshif.x += 2;
    }

    if (this.cursor.up.isDown) {
      this.yoshi.y -= 2;
      this.yoshif.y -= 2;
    }

    if (this.cursor.down.isDown) {
      this.yoshi.y += 2;
      this.yoshif.y += 2;
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
