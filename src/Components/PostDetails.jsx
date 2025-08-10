import { useQuery } from '@tanstack/react-query'
import{ getPostDetails } from '../Apis/Posts/singlepost.api.js'
import { useParams } from 'react-router-dom'
import PostItem from './PostItem';
import Loading from './Loading.jsx';
export default function PostDetails() {
   

const  {id}=  useParams();

 const {data , isLoading, error,isError}=  useQuery({ queryKey:['post' ,id ]   , queryFn:  ()=> getPostDetails(id)   })

   if(isLoading){
    return <Loading></Loading>
   }

   if(isError){
    return <div>Error: {error.message}</div>
   }




  return (
  <PostItem    post={data.post}></PostItem>
  )
}
