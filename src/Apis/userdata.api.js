import axios from "axios";


export  async function getUserData(){
 const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
    const {data} = await axios.get("https://linked-posts.routemisr.com/users/profile-data",
      {headers: {
           token
}}

    )  

        

return data ;

}