import Phaser from 'phaser';
import playerImg from '../../assets/player.png';

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot', active: true });
  }

  preload() {
    this.load.image('player', playerImg);
  }

  create() {
    this.player = this.physics.add.sprite(400, 550, 'player')
      .setCollideWorldBounds(true)
      .setImmovable(true);
  }

  update() {
    this.input.on('pointermove', (pointer) => {
      this.player.x = pointer.x;
    });
  }
}

export default Boot;
