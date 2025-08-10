    import axios from "axios"
       
       export  async function getComments(postId){
        const token = localStorage.getItem("token");
       
         if (!token) {
           throw new Error("Token not found");
         }
           const  response = await axios.get(`https://linked-posts.routemisr.com/posts/${postId}/comments`,
             {headers: {
                  token
       }}
       
           )  
       
               
       
       return response.data ;
       
       }