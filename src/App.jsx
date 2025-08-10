import './index.css';
import './App.css'  
import Layout from './Components/Layout';
import Register from './Components/Register' ;
import Login from './Components/Login';
import Home from './Components/Home';
import NotFound from './Components/NotFound' ;
import { useState } from 'react';
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute';
import PostDetails from './Components/PostDetails';
import Profile from './Components/Profile';
function App() {
 

  const [theme , setTheme] =  useState(localStorage.getItem("theme") ||   "light"   );

function toggle() {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}



  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout    toggle={toggle}   theme={theme}/>,
      children: [
         { path:"/login", element: <Login /> } ,
        { path: "/home", element:      <ProtectedRoute ><Home></Home></ProtectedRoute> },
        { path: "/posts/:id", element:  <ProtectedRoute ><PostDetails></PostDetails></ProtectedRoute> },
        { path: "/profile/:id", element:  <ProtectedRoute ><Profile></Profile></ProtectedRoute> },

        { path: "/register", element: <Register /> },
       { path:  "*" , element: <NotFound/> }

      ]
    }
  ])

  return (
    <>

          <RouterProvider          router={routes}></RouterProvider>
  
    </>
  )
}

export default App
