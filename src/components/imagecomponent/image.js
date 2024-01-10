


export var Imagecomponent=()=>{
   var  image={
    imagesrc:["https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg","https://tse4.mm.bing.net/th?id=OIP.nyFLBYjD207JNHC4hBQBAwHaE8&pid=Api&P=0&h=180","https://bestinau.com.au/wp-content/uploads/2019/01/free-images.jpg"],

   }
   var {imagesrc}=image
   return(
    <div>
    <img src={imagesrc[0]}                                                                                                                                                                                                                                                              
    />
    <img src={imagesrc[1]}

    />
    <img src={imagesrc[2]}

    />
    </div>
   )
}