import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Debug logging
console.log('Application starting...', {
  timestamp: new Date().toISOString(),
  environment: import.meta.env.MODE,
  version: import.meta.env.VITE_APP_VERSION || 'development'
})

const rootElement = document.getElementById('root')
console.log('Root element:', rootElement)

if (!rootElement) {
  console.error('Failed to find root element')
} else {
  const root = ReactDOM.createRoot(rootElement)
  console.log('React root created:', root)
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} 