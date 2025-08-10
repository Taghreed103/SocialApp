import { createRoot } from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import App from './App.jsx'
import AuthContextProvider from './Context/Auth.context.jsx';
import ThemeContextProvider from './Context/Theme.context.jsx';
import { Toaster } from 'react-hot-toast';
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
   
  <Toaster position="top-center" />
  <ReactQueryDevtools initialIsOpen={true} />

   <ThemeContextProvider>

   <AuthContextProvider>

   
    
    <App />

  

   </AuthContextProvider>

   </ThemeContextProvider>
   
  </QueryClientProvider> 
   
)
