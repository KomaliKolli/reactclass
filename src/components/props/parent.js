import { Button } from "./button"




export const Parentcomponent=()=>{
    return(
        <>
            <h2>hello</h2>
            <Button width={"10%"}>login</Button>
            <Button width={"50%"}>login</Button>
            <Receiver>
                <h1>hi this is jsx</h1>
            </Receiver>

        </>
    )
}
    const Receiver=({children})=>{
        return(
            <>
                {children}
            </>

        )
    }
