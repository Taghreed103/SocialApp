import React from 'react'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'
export default function Layout(  {toggle  , theme}) {
  return (

    <>
    <div   className="dark:bg-gray-400    dark:text-white     flex min-h-screen  flex-col  justify-between   items-center">

  <Navbar   toggle={toggle}   theme={theme}  ></Navbar>
    
<div className="container">
   <Outlet></Outlet>

</div>
<footer>..........</footer>

    </div>

  


    </>
  )
}
