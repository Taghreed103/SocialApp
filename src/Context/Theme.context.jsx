import { createContext, useState ,useEffect} from "react";


// eslint-disable-next-line react-refresh/only-export-components
export  const mode=  createContext(0);

export  default   function  ThemeContextProvider({children}){

     const [theme,setTheme]=useState("light");

      function  toggle() {
        if(theme==="light"){

            setTheme('dark')
            localStorage.setItem("theme" , "dark")
        }
        else{
            setTheme("light");
            localStorage.setItem("theme", "light")
        }
        
      }

          useEffect(    ()=> {
                
            if (localStorage.getItem("theme"  ) ==="dark") {
     
               setTheme("dark");
            }
     
     
             },[]);
     
             return <mode.Provider   value={{toggle,theme}} >
     
                {children}
     
             </mode.Provider>




}