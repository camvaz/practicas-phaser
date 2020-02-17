import { Scene } from 'phaser'
import logo from '../assets/logo.png'
import cross from '../assets/cross.svg'
import circle from '../assets/circle.svg'
import gover from '../assets/gover.png'
import restart from '../assets/restart.svg'

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  public preload() {
    this.load.image('logo', logo)
    this.load.image('cross', cross)
    this.load.image('circle',circle)
    this.load.image('gover', gover)
    this.load.image('restart',restart)
  }

  public create() {
    this.scene.start('PlayScene')
  }
}
