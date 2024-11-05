import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ShopContextProvider } from './context/ShopContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ShopContextProvider>
    {/* Add your app components here */}
    <App />
  </ShopContextProvider>
  </BrowserRouter>,
)
