
  //useRef  is  used   to  pointer  the  element as doc.getele by id
  //2 method  to  handle   data  in  form
  //controlled  ele <input> && uncontrolled
  //controled  use  (state  and   onchange )
  //un controlled  use  useref  to  pointer  to element and data  in inputs
  //useForm  react form   can handle  this  data بدل  ما اعمل  الداتا  وال keys كل شويه
  //npm install react-hook-form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form' 
import { Link ,useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { loginFun } from "../Apis/Login.api";
import {LoginScheme} from '../Components/lib/Login.scheme'
import Feedback from "./Feedback";
import { auth } from "../Context/Auth.context";
import Loading from "./Loading";
export default function Register() {
 
 const {setIslogin}= useContext(auth);
 

const [error,setError]= useState("");
const [load,setLoad]= useState(false);
const navigate= useNavigate();

  const {register , handleSubmit, formState:{errors} }= useForm ({
 resolver: zodResolver(LoginScheme),
    
   defaultValues:{
    name :" ",
    email :"",
    password:"",
    rePassword:"",
    dateOfBirth:"",
    gender:""
  
   },

mode:"onChange"
    
  })


  async function onSubmit(data) {
    setLoad(true);
    
   try {
  
     const res = await loginFun(data);
     console.log(res)
     if(res.message==="success"){
  
     console.log(res); 
     setLoad(false);
     setError("")
     navigate('/home')
     localStorage.setItem("token" , res.token);
      //res.token
     setIslogin(res.token);
     }
  
   } 
   
   catch (errors) {
     setLoad(false);
     setError(errors?.response?.data?.error);
    
   }
  
  
    }

  

  return (
    <>

    
      <div   className="w-1/3 mx-auto my-5 text-white">  { error&&   <Feedback   msg={error} ></Feedback> }     </div>
  
      <div className="my-10">
        <form 
          onSubmit={handleSubmit(onSubmit)}
        
        
        className="max-w-md mx-auto shadow shadow-top shadow-gray-900 p-9 ">
        
          <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="email"
            {...register("email")}
            className="block py-2.5 px-0 w-full text-lg text-gray-900 
          bg-transparent border-0 border-b-2 border-gray-300 appearance-none
           dark:text-white dark:border-gray-600 dark:focus:border-purple-500-500 
           focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=""
            required
          />
              {errors.email&& <Feedback   msg={errors.email.message}></Feedback> }
          
          
            <label
              htmlFor="email"
              className="absolute left-0 text-lg text-left text-gray-500 duration-300 origin-left transform scale-75 -translate-y-6 peer-focus:font-medium dark:text-pink-700 top-3 -z-10 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              email
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              id="password"
                {...register("password") }
             autoComplete='off'
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none
             dark:text-white dark:border-gray-600 dark:focus:border-purple-500-500 
             focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            
            />

          {errors.password&& <Feedback   msg={errors.password.message}></Feedback> }

            <label
              htmlFor="password"
              className="absolute left-0 text-lg text-left text-gray-500 duration-300 origin-left transform scale-75 -translate-y-6 peer-focus:font-medium dark:text-pink-700 top-3 -z-10 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              password
            </label>
          </div>

         

          <button className="btn">

   {load?<Loading></Loading>:"Login"}

            
          </button>

          <p   className='py-5'> Dont have  account <Link   to="/register"   className='font-bold text-pink-600'>Register      </Link>         </p>
        </form>
      </div>
    </>
  );
}
