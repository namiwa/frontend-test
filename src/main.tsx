import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './pages/root.tsx'
import './index.css'
import './fonts/Inter/static/Inter-Regular.ttf'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
