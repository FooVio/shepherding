import Phaser from 'phaser';
import Boot from './scenes/boot';
import Main from './scenes/main';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: [Boot, Main],
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
