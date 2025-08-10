import { useEffect } from "react";
import { createContext ,useState} from "react";
import { getUserData } from "../Apis/userdata.api";
 // eslint-disable-next-line react-refresh/only-export-components
 export    const  auth=  createContext(0);

      export default function   AuthContextProvider({children}){

        const[islogin,setIslogin]=useState(null) ;
        

        const [userData, setUserData] = useState(null);



      async  function    getUserDataFun(){

        const  res =  await  getUserData();

            setUserData(res.user); 
        }

        useEffect(    ()=> {
           
       if (localStorage.getItem("token"  )) {

          setIslogin(localStorage.getItem("token"));

          getUserDataFun()
       }


        },[]);

        return <auth.Provider   value={{islogin,setIslogin , userData}} >

           {children}

        </auth.Provider>




}