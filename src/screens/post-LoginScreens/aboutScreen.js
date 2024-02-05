import { useContext } from "react"
import Navbar from "../../Navbar/navbar"
import { DataShare } from "../../navigationStack/navigation"
import { UseReducerExample } from "../../hooks/useEffect/useReducer/useReducer1"



export const AboutScreen=()=>{
    const data=useContext(DataShare)
    const {name,darkTheme} =data
    return(
        <>
        <Navbar/>
        <UseReducerExample/>
        
        
        <div style={{backgroundColor:darkTheme?"black":"white"}}>
            <h1>I am from About screen</h1>
            <h3>I am managed globally {name}</h3>
            </div>
        </>
    )
}