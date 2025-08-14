import Comments from "../Components/Comments.jsx";
import { formatDate } from './lib/formateddate';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import  { useLocation } from 'react-router-dom';
import CreateComment from "./CreateComment.jsx";
import { auth } from '../Context/Auth.context.jsx';
import { useMutation } from "@tanstack/react-query";
import { DeletePost } from "../Apis/Posts/deletePost.api.js";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
export default function PostItem({post}) {
 

  const queryClient   = useQueryClient()


  const{userData}= useContext(auth);
  

  const  body =  post?.body ;
 
  const  image=  post?.image;
  const  photo=  post?.user?.photo;
  const  name=  post?.user?.name;
  const  _id=  post?._id;
  const  createdAt=  post?.createdAt;
  const  userId=  post?.user?._id;
  // استخدام useLocation للتحقق من المسار الحالي



   const location = useLocation();
  const isInPostsPage = location.pathname.startsWith("/posts");


  const  [isOpen , setIsOpen]= useState(isInPostsPage);

  const  { mutate} = useMutation({mutationFn:DeletePost ,

        onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post is deleted"); // نقل الـ toast هنا
    },
    onError: () => {
      toast.error("Failed to delete post"); // اختياري: إضافة رسالة خطأ
    }


  })



  
  return (
   <>
      <div className="max-w-2xl mx-auto my-4 mb-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center  justify-between">

            <div  className='flex items-center py-3'  >
    
          <img  className='size-20'   src={photo}  alt='img of subscriber'/>
    
<div>
         <p>{name}</p>
          <span  className='text-sm text-gray-500 '>{formatDate(   createdAt)  }</span>

</div>
     </div>
     {userId==userData?._id &&
     <i  onClick={()=>mutate(_id)}          className="fa-solid  fa-close  fa-2x  mx-3  text-purple-600  cursor-pointer"></i>

       }
        </div>
 
 {image && (
    

  <Link to={`/posts/${_id}`}>
    
    <img className="object-cover w-full"  src={image} alt="post" />
  </Link>
 )}
  <div className="p-5">
    
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {body}</p>

    <div   className='flex justify-between py-5 border-t border-b'>
        <i   className='fa-solid fa-share'></i>
        <i    onClick={()=> setIsOpen(!isOpen)}  className='cursor-pointer fa-solid fa-comment'></i>
        <i   className='fa-solid fa-thumbs-up'></i>
        
        
    </div>
    
  </div>

 
 {isOpen&& 
    <div className='bg-gray-100 '>

      <CreateComment  id={_id}></CreateComment>
  <Comments  id={_id}></Comments> 
   </div>
 }


      </div>
   </>
)
}
