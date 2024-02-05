import { useReducer, useState } from "react"

const reducerFunction=(state,action)=>{

    // switch()
    console.log(action)
    console.log(state)
    switch(action.type){
        case "INCREMENT_ACTION":
            return{...state,age:state.age+1}
        case "DECREMENT_ACTION":
            return{...state,age:state.age-1}
        case "ADD_TODO":
            return{...state,todos:[...state.todos,action.next]}
        case "DELETE_TODO":
            return{
                ...state,todos:state.todos.filter((todo)=>todo!== action.next)
            }
            
        default:
            return state
    }


}

const initialState ={
    age:20,
    name:"komali",
    todos:[]

}





export const UseReducerExample=()=>{
   const [currentState,dispatchFunction] =useReducer(reducerFunction,initialState)
   const [value,setValue]=useState("")
   const Increment=()=>{
    dispatchFunction(
        {
            type:"INCREMENT_ACTION"
        }
    )

   }
   const Decrement=()=>{
    dispatchFunction(
    {
        type:"DECREMENT_ACTION"
    })

   }
   const onChangeHandler=(event)=>{
    setValue(event.target.value)

   }
   const addTodo=()=>{
    dispatchFunction({
        type:"ADD_TODO",
        next:value
    })
}
    const deleteTodo=()=>{
        dispatchFunction({
            type:"DELETE_TODO",
            next:value
        })

    }
   
    return(
        <>
            <h2>I am useReducer Example </h2>
            <h2>{currentState.age}</h2>
            <button onClick={Increment}>Increment age</button>
            <button onClick={Decrement}>Decrement age</button>
            <input value={value}
                onChange={onChangeHandler} />
            <button onClick={addTodo}>Add todo</button>
            {
                currentState.todos.map((value,index)=><h5 key={index} >{value}</h5>)
            }
            <button onClick={()=>deleteTodo(value)}>delete todo</button>
    
            
            

            
       
     
            
        </>
    )
}