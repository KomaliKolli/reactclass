


export const Profilecard=(props)=>{
    console.log(props)
    return(
        <>
    <div className="container mt-3">
  
  <div className="card" style={{width:"400px"}}>
  
  <h4 className="card-title" >{props.profile.id}</h4>
    <img className="card-img-top" src={props.profile.url} alt="Card image" style={{width:"100%"}} />
    <div className="card-body">
      
      <p className="card-text">{props.profile.title}</p>
      

      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
  </div>
  
        </>
    )
}