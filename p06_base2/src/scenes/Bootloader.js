class Bootloader extends Phaser.Scene {
  constructor() {
    super({
      key: "Bootloader"
    });
  }

  init() {
    console.log("Escena Bootloader");
  }

  preload() {
    this.load.path = "./assets/";
    this.load.image(["yoshif", "yoshi"]);
    // this.load.spritesheet("tomato", "tomato/tomato.png", {
    //   frameWidth: 16,
    //   frameHeight: 25
    // });

 this.load.atlas('tomato', 'tomato_atlas/tomato.png',
 'tomato_atlas/tomato_atlas.json');
this.load.animation('tomatoAnim', 'tomato_atlas/tomato_anim.json');
    this.load.spritesheet(
      "tomato_spacing",
      "tomato_spacing/tomato_spacing.png",
      {
        frameWidth: 16,
        frameHeight: 25,
        margin: 1,
        spacing: 2
      }
    );
  }

  create() {
    this.tomato = this.add.sprite(100, 100, "tomato", 0).setScale(4);
    this.tomato_spacing = this.add
      .sprite(100, 200, "tomato_spacing", 0)
      .setScale(4);
      this.anims.create({
        // Nombre de la animación
        key: 'tomato_camina',
        // Se cargan los frames por números
        // NOTA: generateFrameNames() se
        // usa cuando ya existe un Atlas
        frames: this.anims.generateFrameNumbers('tomato_spacing', {
        start: 0,
        end: 7,
    }),
    repeat:-1
        }); 
    this.anims.create({
      // Nombre de la animación
      key: "tomato_walk",
      frames: this.anims.generateFrameNames('tomato', {
        prefix: 'tomato_animation_1_',
        start: 0,
        end: 7
        }),
      // Se cargan los frames por números
      // NOTA: generateFrameNames() se
      // usa cuando ya existe un Atlas

    //   frames: this.anims.generateFrameNumbers("tomato_spacing", {
    //     frames: [0, 1, 2, 3, 4, 5, 6, 7]
    //   }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.play('tomato_camina', this.tomato_spacing);
    this.tomato.anims.play('tomato_walk');
    // this.tomato.anims.play('tomato_walk');
    // this.tomato_spacing.anims.play("tomato_camina");
}

update(time, delta) {
    // console.log(this.anims.generateFrameNumbers('tomato_spacing', {
    //     start: 0,
    //     end: 7
    //     }));
  }
}

export default Bootloader;
