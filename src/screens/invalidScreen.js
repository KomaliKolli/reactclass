import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";


const InvalidScreen = () => {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate("/")

  }
    return (
      <>
        <Navbar />
        <h1>Invalid url please enter a valid url</h1>
        <button onClick={handleNavigate}>click to login screen</button>
        
      </>
    );
  };
  export default InvalidScreen;