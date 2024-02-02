import { useContext } from "react"
import Navbar from "../../Navbar/navbar"
import { DataShare } from "../../navigationStack/navigation"



export const SettingScreen=()=>{
    const {darkTheme}=useContext(DataShare)
    return(
        <>
        <Navbar/>
        <div style={{backgroundColor:darkTheme?"black":"white"}}>
            <h2>I am from setting screen</h2>
            </div>
        </>
    )
}