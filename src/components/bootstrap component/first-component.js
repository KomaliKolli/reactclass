import { Navbarcomponent } from "./navbar"
import { Profilecard } from "./profilecard"




export const Bootstrapcomponent=()=>{
            const members=[{
                name:"Komali",
                color:"red",
                salary:"30k",
                designation:"UI Developer"
            },{
                name:"Nani",
                color:"Blue",
                salary:"30k",
                designation:"UI Developer" 
            },{
                name:"Nithin",
                color:"green",
                salary:"25k",
                designation:"UX Developer"
            },{
                name:"Amarnadh",
                color:"brown",
                salary:"30k",
                designation:"UI Developer"
            },{
                name:"Sai",
                color:"black",
                salary:"30k",
                designation:"UI Developer"
            },{
                name:"Hareesh",
                color:"blue",
                salary:"30k",
                designation:"UI Developer"
            },{
                name:"Vijay",
                color:"pink",
                salary:"30k",
                designation:"UI Developer"
            },{
                name:"Nikki",
                color:"blue",
                salary:"30k",
                designation:"UI Developer"
            },{
                name:"Rekha",
                color:"red",
                salary:"30k",
                designation:"UI Developer"
            }]

            return(
                <>
                    
<div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
  </div>
 
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4" style={{display:"grid", gridTemplateColumns:"auto auto auto"}}>
      {/* <Profilecard profile={members[0]}/> */}
      {members.map((details)=><Profilecard profile={details}/>)}
    </div>
    {/* <div className="col-sm-4">
       <Profilecard profile={members[1]}/>
    </div>
    <div className="col-sm-4">
      <Profilecard profile={members[2]}/>
    </div>  */}
  </div>
</div>



                </>
             
            )
}