import axios from "axios";





export  async function getUserProfile(userId){
 const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
    const  response = await axios.get(`https://linked-posts.routemisr.com/users/${userId}`,
      {headers: {
           token
}}

    )  

        

return response.data ;

}