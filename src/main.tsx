import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // ↓厳格モード(デバッグモード)useeffectが二回実行される
  <StrictMode>
    <App />
  </StrictMode>,
)
