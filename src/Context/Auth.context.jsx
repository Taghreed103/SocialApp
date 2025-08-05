import { useEffect } from "react";
import { createContext ,useState} from "react";


 // eslint-disable-next-line react-refresh/only-export-components
 export    const  auth=  createContext(0);

      export default function   AuthContextProvider({children}){

        const[islogin,setIslogin]=useState(null) ;


        useEffect(    ()=> {
           
       if (localStorage.getItem("token"  )) {

          setIslogin(localStorage.getItem("token"));
       }


        },[]);

        return <auth.Provider   value={{islogin,setIslogin}} >

           {children}

        </auth.Provider>




}