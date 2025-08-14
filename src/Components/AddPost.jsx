import { useMutation } from '@tanstack/react-query';
import { useState } from 'react'
import { createPost } from '../Apis/Posts/createPost.api';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function AddPost({profileId , userData}) {
  
 const queryClient = useQueryClient()



  const [body, setBody]=  useState("");
  const [image,setImage]= useState("");
  const [imgSrc,setImageSrc]= useState("");

  const { mutate  }  =  useMutation({
    mutationFn:createPost, 
    
    
     onSuccess: (newPost) => {
     

      // تحديث كاش الهوم
      queryClient.setQueryData(['posts'], (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          posts: [newPost, ...(oldData.posts || [])],
        };
      });

      // تحديث كاش البروفايل فقط لو profileId موجود
      if (profileId && userData?._id === profileId) {
        queryClient.setQueryData(['profile', profileId], (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            posts: [newPost, ...(oldData.posts || [])],
          };
        });
      }

      // إعادة جلب بيانات الهوم فقط، مش البروفايل
      queryClient.invalidateQueries({ queryKey: ['posts'] });

      toast.success("Post is Added");
      clr();
    },





    onError: () => {
      toast.error("Failed to Add post"); // اختياري: إضافة رسالة خطأ
    }

  });

 


  function    handleChange(e){
      
    const  file = e.target.files[0];
    if(file){
    setImage(file);
    setImageSrc(URL.createObjectURL(file));
  }
  };

function handleAddPost(e){
   
e.preventDefault();

const   formData= new  FormData();
if(body){

formData.append("body", body)

}

if(image){

formData.append("image", image);

}

mutate(formData);
clr()
console.log(formData)

}
  function clr() {
    setBody("");
    setImage("");
    setImageSrc("");
    toast.dismiss();// Clear any existing toasts
  }



  return (

 <>
<form  onSubmit={handleAddPost}     className="add-post-form">

  <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
  <style dangerouslySetInnerHTML={{__html: "\n  body {background:white !important;}\n" }} />
  <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    
  {imgSrc&&   <img  src={imgSrc}  alt=''></img>     } 
    <input  onChange={handleChange}  id='file'     className="hidden  title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="file" />
    <textarea 
    
    onChange={(e)=>setBody(e.target.value) }
    
    value={body}

    className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here" />
    {/* icons */}
    <div className="icons  flex items-center text-gray-500 m-2">
     <label htmlFor='file' className='cursor-pointer  flex items-center'  >

      <svg className="mr-2 text-purple-600 cursor-pointer hover:text-gray-700 border  border-black rounded-full p-1 h-12 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <svg className="mr-2 text-purple-600 cursor-pointer hover:text-gray-700 border border-black   rounded-full p-1 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <svg className="mr-2 text-purple-600 cursor-pointer hover:text-gray-700 border  border-black  rounded-full p-1 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
     </label>
    </div>
    {/* buttons */}
    <div className="buttons flex">
      <div 
      onClick={clr}
      className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
      <button className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</button>
    </div>
  </div>
</form>

 
 
  </>


  )

}