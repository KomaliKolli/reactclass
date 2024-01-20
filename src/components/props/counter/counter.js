import { Component } from "react";
import { ChildButton } from "./child";




export class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleIncrement=(data)=>{
        console.log(data)
       this.setState({
        count:this.state.count+data
       })
            
          
            
        }
       
    
    render(){
        return(
            <>
            <h3>Counter</h3>
            <h3>{this.state.count}</h3>
            <ChildButton handleIncrementMethod={this.handleIncrement}/>
            </>
        )
    }
}