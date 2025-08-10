import axios from "axios";

export  async function createPost(formData){
 const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
    const  response = await axios.post("https://linked-posts.routemisr.com/posts",formData, 
      {headers: {
           token,
          "content-type" :"multipart/form-data"

}}

    )  

        

return response.data ;

}