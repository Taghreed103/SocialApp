import axios from "axios";


export  async function getPostDetails(postId){
 const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
    const  response = await axios.get(`https://linked-posts.routemisr.com/posts/${postId}`,
      {headers: {
           token
}}  )  

return response.data ;

}