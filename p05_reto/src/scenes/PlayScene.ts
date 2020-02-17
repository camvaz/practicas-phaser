import { Scene } from 'phaser'
const _ = require("lodash/fp")
export default class PlayScene extends Scene {
  circles: any
  cross: any
  linea1: Phaser.GameObjects.Line
  linea2: Phaser.GameObjects.Line
  linea3: Phaser.GameObjects.Line
  linea4: Phaser.GameObjects.Line
  square: Phaser.GameObjects.Rectangle
  square2: Phaser.GameObjects.Rectangle
  square3: Phaser.GameObjects.Rectangle
  square4: Phaser.GameObjects.Rectangle
  square5: Phaser.GameObjects.Rectangle
  square6: any
  square7: any
  square8: Phaser.GameObjects.Rectangle
  square9: Phaser.GameObjects.Rectangle
  scoreCircle: any[]
  scoreCross: any[]
  constructor() {
    super({ key: 'PlayScene' })
  }

  public create() {
    // Constante de eventos Phaser
    const eventos = Phaser.Input.Events
    console.log(_)
    //Scores por simbolo:
    this.scoreCross = []
    this.scoreCircle = []

    console.log(_)

    // DIBUJO DEL TABLERO:
    this.linea1 = this.add.line(260, 100, 260, 100, 260, 450, 0x000000)
    this.linea2 = this.add.line(190, 100, 190, 100, 190, 450, 0x000000)

    this.linea3 = this.add.line(225, 130, 225, 130, 600, 130, 0x000000)
    this.linea4 = this.add.line(225, 70, 225, 70, 600, 70, 0x000000)

    // Agregamos "fichas"
    this.circles = [
      this.add
        .image(100, 100, 'circle')
        .setInteractive()
        .setScale(0.5, 0.5),
    ]
    this.cross = [
      this.add
        .image(100, 200, 'cross')
        .setInteractive()
        .setScale(0.5, 0.5),
    ]

    this.square = this.add.rectangle(320, 318, 120, 115, 0xd7e7d9)
    this.square.name = "20"
    this.square.setDepth(-1)
    this.square.setInteractive()
    this.square.input.dropZone = true
   
    this.square2 = this.add.rectangle(320, 200, 120, 115, 0xd7e7d9)
    this.square2.setDepth(-1)
    this.square2.setInteractive()
    this.square2.name= "10"
    this.square2.input.dropZone = true

    this.square3 = this.add.rectangle(320, 80, 120, 115, 0xd7e7d9)
    this.square3.setDepth(-1)
    this.square3.setInteractive()
    this.square3.name= "00"
    this.square3.input.dropZone = true

    this.square4 = this.add.rectangle(450, 82, 140, 115, 0xd7e7d9)
    this.square4.setDepth(-1)
    this.square4.setInteractive()
    this.square4.name= "01"
    this.square4.input.dropZone = true

    this.square5 = this.add.rectangle(450, 200, 140, 115, 0xd7e7d9)
    this.square5.setDepth(-1)
    this.square5.setInteractive()
    this.square5.name= "11"
    this.square5.input.dropZone = true

    this.square6 = this.add.rectangle(450, 318, 140, 115, 0xd7e7d9)
    this.square6.setDepth(-1)
    this.square6.setInteractive()
    this.square6.name= "21"
    this.square6.input.dropZone = true

    this.square7 = this.add.rectangle(580, 82, 120, 115, 0xd7e7d9)
    this.square7.setDepth(-1)
    this.square7.setInteractive()
    this.square7.name= "02"
    this.square7.input.dropZone = true

    this.square8 = this.add.rectangle(580, 200, 120, 115, 0xd7e7d9)
    this.square8.setDepth(-1)
    this.square8.setInteractive()
    this.square8.name= "12"
    this.square8.input.dropZone = true

    this.square9 = this.add.rectangle(580, 318, 120, 115, 0xd7e7d9)
    this.square9.setDepth(-1)
    this.square9.setInteractive()
    this.square9.name= "22"
    this.square9.input.dropZone = true

    // Hacemos draggables las imagenes
    this.input.setDraggable(this.circles[0])
    this.input.setDraggable(this.cross[0])


    // Programamos evenots
    this.input.on(
      eventos.DRAG,
      (pointer: any, obj: any, dragX: any, dragY: any) => {
        obj.x = dragX
        obj.y = dragY
        console.log(obj.texture.key)
      }
    )
    this.input.on(eventos.DROP, (pointer: any, obj: any, dropzone: any) => {
      if (!dropzone) {
        obj.x = obj.input.dragStartX
        obj.y = obj.input.dragStartY
      } else {
        obj.x = dropzone.x
        obj.y = dropzone.y
        if (obj.texture.key === 'cross') {
          this.scoreCross.push(dropzone.name)
          this.cross.pop()
          this.cross.push(
            this.add
              .image(100, 200, 'cross')
              .setInteractive()
              .setScale(0.5, 0.5)
          )
          this.input.setDraggable(this.cross[0])
        } else {
          this.scoreCircle.push(dropzone.name)
          this.circles.pop()
          this.circles.push(
            this.add
              .image(100, 100, 'circle')
              .setInteractive()
              .setScale(0.5, 0.5)
          )
          this.input.setDraggable(this.circles[0])
        }
      }
    })
  }
  winCondition(arreglo: any[]){

  }
}
