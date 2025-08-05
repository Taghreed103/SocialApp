import { createRoot } from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import App from './App.jsx'
import CounterContextProvider from './Context/Counter.context.jsx'   ; 
import AuthContextProvider from './Context/Auth.context.jsx';
import ThemeContextProvider from './Context/Theme.context.jsx';
createRoot(document.getElementById('root')).render(


   <ThemeContextProvider>

   <AuthContextProvider>

   <CounterContextProvider>
    
    <App />

    </CounterContextProvider>

   </AuthContextProvider>

   </ThemeContextProvider>
   
   
   
)
