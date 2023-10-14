import React, { useMemo, useState  } from 'react'
import ChaildComponent from './ChaildComponent';

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const filteredData  = useMemo(()=>{
        console.log("eeeeee",count)
        return  <ChaildComponent/>;

    },[count])
  return (
      <>
      {count}
      <p>filteredData,{filteredData}</p>
     
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      </>
  )
}

export default UseMemoHook