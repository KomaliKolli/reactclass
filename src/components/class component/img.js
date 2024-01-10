import { Component } from "react";



export class Imagecomponent extends Component{
    state={
        imageUrl:"https://www.reliancedigital.in/wp-content/uploads/2018/12/gridline-s.jpeg",
        imageUrl1:"https://thumbs.dreamstime.com/b/young-boy-clicking-photograph-camera-park-77905034.jpg",
        // imageUrl2:"subscribe",
        // imageUrl3:"subscribed",
        isimg:false
    }
    imagehandler=()=>{
        this.setState(
            {
                isimg:!this.state.isimg
            },()=>{
                console.log(this.state.isimg)
            }
        )

    }
    render(){
        return(
                <>
                <img onClick={this.imagehandler} src={this.state.isimg? this.state.imageUrl1:this.state.imageUrl} ></img>
                <br>   
                </br>
                <br></br>
                {/* <button onClick={this.imagehandler}>{this.state.isimg?this.state.imageUrl3:this.state.imageUrl2}</button> */}
                </>
            
        )
    }
}