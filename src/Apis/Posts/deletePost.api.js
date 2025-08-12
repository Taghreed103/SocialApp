import axios from "axios";

export  async function DeletePost(userId){
 const token = localStorage.getItem("token");

  if (!token) {  
    throw new Error("Token not found");
  }
    const  response = await axios.delete(`https://linked-posts.routemisr.com/posts/${userId}`, 
      {headers: {
           token,
          "content-type" :"multipart/form-data"

}}

    )  

        

return response.data ;

}