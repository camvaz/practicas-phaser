import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  cursor: Phaser.Input.Keyboard.CursorKeys;
  kirby: Phaser.GameObjects.Image;
  enemy: Phaser.GameObjects.Image;
  enemy2: Phaser.GameObjects.Image;
  enemy3: Phaser.GameObjects.Image;
  gover: Phaser.GameObjects.Image;
  constructor() {
    super({ key: 'PlayScene' });
  }

  public create() {
    const escenario = this.add.image(300, 300, 'scenario')
    this.kirby = this.add.image(30, 290, 'kirby').setScale(0.1)
    this.enemy = this.add
      .image(150, 0, 'kirby')
      .setScale(0.1)
      .setTint(0x721bff)

    this.enemy2 = this.add
      .image(250, 0, 'kirby')
      .setScale(0.1)
      .setTint(0x721bff)

    this.enemy3 = this.add
      .image(250, 600, 'kirby')
      .setScale(0.1)
      .setTint(0x721bff)

    this.gover = this.add.image(300,300,'gover');
    this.gover.alpha=0;

    this.tweens.add({
      targets:this.enemy,
      y: 600,
      duration:1000,
      ease: 'Linear',
      yoyo:true,
      loop: -1
    })

    this.tweens.add({
      targets:this.enemy2,
      y: 300,
      duration:1000,
      ease: 'Linear',
      yoyo:true,
      loop: -1
    })

    this.tweens.add({
      targets:this.enemy3,
      y: 320,
      duration:1000,
      ease: 'Linear',
      yoyo:true,
      loop: -1
    })
    this.cursor = this.input.keyboard.createCursorKeys();

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

  public update(time: any, delta: any) {
    if (this.gameover() && this.cursor.left.isDown) {
      this.kirby.x -= 2;
    }

    if (this.gameover() && this.cursor.right.isDown) {
      this.kirby.x += 2;
    }

    if (this.gameover() && this.cursor.up.isDown) {
      this.kirby.y -= 2;
    }

    if(this.gameover() && this.cursor.down.isDown){
      this.kirby.y += 2;
    }
   
    
    // console.log(`time: ${time}`);
    // console.log(typeof(time))
    // console.log(`delta: ${delta}`)
    // console.log(typeof(delta))
  }
  public gameover(){

    let distance1 = Math.sqrt(Math.pow(this.kirby.x - this.enemy.x,2) + 
                             Math.pow(this.kirby.y - this.enemy.y,2));

    let distance2 = Math.sqrt(Math.pow(this.kirby.x - this.enemy2.x,2) + 
                             Math.pow(this.kirby.y - this.enemy2.y,2));

    let distance3 = Math.sqrt(Math.pow(this.kirby.x - this.enemy3.x,2) + 
                             Math.pow(this.kirby.y - this.enemy3.y,2));
    
    if(distance1 <= 30 || distance2 <= 30 || distance3 <= 30){
      this.gover.alpha = 1;
      this.scene.pause()
      return false;
    }
    return true;
  }
}
