import * as z from "zod";


  export  const  RegisterScheme= z.object({
    
name:z.string().nonempty("name  is required").min(2,"min length  is  2 char").max(10,"max length is 10  char "),
email: z.string ().nonempty("this email is required ").email("not valid ") ,
password:z.string().nonempty("this password is required ").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ ,"invalid password"),
rePassword:z.string().nonempty("this field is required"),
gender:z.enum(['female', 'male']),
dateOfBirth:z.coerce.string().nonempty("enter the date ")


}).refine(  data=>data.password===data.rePassword, {
    path:["rePassword"] ,
    message:"not the same"  
})