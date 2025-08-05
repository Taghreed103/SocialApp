

import  axios  from  'axios'; 
export    async function  loginFun(dataForm){
    

  const   {data}=    await axios.post("https://linked-posts.routemisr.com/users/signin", dataForm);
   return  data; 

}