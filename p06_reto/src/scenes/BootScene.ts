import { Scene } from 'phaser'
import woodcutter from '../assets/1 Woodcutter/Woodcutter_idle.png'
import graverobber from '../assets/2 GraveRobber/GraveRobber_idle.png'
import steamman from '../assets/3 SteamMan/SteamMan_idle.png'

import woodcutter_attack from '../assets/1 Woodcutter/woodcutter_attack1.png'
import graverobber_attack from '../assets/2 GraveRobber/graverobber_attack1.png'
import steamman_attack from '../assets/3 SteamMan/steamman_attack1.png'

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' })
  }

  public preload() {
    this.load.spritesheet("woodcutter_atk", woodcutter_attack,{
      frameWidth:24,
      frameHeight:48
    })
    this.load.spritesheet("graverobber_atk", graverobber_attack,{
      frameWidth:24,
      frameHeight:48
    })
    this.load.spritesheet("steamman_atk", steamman_attack,{
      frameWidth:24,
      frameHeight:48
    })
    this.load.spritesheet("woodcutter", woodcutter,{
      frameWidth:24,
      frameHeight:48
    })
    this.load.spritesheet("graverobber", graverobber,{
      frameWidth:25,
      frameHeight:48,
    })
    this.load.spritesheet("steamman", steamman,{
      frameWidth:25,
      frameHeight:48
    })
  }

  public create() {
    this.scene.start('PlayScene')
  }
}
