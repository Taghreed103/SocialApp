import { useQuery } from '@tanstack/react-query'
import { getComments } from '../Apis/comments/comments.api'
import CommentItem from './CommentItem'
import Loading from './Loading'
export default function Comments({id}) {


const {data , isLoading, error , isError}=  useQuery(  {queryKey:["comments" ,id ], queryFn: ()=>  getComments(id)   })

 if (isLoading)   
    return  <Loading></Loading>

 if (isError) 
    return <div>Error: {error.message}</div>



  return (
    <div>{data.comments.map(comment=><CommentItem   comment={comment}   key={comment._id}></CommentItem>)}</div>
  )
}
