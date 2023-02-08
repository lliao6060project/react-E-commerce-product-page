import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/assets/css/tailwind.css'
import '@/assets/css/app.css'
// import 'maju-ui'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
