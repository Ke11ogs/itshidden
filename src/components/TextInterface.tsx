import React, { useState } from 'react'

// Debug logging
console.log('TextInterface component initializing...', {
  timestamp: new Date().toISOString(),
  component: 'TextInterface'
})

const TextInterface: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([])

  // Debug logging for state changes
  React.useEffect(() => {
    console.log('TextInterface messages updated...', {
      timestamp: new Date().toISOString(),
      messageCount: messages.length
    })
  }, [messages])

  return (
    <div className="text-interface">
      <div className="message-log">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input 
          type="text" 
          placeholder="Enter command..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const input = e.currentTarget.value
              setMessages([...messages, `> ${input}`])
              e.currentTarget.value = ''
            }
          }}
        />
      </div>
    </div>
  )
}

export default TextInterface 