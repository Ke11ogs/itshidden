import React, { useEffect, useRef } from 'react'
import Phaser from 'phaser'

// Debug logging
console.log('Game component initializing...', {
  timestamp: new Date().toISOString(),
  component: 'Game',
  phaserVersion: Phaser.VERSION
})

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' })
  }

  preload() {
    console.log('Game scene preloading...', {
      timestamp: new Date().toISOString(),
      scene: 'main'
    })
  }

  create() {
    console.log('Game scene created...', {
      timestamp: new Date().toISOString(),
      scene: 'main'
    })

    // Add a simple test rectangle
    this.add.rectangle(400, 300, 100, 100, 0x00ff00)
    
    // Add some debug text
    this.add.text(400, 300, 'Phaser is working!', {
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5)
  }
}

const Game: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null)

  useEffect(() => {
    if (!gameRef.current) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: '#2d2d2d',
        scene: MainScene,
        parent: 'game-container'
      }

      gameRef.current = new Phaser.Game(config)
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true)
        gameRef.current = null
      }
    }
  }, [])

  return <div id="game-container" />
}

export default Game 