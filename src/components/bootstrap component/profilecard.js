import reactImage from "./image.jpeg"

export const Profilecard=(props)=>{
    console.log(props)
    return(
        <>
    <div className="container mt-3">
  
  <div className="card" style={{width:"400px"}}>
    <img className="card-img-top" src={reactImage} alt="Card image" style={{width:"100%"}}/>
    <div className="card-body">
      <h4 className="card-title" style={{color:props.profile.color}}>{props.profile.name}</h4>
      
      
      
      <p className="card-text">{props.profile.designation}</p>
      <p className="card-text">{props.profile.salary}</p>
      

      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
  </div>
        </>
    )
}