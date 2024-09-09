import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import ToolList from './ToolList.jsx'
//import ToolForm from './ToolForm.jsx'
import './index.css'
import './custom.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
)
