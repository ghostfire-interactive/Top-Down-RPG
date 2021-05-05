import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {

    this.levels = {
      1: 'level1',
      2: 'level2'
    }

 	  //load the level 1tilemap
 	  this.load.tilemapTiledJSON('level1', 'assets/tilemaps/level1.json');
    
    //load the level 2 tilemap
    
    this.load.tilemapTiledJSON('level2', 'assets/tilemaps/level2.json');
 	  
    //load in the full spritesheet
 	  this.load.spritesheet('RPGpack_sheet', 'assets/images/RPGpack_sheet.png', { frameWidth: 64, frameHeight: 64});
    
    //load the hero spritesheet
    this.load.spritesheet('characters', 'assets/images/roguelikeChar_transparent.png', { frameWidth: 17, frameHeight: 17});
    
    //load the portal sprite
    this.load.image('portal', 'assets/images/raft.png');

    //load in our coin sprite
    this.load.image('coin', 'assets/images/coin_01.png');

    //load in our bullet sprite
    this.load.image('bullet', 'assets/images/ballBlack_04.png');
  }

  create () {
    this.scene.start('Game', { level: 1, newGame: true, levels: this.levels });
  }

};