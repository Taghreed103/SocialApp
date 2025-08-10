import { useMutation } from '@tanstack/react-query'
import { createComment } from '../Apis/comments/createComment.api'
import { useQueryClient } from '@tanstack/react-query'
import Loading from './Loading'
export default function CreateComment({id}) {
 const queryClient = useQueryClient()


  const  {isPending,  mutate} =useMutation({mutationFn:createComment ,

    onSuccess: ()=>queryClient.invalidateQueries({ queryKey: ['comments' , id ] })
    
  })

    function   addComment (e){
        if (e.key ===  "Enter"  ){
         const commentTarget = e.target.value 
        if (commentTarget.trim() !=="" ) {
            mutate({content:e.target.value , post: id}) 
            e.target.value ="" 
              }
      }
    }
  return (

    <>
    {isPending && 
    
    <Loading></Loading>
    
    }

    
  <div  className='p-5'>
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-left text-purple-800 dark:text-purple-600">Your Comment here .......</label>
  <textarea  

   onKeyDown={addComment} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." defaultValue={""} />
</div>

    
    </>
   
  )
}

