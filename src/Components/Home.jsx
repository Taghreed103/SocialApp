import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../Apis/Posts/Posts.api.js";
import PostItem  from '../Components/PostItem.jsx'
import Loading from "./Loading.jsx";
export default function Home() {

    const  { data ,isLoading }= useQuery({
      
      queryKey:['posts'],
     queryFn: getPosts,
     refetchInterval: 100000, // ✅ إعادة الطلب كل 10 ثواني
    //   refetchOnWindowFocus: false,  // ✅ منع إعادة الطلب عند رجوعك للصفحة
    //  retry:false  // ✅ منع إعادة الطلب في حالة الخطأ
      
      
      });
   
  

    if (isLoading) {
        return <Loading></Loading>

    }



    
  return (

<>

 <h1>posts</h1>
 <div>

   <ul>
      {data?.posts?.map((post) => (

        <li    key={post._id}  className="mb-4">
                    <PostItem   post={post}  ></PostItem>


        </li>
      ))}
    </ul>
 </div>
 
  </>
     
  )
}
