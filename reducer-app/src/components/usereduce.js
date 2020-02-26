import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import { UserForm } from '../components/userForm'

export const UseReduce = () => {
    
 const [state, dispatch] = useReducer(reducer, initialState)
 
 
    return (
        <>
       <div>
           {/* {console.log(state)} */}
           {state.todos.map((item, id) => { return <div style={{ display: 'inline-block'}}> <div key={id} style={{ backgroundColor: 'skyblue', margin: '20px 20px 20px 120px', width: '600px', height: '200px', textAlign: 'middle'}}>{item.item}</div></div>})}
           <UserForm dispatch={dispatch}/>
       </div>
        </>
    )

}