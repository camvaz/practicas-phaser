class Bootloader extends Phaser.Scene {
  constructor() {
    super({
      key: "Bootloader" //Nombre interno o clave de referencia
    });
    this.movement = 1;
  }

  init() {
    console.log("Soy init");
  }
  preload() {
    this.load.path = "./assets/"; //Ruta de todas las imagenes
    this.load.image("scenario", "scenario.jpg"); //alias y archivo
    this.load.image("metroid-sprite", "metroid-sprite.gif"); //alias y archivo
    this.load.image("enemy", "enemy.png"); //alias y archivo
    this.load.image("metroid-static", "metroid-static.jpg"); //alias y archivo
    // this.load.image("yoshi_fondo"); //Sin nombre de archivo, se toma por
    // //defecto el nombre del alias
    // this.load.image(["scenario","metroid-sprite", "metroid-static" ]); //Arreglo de imágenes
  }
  create() {
    this.scenario = this.add.image(1024, 768, "scenario"); //atributo
    this.metroid = this.add.sprite(1000, 300, "metroid-sprite").setScale(0.5); //atributo
    this.enemy = this.add.sprite(400, 200, "enemy").setScale(0.5); //atributo
  }
  update(time, delta) {
    if(this.metroid.x !== 924){
      this.moveleft()
    }
    if(this.metroid.x === 924){
      this.jump(20, 30)
      this.moveleft();
    }

    if(this.metroid.x === 850){
      this.jump(10, 30)
      this.moveleft();
    }
    
    if(this.metroid.x === 470){
      this.jump(10,30);
      this.moveleft();
    }

    if(this.metroid.x === 380){
      this.metroid.y += 60;
      this.moveleft();
    }

    if(this.enemy.x === 450){
      this.movement = -1
    }
    if(this.enemy.x === 400) {
      this.movement = 1;
    }
    this.enemy.x += this.movement;
    
    // this.jump(); 
    // if (this.yoshif.x === 350) {
    //   this.yoshif.flipX = true;
    //   this.movement = -1;
    // }
    // if (this.yoshif.x === 100) {
    //   this.yoshif.flipX = false;
    //   this.movement = 1;
    // }

    // this.yoshif.x += this.movement;

    //  this.yoshi.flipX = true; //Voltear imagen en horizontalmente.
    //  this.yoshi.flipY = true; //Voltear imagen en verticalmente.
    //   this.yoshi.setVisible(true); //Mostrar u ocultar la imagen.
    //   this.yoshi.setScale(0.5, 0.5); //Escalar la imagen.
    //   this.yoshi.setAlpha(1); //Transparencia y opacidad [0,1]
    //   this.yoshi.setTint(0xfffff); //Entintar de un color la imagen.
    //   this.yoshi.x = 0; //Posición en X en el canvas
    //   this.yoshi.y = 0.5; //Posición en Y en el canvas
    //   this.yoshi.angle = 20; //Giro en el eje Z
    //   this.yoshi.rotation = 55; //Giro en el eje Z
    //   this.yoshi.setDepth(1); //Número de capa (la primera es 0)
    // ESTA FUNCION CREA UN CICLO INFINITO
  }
  moveleft(){
    this.metroid.x -=2; 
    console.log(this.metroid.x)
  }
  jump(timeout,distance) {
    for(let i = 0; i < distance;++i){
setTimeout(()=>{
  this.metroid.y -= 2;
},timeout)
    }
    // setTimeout(()=>{
    //   this.metroid.y += 20;
    // },20);
  }
  enemyMovementRight(){
    this.enemy.x +=1;
  }

  enemyMovementLeft(){
    this.enemy.x -=1;
  }
  // right() {
  //   this.yoshif.x += 1;
  //   console.log(this.yoshif.x);
  // }
}
export default Bootloader;
