import React from 'react'
import { formatDate } from './lib/formateddate';
export default function CommentItem({comment}) {


    const{content , commentCreator :{name, photo}  , createdAt} = comment;



  return (

 <>
 
      <div  className='flex items-center gap-5 p-4 py-3'  >
             <img  className='rounded-full size-10 '   src={photo}  alt='img of subscriber'/>
        <div>
            <p>{name}</p>
             <span  className='text-sm text-gray-500 '>{formatDate(   createdAt)  }</span>
             <p>{content}</p>
            </div>

            
   </div>
 
 
 
 
 
 
 
 </>

  )
}
