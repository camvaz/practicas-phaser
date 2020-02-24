import { Scene } from 'phaser'

enum personajes {
  steam,
  grave,
  wood 
}

export default class PlayScene extends Scene {
  steamman: Phaser.GameObjects.Sprite
  woodcutter: Phaser.GameObjects.Sprite
  graverobber: Phaser.GameObjects.Sprite
  title: Phaser.GameObjects.Text
  seleccion: Phaser.GameObjects.Text
  dude:personajes
  teclaX: Phaser.Input.Keyboard.Key
  constructor() {
    super({ key: 'PlayScene' })
  }

  public create() {
    const eventos = Phaser.Input.Events
    const keycodes = Phaser.Input.Keyboard.KeyCodes
    this.teclaX = this.input.keyboard.addKey(keycodes.X)
    this.title = this.add.text(280,150,"Escoje tu personaje!")
    this.title = this.add.text(90,450,"Presiona X despues de seleccionar tu personaje para probar su ataque")
    this.seleccion = this.add.text(200,550,"Personaje seleccionado: ")
    this.seleccion.alpha = 0;
    this.steamman = this.add.sprite(150,250,'steamman',0).setScale(4)
    this.woodcutter = this.add.sprite(350,250,'woodcutter',0).setScale(4)
    this.graverobber = this.add.sprite(550,250,'graverobber',0).setScale(4)


    //=== Animaciones

    //Idles
    this.anims.create({
      key: 'woodidle',
      frames: this.anims.generateFrameNumbers('woodcutter',{
        start:0,
        end: 5
      }),
      repeat:-1,
      frameRate:60
    })
    this.anims.create({
      key: 'graveidle',
      frames: this.anims.generateFrameNumbers('graverobber',{
        start:0,
        end: 5
      }),
      repeat:-1,
      frameRate:60
    })
    this.anims.create({
      key: 'steamidle',
      frames: this.anims.generateFrameNumbers('steamman',{
        start:0,
        end: 5
      }),
      repeat:-1,
      frameRate:60
    })
    
    //Ataques
    this.anims.create({
      key: 'wood_atk',
      frames: this.anims.generateFrameNumbers('woodcutter_atk',{
        start:0,
        end: 5
      }),
      repeat:-1,
      frameRate:60
    })
    this.anims.create({
      key: 'grave_atk',
      frames: this.anims.generateFrameNumbers('graverobber_atk',{
        start:0,
        end: 5
      }),
      repeat:-1,
      frameRate:60
    })
    this.anims.create({
      key: 'steam_atk',
      frames: this.anims.generateFrameNumbers('steamman_atk',{
        start:0,
        end: 5
      }),
      repeat:-1,
      frameRate:60
    })


    //Seleccion
    this.input.on(eventos.POINTER_DOWN, (pointer: any,obj: any,dropzone: any) => {
      console.log(pointer.y)
      if(pointer.x >= 150 && pointer.x <= 250 &&
         pointer.y >= 220 && pointer.y <= 345){
        this.dude = personajes.steam
        this.steamman.anims.play('steamidle')
        this.woodcutter.anims.stop()
        this.graverobber.anims.stop()
        this.seleccion.setText("Personaje Seleccionado: Steam Man")
        this.seleccion.alpha=1
      }
      else if(pointer.x >=350 && pointer.x <= 450 &&
         pointer.y >= 220 && pointer.y <= 345){
           this.dude = personajes.wood
        this.woodcutter.anims.play('woodidle')
        this.graverobber.anims.stop()
        this.steamman.anims.stop()
        this.seleccion.setText("Personaje Seleccionado: Wood Cutter")
        this.seleccion.alpha=1
      }
      else if(pointer.x >=550 && pointer.x <= 650 &&
         pointer.y >= 220 && pointer.y <= 345){
           this.dude = personajes.grave
        this.graverobber.anims.play('graveidle')
        this.steamman.anims.stop()
        this.woodcutter.anims.stop()
        this.seleccion.setText("Personaje Seleccionado: Grave Robber")
        this.seleccion.alpha=1
      }
      else {
        this.seleccion.alpha=0
        this.steamman.anims.stop()
        this.woodcutter.anims.stop()
        this.graverobber.anims.stop()
      }
    })
    
    //Ataque
    this.teclaX.on('down', () => {
      if(this.dude === personajes.steam){
        this.steamman.destroy(true)
        this.steamman = this.add.sprite(150,250,'steamman_atk',0).setScale(4)
        this.steamman.anims.play('steam_atk')
        setTimeout(()=> {
          this.steamman.anims.stop()
        this.steamman.destroy(true)
          this.steamman = this.add.sprite(150,250,'steamman',0).setScale(4)
        }, 3000)
      }
      if(this.dude === personajes.wood){
        this.woodcutter.destroy(true)
        this.woodcutter = this.add.sprite(350,250,'woodcutter_atk',0).setScale(4)
        this.woodcutter.anims.play('wood_atk')
        setTimeout(()=> {
          this.woodcutter.anims.stop()
          this.woodcutter.destroy(true)
          this.woodcutter = this.add.sprite(350,250,'woodcutter',0).setScale(4)
        }, 3000)
      }
      if(this.dude === personajes.grave){
        this.graverobber.destroy(true)
        this.graverobber = this.add.sprite(550,250,'graverobber_atk',0).setScale(4)
        this.graverobber.anims.play('grave_atk')
        setTimeout(()=> {
          this.graverobber.anims.stop()
          this.graverobber.destroy(true)
          this.graverobber = this.add.sprite(550,250,'graverobber',0).setScale(4)
        }, 3000)
      }
    })
  }
}
