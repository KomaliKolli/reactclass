


 export var Licomponent=()=>{
    const details={
        heading:"Hobbies",
        listitems:["Reading Novels","Collection of coins","Playing badminton"],
    }
    const {heading,listitems}=details
    return(
        <div>
            <h3>{heading}</h3>
            <li>{listitems[0]}</li>
            <li>{listitems[1]}</li>
            <li>{listitems[2]}</li>
        </div>

    )
}