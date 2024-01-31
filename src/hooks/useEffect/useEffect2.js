import { useEffect, useState } from "react"




export const UseEffectEx2=()=>{
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)



    useEffect(()=>{
        updateCounterValue()
        console.log("useEffect is executing")

    },[count,count1])
    const updateCounterValue=()=>{
        // setCount(count+1)
        document.title=`Counter Value ${count}`


    }
    const handleIncrement=()=>{
        setCount(count+1)
    }
    const handleIncrement1=()=>{
        setCount1(count1+1)
    }

    
    return(
        <>
         <h1>UseEffect2 {count}</h1>
         <button onClick={handleIncrement}>click to update the count</button>
         <button onClick={handleIncrement1}>click to update the count</button>   
        </>
    )
}

// if we remove dependency array component will gets re-render everytime