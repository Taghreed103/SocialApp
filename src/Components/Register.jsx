import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterScheme } from "./lib/Register.scheme";
import Feedback from "./Feedback";
import { addUser } from "../Apis/Register.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {


const [error,setError]= useState("");
const [load,setLoad]= useState(false);
const navigate= useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterScheme),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },

    mode: "onSubmit",
  });

 async function onSubmit(data) {
  setLoad(true);
  
 try {

   const res = await addUser(data);
   if(res.message==="success"){

   console.log(res); 
   setLoad(false);
   setError("")
   navigate('/login')
    
   }

 } 
 
 catch (errors) {
   setLoad(false);
   setError(errors?.response?.data?.error);
  
 }


  }
  //  const name1= watch();
  // console.log(name1)

  return (
    <>
    <div   className="w-1/3 mx-auto my-5 text-white">  { error&&   <Feedback   msg={error} ></Feedback> }     </div>
      <div className="my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto shadow shadow-top shadow-gray-900 p-9 "
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="name"
              {...register("name")}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none
             dark:text-white dark:border-gray-600 dark:focus:border-purple-500-500 
             focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            
            />

         {errors.name&& <Feedback   msg={errors.name.message}></Feedback> }

            <label
              htmlFor="name"
              className="absolute left-0 text-lg text-left text-gray-500 duration-300 origin-left transform scale-75 -translate-y-6 peer-focus:font-medium dark:text-pink-700 top-3 -z-10 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="email"
              {...register("email")}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
          bg-transparent border-0 border-b-2 border-gray-300 appearance-none
           dark:text-white dark:border-gray-600 dark:focus:border-purple-500-500 
           focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            
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
              {...register("password")}
              autoComplete="off"
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

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              id="rePassword"
                {...register("rePassword")}

              autoComplete="off"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none
             dark:text-white dark:border-gray-600 dark:focus:border-purple-500-500 
             focus:outline-none focus:ring-0 focus:border-purple-600 peer"
           
            />
           {errors.rePassword&& <Feedback   msg={errors.rePassword.message}></Feedback> }

            <label
              htmlFor="rePassword"
              className="absolute left-0 text-lg text-left text-gray-500 duration-300 origin-left transform scale-75 -translate-y-6 peer-focus:font-medium dark:text-pink-700 top-3 -z-10 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              rePassword
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              id="dateOfBirth"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 
            bg-transparent border-0 border-b-2 border-gray-300 appearance-none
             dark:text-white dark:border-gray-600 dark:focus:border-purple-500-500 
             focus:outline-none focus:ring-0 focus:border-purple-600 peer"
               {...register("dateOfBirth")}

             
            />

          {errors.dateOfBirth&& <Feedback   msg={errors.dateOfBirth.message}></Feedback> }

            <label
              htmlFor="dateOfBirth"
              className="absolute left-0 text-lg text-left text-gray-500 duration-300 origin-left transform scale-75 -translate-y-6 peer-focus:font-medium dark:text-pink-700 top-3 -z-10 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              dateOfBirth
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="female"
              {...register("gender")}
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 accent-purple-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Female
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="default-radio-2"
              type="radio"
              value="male"
              {...register("gender")}
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 accent-purple-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Male
            </label>
          </div>
          {errors.gender&& <Feedback   msg={errors.gender.message}></Feedback> }

          <button className="btn">

           {load?<i   className="fa-solid fa-spin fa-spinner text-danger">  </i>:"Register"}
            
          </button>
        </form>
      </div>
    </>
  );
}
