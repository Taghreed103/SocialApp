import { useContext } from 'react'
import { CounterContext } from '../Context/Counter.context.jsx'
export default function Home() {


 const {counterMe, increase}  =  useContext(CounterContext)
 

  return (



    <div>
    
<h1     onClick={increase} > {counterMe}   </h1>    
      </div>
  )
}
