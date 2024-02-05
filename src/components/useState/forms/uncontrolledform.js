import { useContext, useRef ,useState} from "react"
import { DataShare } from "../../../navigationStack/navigation"


export const Uncontrolled=()=>{
    const emailRef=useRef()
    const passwordRef=useRef()
    const [error,setError]=useState("")
    const {loginTrue}=useContext(DataShare)


    const hitServer=(data)=>[
      fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res=>{
  if(res.message){
    alert(res.message)
    setError(res.message)
  }
  else{
    console.log(res)
    alert("login successfull")
    loginTrue()
    localStorage.setItem("userLoginInfo",JSON.stringify(res))
    setError("")
  }
})
.catch(err=>console.log(err))


    ]
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        if(passwordRef.current.value.length<6){
          alert("please enter more than 8 characters ")
          setError("")
        }
        else{
          const userInfo={
            username:emailRef.current.value,
            password:passwordRef.current.value
          }
          hitServer(userInfo)
        }

    }
    return(
      <>
     
      <form  onSubmit={handleSubmit} >
<div className="mb-3 mt-3">
  <label  className="form-label">Email:</label>
  <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"  ref={emailRef}  />
</div>
<div className="mb-3">
  <label className="form-label">Password:</label>
  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={passwordRef} />
</div>
<div className="form-check mb-3">
  {/* <label className="form-check-label">
    <input className="form-check-input" type="checkbox" name="remember"/> Remember me
  </label> */}
</div>
{
  error ?
  <h2 style={{color:"red"}}>{error}</h2>
  :
  null
}
<button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )
}