

export function Apicall(){
    const fetchData=()=>{
        try{
            fetch("https://fakestoreapi.com/products")
            .then(response=>response.json())
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
        }catch(error){
            console.log("404 error")
            alert("something went wrong")

        }
    }
    
    return(
        <>
        <h2>API Call</h2>
        <button onClick={fetchData}>click to fetchdata</button>
        </>
        )
    }
