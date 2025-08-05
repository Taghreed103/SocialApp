

import  axios  from  'axios'; 
export    async function  addUser(dataForm){
    

  const   {data}=    await axios.post("https://linked-posts.routemisr.com/users/signup", dataForm);
   return  data; 

}