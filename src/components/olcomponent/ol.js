



export var Olcomponent=()=>{
    var details={
        heading:"Technical Skills",
        listitems:["HTML","CSS","BOOTSTRAP","JAVASCRIPT","REACTJS"]
    }
    var {heading,listitems} = details
    return(
        <ol>
            <h3>{heading}</h3>
            <li>{listitems[0]}</li>
            <li>{listitems[1]}</li>
            <li>{listitems[2]}</li>
            <li>{listitems[3]}</li>
            <li>{listitems[4]}</li>
        </ol>
    )
}