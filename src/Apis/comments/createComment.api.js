    import axios from "axios"
       
       export  async function createComment({content, post}) {
        const token = localStorage.getItem("token");
       
         if (!token) {
           throw new Error("Token not found");
         }
     const response = await axios.post(
       "https://linked-posts.routemisr.com/comments",
       {
         content,
         post
       },
       {
         headers: {
           token
         }
       }
     )
       
               
       
       return response.data ;
       
       }