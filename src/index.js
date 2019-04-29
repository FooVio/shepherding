import Phaser from 'phaser';
import Boot from './scenes/boot';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: [Boot],
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars

