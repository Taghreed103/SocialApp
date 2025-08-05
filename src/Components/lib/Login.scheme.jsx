import * as z from "zod";


  export  const  LoginScheme= z.object({
    
email: z.string ().nonempty("this email is required ").email("not valid ") ,
password:z.string().nonempty("this password is required ").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , "invalid password") 

 

,


})