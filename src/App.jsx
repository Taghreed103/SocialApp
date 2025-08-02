import './index.css';
import './App.css'  
import Layout from './Components/Layout';
import Register from './Components/Register' ;
import Login from './Components/Login';
import Home from './Components/Home';
import NotFound from './Components/NotFound' ;
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
 

  const [theme , setTheme] =  useState(localStorage.getItem("theme") ||   "light"   );

function toggle() {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}



  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout    toggle={toggle}   theme={theme}/>,
      children: [
         { path:"/login", element: <Login /> } ,
        { path: "/home", element: <Home /> },
        { path: "/register", element: <Register /> },
       { path:  "*" , element: <NotFound/> }

      ]
    }
  ])

  return (
    <>
<div className={theme === "dark" ? "dark" : ""}>

          <RouterProvider          router={routes}></RouterProvider>
    
    </div>
    </>
  )
}

export default App
