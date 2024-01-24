// import { useState } from "react"


// export const UsestateExample1=()=>{
//     const[count,setCount]=useState(0)
//     const initialvalue=100
//     const[timer,setTimer]=useState(initialvalue)
//     const [intervalId, setIntervalId] = useState(null);

//     const handleIncrement=()=>{
//         setCount(count+1)
//     }
//     const handleTimer=()=>{
//         if(intervalId){
//             clearInterval(intervalId)
//             setIntervalId(null)
//         }
//         else{
//             const id =setInterval(()=>{
//                 if(timer===0){
//                     clearInterval(id)
//                     setIntervalId(null)
//                 }
//                 else{
//                     setTimer(timer=>timer-1)
//                 }
//             },1000)
//             setIntervalId(id)
//         }
        
//     }
//     return(
//         <>
//             <h2>useState example{count}</h2>
//             <h2 style={{color:timer>90?"black":"red"}}>timer-{timer}</h2>
//             <button onClick={handleIncrement}>click to increment by 1</button>
//             <button onClick={handleTimer}>click to {intervalId ?"stop":"start"} exam</button>
//         </>
//     )
// }
import { useState } from "react";

export const UseStateExample1 = () => {
  const [count, setCount] = useState(0);
  const initialvalue = 100;
  const [timer, setTimer] = useState(initialvalue);
  const [intervalId, setIntervalId] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const id = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(id);
            setIntervalId(null);
            return 0;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  return (
    <>
      <h2>useState example {count}</h2>
      <h2 style={{ color: timer > 50 ? "black" : "red" }}>timer-{timer}</h2>
      <button onClick={handleIncrement}>click to increment by 1</button>
      <button onClick={handleTimer}>click to {intervalId ? "stop" : "start"} exam</button>
    </>
  );
};
