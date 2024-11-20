import React, { useReducer, useState } from 'react'

let init={su:10};

const PLUS='plus',MINUS='minus',PLUSPLUS='plusplus';


const suReducer=(state,action)=>{
    console.log(state,action);
    switch(action.type){
        case PLUS:
            return {...state,su:state.su+1};
        case MINUS:
            return {...state,su:state.su-1};
        case PLUSPLUS:
            return {...state,su:state.su+action.value};
        default:
            return state;
}
};


function Ex08() {
    // const [su, setSu]=useState(0);
    const[obj,dispatch]=useReducer(suReducer,init);
  return (
    <div>
        <h2>su:{obj.su}</h2>
        <button onClick={e=>dispatch({type:PLUS})}>plus</button>
        <button onClick={e=>dispatch({type:MINUS})}>minus</button>
        <button onClick={e=>dispatch({type:PLUSPLUS,value:10})}>plus+10</button>
    </div>
  )
}

export default Ex08