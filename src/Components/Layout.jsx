import React, { useContext } from 'react'
import Navbar from './Navbar'
import { mode } from '../Context/Theme.context';
import { Outlet } from 'react-router-dom'
export default function Layout( ) {
    const {theme}=useContext(mode);
  return (

    <>
    <div   className={` ${theme==="dark" && "dark"}      flex flex-col items-center justify-between
     min-h-screen dark:bg-gray-400 dark:text-white`}>

  <Navbar  ></Navbar>
    
<div className="container">
   <Outlet></Outlet>

</div>
<footer>..........</footer>

    </div>

  


    </>
  )
}
