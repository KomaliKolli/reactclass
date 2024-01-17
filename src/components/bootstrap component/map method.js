import { Profilecard } from "./profilecard"



export const Mapmethod=()=>{
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
        color:"black",
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
            {/* <Profilecard/> */}
            {members.map((details)=><Profilecard profile={details}/>)}
        </>
    )
}