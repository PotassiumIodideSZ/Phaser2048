import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import { GameSceneClass } from './scene/GameScene'

class Phaser2048 extends Component {
  state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.CANVAS,
      scene: GameSceneClass
    }
  }

  render() {
    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    )
  }
}

export default Phaser2048;
