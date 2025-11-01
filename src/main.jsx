import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { registerLicense } from '@syncfusion/ej2-base'

registerLicense(import.meta.env.VITE_SUYNCFUSION_LICENSE_KEY)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
