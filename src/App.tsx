import React from 'react'
import Game from './game/Game'
import TextInterface from './components/TextInterface'

// Debug logging
console.log('App component rendering...', {
  timestamp: new Date().toISOString(),
  component: 'App'
})

const App: React.FC = () => {
  console.log('App component rendering')
  
  return (
    <div className="app-container">
      <div className="game-container">
        <Game />
      </div>
      <div className="text-container">
        <TextInterface />
      </div>
    </div>
  )
}

export default App 