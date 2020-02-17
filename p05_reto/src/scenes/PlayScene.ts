import { Scene } from 'phaser'
const _ = require('lodash')

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
  turno: boolean
  winRules: number[][]
  gover: Phaser.GameObjects.Image
  restart: Phaser.GameObjects.Image

  constructor() {
    super({ key: 'PlayScene' })
  }

  public create() {
    // Constante de eventos Phaser
    const eventos = Phaser.Input.Events
    this.gover = this.add.image(400, 300, "gover").setScale(0.7)
    this.gover.setAlpha(0)
    this.restart = this.add.image(40, 560, "restart").setScale(0.3).setInteractive()
    
    this.turno = false

    this.winRules = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ]
    //Scores por simbolo:
    this.scoreCross = []
    this.scoreCircle = []

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
    // this.square.name = '20'
    this.square.name = '7'
    this.square.setDepth(-1)
    this.square.setInteractive()
    this.square.input.dropZone = true

    this.square2 = this.add.rectangle(320, 200, 120, 115, 0xd7e7d9)
    this.square2.setDepth(-1)
    this.square2.setInteractive()
    // this.square2.name = '10'
    this.square2.name = '4'
    this.square2.input.dropZone = true

    this.square3 = this.add.rectangle(320, 80, 120, 115, 0xd7e7d9)
    this.square3.setDepth(-1)
    this.square3.setInteractive()
    // this.square3.name = '00'
    this.square3.name = '1'
    this.square3.input.dropZone = true

    this.square4 = this.add.rectangle(450, 82, 140, 115, 0xd7e7d9)
    this.square4.setDepth(-1)
    this.square4.setInteractive()
    // this.square4.name = '01'
    this.square4.name = '2'
    this.square4.input.dropZone = true

    this.square5 = this.add.rectangle(450, 200, 140, 115, 0xd7e7d9)
    this.square5.setDepth(-1)
    this.square5.setInteractive()
    // this.square5.name = '11'
    this.square5.name = '5'
    this.square5.input.dropZone = true

    this.square6 = this.add.rectangle(450, 318, 140, 115, 0xd7e7d9)
    this.square6.setDepth(-1)
    this.square6.setInteractive()
    // this.square6.name = '21'
    this.square6.name = '8'
    this.square6.input.dropZone = true

    this.square7 = this.add.rectangle(580, 82, 120, 115, 0xd7e7d9)
    this.square7.setDepth(-1)
    this.square7.setInteractive()
    // this.square7.name = '02'
    this.square7.name = '3'
    this.square7.input.dropZone = true

    this.square8 = this.add.rectangle(580, 200, 120, 115, 0xd7e7d9)
    this.square8.setDepth(-1)
    this.square8.setInteractive()
    // this.square8.name = '12'
    this.square8.name = '6'
    this.square8.input.dropZone = true

    this.square9 = this.add.rectangle(580, 318, 120, 115, 0xd7e7d9)
    this.square9.setDepth(-1)
    this.square9.setInteractive()
    // this.square9.name = '22'
    this.square9.name = '9'
    this.square9.input.dropZone = true

    // Hacemos draggables las imagenes
    this.input.setDraggable(this.circles[0])
    this.input.setDraggable(this.cross[0])
    
    // Programamos evenots
    this.input.on(eventos.GAMEOBJECT_DOWN, (evento: any,gameobject:any) => {
      if(gameobject.texture.key === 'restart'){
        console.log('object')
        this.circles = []
        this.cross = []
        this.scoreCircle = []
        this.scoreCross = []
        this.game.scene.stop('PlayScene')
        this.game.scene.start('PlayScene')
      }
    })
    
    this.input.on(
      eventos.DRAG,
      (pointer: any, obj: any, dragX: any, dragY: any) => {
        obj.x = dragX
        obj.y = dragY
      }
    )

    this.input.on(eventos.DROP, (pointer: any, obj: any, dropzone: any) => {
      if (!dropzone) {
        obj.x = obj.input.dragStartX
        obj.y = obj.input.dragStartY
      } else {
        obj.x = dropzone.x
        obj.y = dropzone.y

        if (this.turno) {
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

            this.turno = !this.turno
            this.winCondition(this.scoreCross)
          } else {
            alert('Turno de cruz')

            obj.x = obj.input.dragStartX
            obj.y = obj.input.dragStartY
          }
        } else {
          if (obj.texture.key === 'circle') {
            this.scoreCircle.push(dropzone.name)
            this.circles.pop()
            this.circles.push(
              this.add
                .image(100, 100, 'circle')
                .setInteractive()
                .setScale(0.5, 0.5)
            )
            this.input.setDraggable(this.circles[0])
            this.turno = !this.turno
            this.winCondition(this.scoreCircle)
          } else {
            alert('Turno de circulo')

            obj.x = obj.input.dragStartX
            obj.y = obj.input.dragStartY
          }
        }
      }
    })
  }
  winCondition(arreglo: any[]) {
    let arrToInt = arreglo.map(i => parseInt(i))
    this.winRules.forEach(i => {
      if (_.intersection(arrToInt, i).length === 3) {
        this.scene.pause()
        this.gover.setAlpha(1)

        setTimeout(()=>{
        this.game.scene.stop('PlayScene')
          this.game.scene.start('PlayScene')
          this.gover.setAlpha(0)
        }, 1000)
      }
    })
  }
}
