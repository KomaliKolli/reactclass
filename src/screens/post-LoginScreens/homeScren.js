import Navbar from "../../Navbar/navbar"
import { UseEffectEx1 } from "../../hooks/useEffect/useEffect1"
import { UseEffectEx2 } from "../../hooks/useEffect/useEffect2"
import { UseEffectEx3 } from "../../hooks/useEffect/useEffect3"

export const HomeScreen=()=>{
    return(
        <>
        <Navbar/>
           
            <UseEffectEx1/>
            {/* <UseEffectEx2/> */}
            {/* <UseEffectEx3/> */}
            <h2>I am from home screen</h2>
        </>
    )
}