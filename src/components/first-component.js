import { Mounting } from "./LIfe cycle methods/mounting phase/mounting"




export const BootsrapComponent=()=>{
    return(
        <>
        
        <div className="container mt-5">
        <div className="row">
        <div className="col-sm-4" style={{display:"grid", gridTemplateColumns:"auto auto auto"}}></div>
       <Mounting/>
        </div>
        </div>
        
    </>
    )
}