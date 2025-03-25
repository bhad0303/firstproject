import React, { useReducer, useRef } from "react";

function TodoApp() {
  let input = useRef(null);

  const reducer = (state, action) => {
    if (action.type === "add") {
      return [
        ...state,
        {  
            id : Date.now(),
          task: action.value,
        },
      ];
    }else if(action.type === 'delete'){
           let id = action.id;
         let newState = state.filter((el)=>el.id !==  id);
         return newState;
    }
  };

  let intialeState = [
    {
        id : Date.now(),
      task: "example",
    },
  ];

  let [state, dispatch] = useReducer(reducer, intialeState);

  const handleClick = (value) => {
        dispatch({ type: "add", value: input.current.value });
        input.current.value = ""
   
   
  };

  const handleDelete = (index)=>{
        dispatch({type : 'delete', id : index})
  }

  return (
    <div>
      <input type="text" ref={input} placeholder="enter a your task" />
      <button onClick={()=>handleClick('add')}>Add</button>

    
      <br />
      <br />
      <ul>
        {state.map((el, index) => {
          return <li key={el.id}>{el.task} &nbsp; <button onClick={()=>handleDelete(el.id)}>Delete</button></li>;
        })}
      </ul>
    </div>
  );
}

export default TodoApp;
