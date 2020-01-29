import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' })
  }

  public create() {
    const escenario = this.add.image(300,300,'scenario')
    const kirby = this.add.image(400,150, 'kirby').setScale(0.2);
    // const logo = this.add.image(400, 150, 'logo')

    // this.tweens.add({
    //   targets: logo,
    //   y: 450,
    //   duration: 2000,
    //   ease: 'Power2',
    //   yoyo: true,
    //   loop: -1,
    // })
    
  }

  public update(time:any,delta:any){
    // console.log(`time: ${time}`);
    // console.log(typeof(time))
    // console.log(`delta: ${delta}`)
    // console.log(typeof(delta))
  }
}
