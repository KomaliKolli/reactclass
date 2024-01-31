import axios from "axios"
import { useEffect, useState } from "react"
import { BlogPost } from "../../Loaders/skeletonLoader"



export const UseEffectEx1=()=>{
    const [productsListing,setProductListing]=useState("")
    useEffect(()=>{
        fetchData()
        console.log("component mount")

    },[])
    //this function is for fetching the data from server to client
    const fetchData=()=>{
        //axios
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                //successfully data came
                console.log(response)
                setProductListing(response.data)
            }
        })
    }
    return(
        <>
        {/* <h1>useEffect example 1</h1> */}
        {
            productsListing.length>0 ?
            
            productsListing.map((product)=><ProductsListing key={productsListing.id} data={product}/>)
            
            :
            <> 
            
            {/* <h1>Loading...</h1> */}
            <BlogPost></BlogPost>
            </>
        }    
        </>
    )

}
const ProductsListing=({data})=>{
    return(
        <>
        <div>
            <h3 style={{color:"blue"}}>{data.id}</h3>
           
            <h4 style={{color:"red"}}>{data.category}</h4>
            <h3 >{data.title}</h3>
            <h4 style={{color:"green"}}>{data.description}</h4>
            <img src={data.image} style={{width:"100px"}}/>

        </div>

        </>
    )
}
