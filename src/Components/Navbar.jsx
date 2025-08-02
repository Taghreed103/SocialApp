import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({toggle , theme}) {

const [isOpen, setIsOpen]=  useState(false);


   
function  isToggle() {
  setIsOpen(!isOpen)
  
};

  return (
<>
<nav className="bg-white border-gray-200   shadow-top  dark:bg-gray-900  w-full ">
  <div className="max-w-screen-xl flex flex-wrap   md:flex-nowrap       items-center justify-between mx-auto p-4">
   <Link   to={'/home'}   className="logo font-script text-3xl  text-purple-700  tracking-widest">
   <h2>Social </h2>
   </Link>
    <button  onClick={isToggle}    data-collapse-toggle="navbar-default" type="button" 
    className="  cursor-pointer    inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="   sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
       <div className={`${!isOpen&& "hidden"} w-full md:flex md:w-auto   justify-between items-center          `}   id="navbar-default">
             <ul className="font-medium flex            flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li >
          <Link    to={'/login'}  className="text-purple-600" >Login</Link>
        </li>
       
        <li>
          <Link    to={'/register'}  className="text-purple-600"  >Register</Link>
        </li>
       
             </ul>
       </div>
 <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox"  checked={theme==="dark"}         onChange={toggle}         value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
   peer-focus:ring-pink-600 dark:peer-focus:ring-pink-800 rounded-full peer
    dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
     peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]
      after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
       after:transition-all dark:border-gray-600 peer-checked:bg-pink-600 dark:peer-checked:bg-pink-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">


{theme==="dark"    ?
   <li   className=" fa-solid  text-purple-400  fa-sun "    > </li>
   
   :  <li   className=" fa-solid  text-purple-400  fa-moon "></li>
    }  
 


  </span>
       </label>
    </div>
 
</nav>



</>





)
}
