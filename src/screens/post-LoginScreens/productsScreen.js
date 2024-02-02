import { useContext } from "react"
import Navbar from "../../Navbar/navbar"
import { DataShare } from "../../navigationStack/navigation"




export const ProductScreen=()=>{
   const {darkTheme} =useContext(DataShare)
    return(
        <>
        <Navbar/>
        <div style={{backgroundColor:darkTheme?"black":"white"}}>
            <h1>I am from product screen</h1>
            </div>
        </>
    )
}