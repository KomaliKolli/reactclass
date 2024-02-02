import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"





export const ProductDetails=()=>{
    const routerInformation =useParams()
    // console.log(routerInformation)
    const [productDetails,setProductDetails]=useState({})

    useEffect(()=>{
        fectchEachProduct(routerInformation.id)

    },[routerInformation.id])

    const fectchEachProduct=()=>{
        axios.get(`https://fakestoreapi.com/products/${routerInformation.id}`)
    //     .then(response=>console.log(response))
        .then(response=>{
            if(response.status===200){
                setProductDetails(response.data)
            }
            else{
                alert("req failed")
            }
           
        }
            )
    }
    
    return(
        <>

           {
            Object.keys(productDetails).length > 0
            ?
            <>
            
            <h2 style={{textAlign:"center",color:"red"}}>{productDetails.id}</h2>
            <h3 style={{textAlign:"center",color:"blue"}}>{productDetails.category}</h3>
            <img  src={productDetails.image} alt={productDetails.category} width={100} height={100} style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
            <h3 style={{textAlign:"center",color:"green"}}>{productDetails.title}</h3>
            <h3>{productDetails.description}</h3>
            <h3 style={{textAlign:"center",color:"black"}}>{productDetails.price}</h3>
            </>

            :
           <>
            <h2>Loading..</h2>
           </>
           }
            </>


        
    )
}