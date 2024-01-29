import { useState } from "react"




export const CircleComponent=()=>{
    const [circles,setCircles]=useState([])
    const [number,setNumber]=useState()
   
    const addCircle=()=>{
        debugger;
        if(number>0&&number<=100){
        const newCircles = Array.from({ length: number }, () => false);
        setCircles([...circles, ...newCircles])
        }
        else{
            alert("please enter a number between 1 to 100")
        }
    }
    const handleInputNumber=(event)=>{
        const {value}=event.target
        setNumber(value)

    }
    const circleClick=(index)=>{
        const colorCircle = [...circles];
    colorCircle[index] = !colorCircle[index];
    setCircles(colorCircle);
    }
   
    // console.log(colorCircle)

    return(
        <>
        <button onClick={addCircle}>ADD CIRCLES</button>
        <br/>
        <br/>
        <input type="text" className="form-control" placeholder="Enter Number" name="Number" value={number} onChange={handleInputNumber}/>
        {
    circles.map((value,index)=>
    <div key={index}  style={{width:100,height:100,border:"4px solid red",borderRadius:"50%",backgroundColor:value?"black":"white"}} onClick={()=>circleClick(index)}  >



    </div>
    )
 }
      </>
    )
    }

    
    