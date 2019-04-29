import Phaser from 'phaser';
import playerImg from '../../assets/player.png';

class Main extends Phaser.Scene {
  constructor() {
    super({ key: 'Main', active: false });
  }

  preload() {
    this.load.image('player', playerImg);
  }

  create() {
    this.player = this.physics.add.sprite(400, 550, 'player')
      .setCollideWorldBounds(true)
      .setImmovable(true);

    this.helloText = this.add.text(400, 300, 'Hello! :)', {
      fontSize: '50px',
      fontFamily: 'Audiowide',
      color: '#FFFFFF',
    }).setOrigin(0.5, 0.5);
  }

  update() {
    this.input.on('pointermove', (pointer) => {
      this.player.x = pointer.x;
    });
  }
}

export default Main;
