


export function Button({children,width}){
    // const obj={
    //     text:"Login"
    // }
    
    return(
        <>

        {/* <button>{obj.text}</button> */}
        <button style={{width:width}}>{children}</button>
        </>
    )
}