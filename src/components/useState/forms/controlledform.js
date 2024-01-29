import { useState } from "react"

export const Controlled=()=>{
    const [userName,setUserName]=useState("")
    const [userNameError,setUserNameError]=useState("")
    const [password,setPassword]=useState("")
    const [passwordError,setPasswordError]=useState("")
    const [email,setEmail]=useState("")
    const [emailError,setEmailError]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [confirmPasswordError,setConfirmPasswordError]=useState("")
    
    const userNameHandler=(event)=>{
        // console.log(event.target.value)
        setUserName(event.target.value)
        if(event.target.value.length>10){
            // alert("enter below 10 characters")
            setUserNameError("enter below 10 characters")
        }
        else{
            setUserNameError("")
        }

    }
    const passwordHandler=(event)=>{
      setPassword(event.target.value)
      console.log(event.target.value)
      const result=validatePassword(event.target.value)
      if(result){
        console.log("password valid")
        setPasswordError("")
      }
      else{
        console.log("password invalid")
        setPasswordError("password invalid")
      }
      console.log(result)

    }
    const username = "k3llydev";

    function validatePassword(psw)
{
  let msg = true

  switch (true) {
  case  (psw.length < 8 || psw.length > 13):
    msg = false
    break
  case  (!(/[0-9]/.test(psw))):
    msg = false
    break
  case (psw === psw.toLowerCase()) || (psw === psw.toUpperCase()):
    msg = false
    break
  case ( psw.includes(username)):
    msg =false
    break
  }
  return msg
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const emailHandler=(event)=>{
    setEmail(event.target.value)
    console.log(event.target.value)
    const result=validateEmail(event.target.value)
    if(result){
      console.log("password valid")
      setEmailError("")
    }
    else{
      console.log("password invalid")
      setEmailError("password invalid")
    }

  }
  // const confirmPasswordHandler=(event)=>{
  //   setConfirmPassword(event.target.value)
  //   console.log(event.target.value)
  //   const result=validatePassword(event.target.value)
  //   if(result){
  //     console.log("confirm password valid")
  //     setConfirmPasswordError("")

  //   }
  //   else{
  //     console.log("confirm password inavlid")
  //     setConfirmPasswordError("confirm password invalid")
  //   }
  // }
  const confirmPasswordHandler = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (confirmPasswordValue !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };
  
  const submitHandler=(event)=>{
    event.preventDefault()
    //server hit
    const userDetails={
      userName,
      password,
      email,
      confirmPassword
    }
    console.log(userDetails,"userDetails")

    
  }
 




    return(
        <>
             
      <form  onSubmit={submitHandler} >
<div className="mb-3 mt-3">
  <label  className="form-label">Username:</label>
  <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" value={userName} onChange={userNameHandler} />
  {
    userNameError
    ?
    <h3 style={{color:"red"}}>{userNameError}</h3>
    :
    null
  }
</div>
  

<div className="mb-3">
  <label className="form-label">Password:</label>
  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={passwordHandler}/>
  {
    passwordError ?
    <h3 style={{color:"red"}}>{passwordError}</h3>
    :
    null
  }
</div>
<div className="mb-3">
<label className="form-label">Email:</label>
  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={emailHandler}/>
  {
    emailError ?
    <h3 style={{color:"red"}}>{emailError}</h3>
    :
    null
  }
</div>
<div className="mb-3">
  <label className="form-label"> confirmPassword:</label>
  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={confirmPassword} onChange={confirmPasswordHandler}/>
  {
    confirmPasswordError ?
    <h3 style={{color:"red"}}>{confirmPasswordError}</h3>
    :
    null
  }
</div>




<div className="form-check mb-3">  

{
  userNameError || passwordError || confirmPasswordError || emailError?null
  :
  <button type="submit" className="btn btn-primary">Submit</button>

}
</div>
 
</form>
        </>
    )
}