import { logDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

const WithDataFeatching = () => {
    const ParentComponent = (Component, url) =>{
        const ChaildComponent = (props) =>{
            const [data, setData] = useState();
            const [loading, setLoading] = useState();
            const feactingData = async () =>{
                try{
                    setLoading(true)
                    const response = await fetch(url);
                    console.log("reponse",response)
                    const jsonData = await response.json();
                    console.log("reponse jsonData",jsonData)
                    setData(jsonData);
                    setLoading(false);
                }catch(err){
                    setLoading(false);
                    console.log(err);
                }
            }
            useEffect(()=>{
                feactingData();
            },[]);
            if(loading){
                return <div>Loading...</div>;
            }
            return <Component {...props} data ={data}/>
        }
        return ChaildComponent
    }
    const MyComponent = ({data}) =>{
       return (
           <React.Fragment>
               {data && data.map((item)=>{
                   return(
                       <h2>{item.title}</h2>
                   )
               })}
           </React.Fragment>
       )
    }
    const EnhancedComponent = ParentComponent(MyComponent, "https://jsonplaceholder.typicode.com/posts")
  return (
    <div>
        WithDataFeatching
        <EnhancedComponent/>
    </div>
  )
}

export default WithDataFeatching