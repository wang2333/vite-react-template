import { createRoot } from 'react-dom/client'

import App from './App'

import './styles/index.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

console.table(import.meta.env)

createRoot(document.getElementById('root')!).render(<App />)
