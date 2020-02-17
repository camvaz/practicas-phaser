import { Scene } from 'phaser'
import logo from '../assets/logo.png'
import cross from '../assets/cross.svg'
import circle from '../assets/circle.svg'

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  public preload() {
    this.load.image('logo', logo)
    this.load.image('cross', cross)
    this.load.image('circle',circle)
  }

  public create() {
    this.scene.start('PlayScene')
  }
}
