import { createRoot } from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import App from './App.jsx'
import CounterContextProvider from './Context/Counter.context.jsx'   ; 
import AuthContextProvider from './Context/Auth.context.jsx';
import ThemeContextProvider from './Context/Theme.context.jsx';

import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false, // Prevent refetching on window focus
//       retry: false, // Disable retries on failure
//     },
//   }
}

)

createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />

   <ThemeContextProvider>

   <AuthContextProvider>

   <CounterContextProvider>
    
    <App />

    </CounterContextProvider>

   </AuthContextProvider>

   </ThemeContextProvider>
   
  </QueryClientProvider> 
   
)
