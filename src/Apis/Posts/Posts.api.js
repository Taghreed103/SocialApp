import axios from "axios";





export  async function getPosts(){
 const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
    const  response = await axios.get("https://linked-posts.routemisr.com/posts?sort=-createdAt",
      {headers: {
           token
}}

    )  

        

return response.data ;

}