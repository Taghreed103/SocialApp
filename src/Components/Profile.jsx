import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { getUserData } from '../Apis/userdata.api';
import Loading from './Loading';
export default function Profile() {

    const {id}= useParams();

    const {data  , isLoading , error , isError}  = useQuery({ queryKey:["profile" , id ]  , queryFn:()=> getUserData(id)       })
 if(isLoading){

    return <Loading></Loading>
 }


 if (isError)
    return <div className='flex items-center justify-center h-screen'>Error: {error.message}</div>

    console.log(data);

  return (
 <>
    <div className='flex items-center justify-center h-screen'>

    {data?.user?.photo && <img src={data.user.photo} alt="profile" className='w-20 h-20 rounded-full' />}
    </div>
 
 </>
  )
}
