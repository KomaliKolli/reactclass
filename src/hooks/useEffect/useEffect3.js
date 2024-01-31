import { useEffect } from "react"




export const UseEffectEx3=()=>{
    useEffect(()=>{

        addEvent()
        // if its returning a function we can clean up
        return ()=>{
           removeEvent()
        }


    },[])
    // this function for adding mousemove event listener
    const addEvent=()=>{
        document.addEventListener("mousemove",mouseCapture)

    }
    // this fucntion for removing mousemove event listener
    const removeEvent=()=>{
        document.removeEventListener("mousemove",mouseCapture)

    }
    

    // when useEffect returns a function we can claen up the memory leaks of component
    const mouseCapture=(event)=>{
        console.log("mouse moving in home screen")
        console.log(event.clientX,"Xposition capture")
        console.log(event.clientY,"Yposition capture")
        console.log(event)

    }
    // There is a memory leak will happens in react,
    //  we should prevent by using component will unmount in class based component
    // UseEffect we can use for preventing memory leaks

    return(
        <>
        <h1>UseEffect3</h1>
        </>
    )
}