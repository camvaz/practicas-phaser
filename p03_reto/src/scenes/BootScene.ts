import { Scene } from 'phaser'
import logo from '../assets/logo.png'
import kirby from '../assets/kirby-sprite.png'
import escenario from '../assets/scenario.gif'

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  public preload() {
    this.load.image('logo', logo)
    this.load.image('kirby', kirby)
    this.load.image('scenario', escenario)
  }

  public create() {
    this.scene.start('PlayScene')
  }

}
