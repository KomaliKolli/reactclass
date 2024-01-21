import { Component } from "react";
import { Loader } from "../../loaders/loader";
import { Profilecard } from "../../profile card";




export class Mounting extends Component{
    constructor(){
        super()
        this.state={
            message:"Good Morning",
            color:"red",
            photos:[]
        }
    }
    static getDerivedStateFromProps(props){
        return{color:props.color}
    }
    componentDidMount(){
        //dom manipulation
        document.title="Amazon"
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            this.setState({
                photos:response
            })
        })

    }
//     render(){
//         return(
//             <>
//                 <h2 style={{color:this.state.color}}>Mounting {this.state.message}</h2>
                
//                     {this.state.photos.length>0?
//                     <>
//                     {this.state.photos.map((eachphoto)=>{
                        
//                             return(
//                             <div className="container mt-5">
//                             <div className="row">
//                 <div className="col-sm-4" style={{display:"grid", gridTemplateColumns:"auto auto auto"}}></div>  
//                           <Profilecard profile={eachphoto}/>
//                           </div>
//                           </div>)

                            
                            
//                             /* <h2>{eachphoto.id}</h2>
//                             <h2>{eachphoto.title}</h2>
//                             <img  style={{width:"100px"}}src={eachphoto.url} />
//                             </> */ 
                        
//                     })}
//                     </>
//                     :
//                     <Loader/>
//                     }

                    
                
//             </>
//         )
//     }
// }
render() {
    return (
      <>
        <h2 style={{ color: this.state.color }}>Mounting {this.state.message}</h2>
  
        {this.state.photos.length > 0 ? (
          <div className="container mt-5">
            <div className="row" style={{ display: "grid", gridTemplateColumns: "auto auto auto " }}>
              {this.state.photos.map((eachphoto) => (
                <div className="col-sm-4" key={eachphoto.id}>
                  <Profilecard profile={eachphoto} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}