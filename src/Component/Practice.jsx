import React, { useReducer } from 'react'




function Practice() {

    let intialeState = {
        count : 0
    }
    
    const reducer = (state,action)=>{


        console.log(state);
        console.log(action);
            
           if(action.type === 'increment'){
             return {
                
                 count : state.count +1
             }
           }else{
             return {
                count : state.count -1
                 
             }
           }


         
    } 


   let [counter,setCounter] = useReducer(reducer,intialeState);

    


  return (
    <div>
        <button onClick={()=>{setCounter({type : 'increment'})}}>Increment</button>
        <button onClick={()=>{setCounter({type : 'decrement'})}}>Increment</button>
                      
                      <h2>{counter.count}</h2>
    </div>
  )
}

export default Practice;
