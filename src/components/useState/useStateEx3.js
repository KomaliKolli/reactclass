import React, { useState } from "react"





export const UseStateExample3=()=>{
    const initialvalue=["apple","mango"]
    const [list,setList]=useState(initialvalue)

    const handleFruit=()=>{
        const fruitname="kiwi"
        setList([...list,fruitname])

    }


    return(
        <>
            <button onClick={handleFruit}>click to add new fruit</button>
            <ol>
                {list.map((value,index)=><React.Fragment key={index}>

                    <li>{value}</li>
                </React.Fragment>)}
            </ol>
        </>
    )
}