import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Context/Auth.context";
import { useContext } from "react";
import { mode } from "../Context/Theme.context";
export default function Navbar() {


const{ islogin,setIslogin , userData} = useContext(auth)
  
const{toggle,theme} =useContext(mode)

 const navigate = useNavigate    

  


function  logout(){

  setIslogin(null);
  localStorage.remove("token");
  navigate("/")
}
  return (
<>
<nav className="w-full bg-white border-gray-200 shadow-top dark:bg-gray-900 ">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto md:flex-nowrap">
   <div  className="text-3xl tracking-widest text-purple-700 logo font-script">
   <h2>Social </h2>
   </div>
    <button      data-collapse-toggle="navbar-default" type="button" 
    className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg cursor-pointer md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only ">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
       <div className="items-center justify-between hidden w-full md:flex md:w-auto "  id="navbar-default">
             <ul className="flex flex-col items-center p-4 mt-4 font-medium border border-gray-10 md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


             {
             
             islogin? 
             <>
             
               <li>
                      <Link    to={'/home'}  className="text-purple-600"  >Home</Link>
               </li>
              <li >
                      <Link    to={'/logout'}  className="text-purple-600"   onClick={logout}>Logout</Link>
               </li>
              <Link  to={`/profile/${userData?._id}`}    className="flex items-center gap-4" >
      
                <span  className="p-5 ">{userData?.name}</span>
             
                <img src={userData?.photo} alt="profile" className="w-10 h-10 rounded-full" />
                
         
               
              </Link>
             </> 
             :
             <>
             
              <li>
          <Link    to={'/register'}  className="text-purple-600"  >Register</Link>
        </li>

       <li>
          <Link    to={'/login'}  className="text-purple-600 cursor-pointer"  >Login</Link>
        </li>
        
             
             
             </>
             
             } 
       
       
       
       
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
  <span className="text-sm font-medium text-gray-900 ms-3 dark:text-gray-300">
  {theme==="dark" ?    <li   className="text-purple-400 fa-solid fa-sun"    > </li> :   <li   className="text-purple-400 fa-solid fa-moon"></li>}

   
 
  
 


  </span>
       </label>
    </div>
 
</nav>



</>





)
}
