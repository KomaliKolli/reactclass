

export const ChildButton=({handleIncrementMethod})=>{
    return(
        <button onClick={()=> handleIncrementMethod(2)}>Increment By 1</button>
    )
}