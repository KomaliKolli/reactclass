import { useContext, useEffect, useState } from "react"
import Navbar from "../../Navbar/navbar"

// import { UseEffectEx2 } from "../../hooks/useEffect/useEffect2"
// import { UseEffectEx3 } from "../../hooks/useEffect/useEffect3"
import axios from "axios"
import { BlogPost } from "../../Loaders/skeletonLoader"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationStack/navigation"

export const HomeScreen=()=>{
    const [productsListing,setProductListing]=useState("")
    const [totalPrice,setTotalPrice]=useState("")
   const {darkTheme,changeTheme} =useContext(DataShare)
    
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
                const newResponse=response.data.map(eachObj=>{
                    return {...eachObj,count:1,total:eachObj.price}
                })
                //successfully data came
                // console.log(response)
                setProductListing(newResponse)
                const result=sumOfPrice(response.data)
                console.log(result)
                setTotalPrice(result)
            }
        })
    }

    //THis fucntion is for calculation of sum of property values
    const sumOfPrice=(arryOfObjects)=>{
        const result=arryOfObjects.reduce((initial,eachObject)=>initial+eachObject.price,0)
        return result
        // setTotalPrice(result)
      }
      const handleIncrement=(id)=>{
        console.log(id)
        
        console.log(productsListing)
        const updatedProductsListing = productsListing.map(product => {
            if (product.id === id) {
                return { ...product, count: product.count + 1, total: product.total + product.price };
            }
            return product;
        });

        setProductListing(updatedProductsListing);

        const result = sumOfPrice(updatedProductsListing);
        setTotalPrice(result);
      }
      const handleDecrement = (id) => {
        const updatedProductsListing = productsListing.map((product) => {
          if (product.id === id && product.count > 0) {
            return {
              ...product,
              count: product.count - 1,
              total: product.total - product.price,
            };
          }
          return product;
        });
    
        setProductListing(updatedProductsListing);
    
        const result = sumOfPrice(updatedProductsListing);
        setTotalPrice(result);
      };
      const controlTheme=()=>{
        changeTheme()

      }

    return(
        <>
        {/* <div style={{backgroundColor:darkTheme?"black":"white"}}> */}
        <Navbar/>
        <div style={{backgroundColor:darkTheme?"black":"white"}}>
        <br/>
        <button onClick={controlTheme}>ChangeTheme</button>
        <h2>Total value of products:{totalPrice} </h2>
           
            {/* <UseEffectEx1/> */}
            {/* <UseEffectEx2/> */}
            {/* <UseEffectEx3/> */}
            {
            productsListing.length>0 ?
            
            productsListing.map((product)=><ProductsListingComponent key={product.id} data={product} handleIncrement={ handleIncrement} handleDecrement={handleDecrement}/>)
            
            :
            <> 
            
            {/* <h1>Loading...</h1> */}
            <BlogPost></BlogPost>
            </>
        }
        </div> 
            {/* <h2>I am from home screen</h2> */}
           
        </>
    )
}
 const ProductsListingComponent =({data,handleIncrement,handleDecrement})=>{
    return(
        <>
        <div>
            {/* <h3 style={{color:"blue"}}>{data.id}</h3>
           
            <h4 style={{color:"red"}}>category:{data.category}</h4> */}
            <h3 >{data.title}</h3>
            <img src={data.image} alt={data.category} width={100} height={100}/>
            <br/>
            <button onClick={()=>handleIncrement(data.id)}>Increment</button>
            <button onClick={()=>handleDecrement(data.id)}>Decrement</button>
            <Link to={`/ProductDetails/${data.id}`}>
            <h4>{data.count}</h4>
           
            <h3>{data.total}</h3>
            <button>click to view ProductDetails</button>
            </Link>
           
            {/* <img src={data.image} style={{width:"100px"}}/>
            <h6 style={{color:"green"}}>{data.description}</h6> */}

        </div>

        </>
    )
}
