import React, { useState } from 'react';



export const UserForm = (props) => {

    const [ inputText, setInputText ] = useState('')


    const changeHandler = event => {
            event.preventDefault();
            setInputText(event.target.value)
    }

    const addTodo = event => {
        event.preventDefault();
       props.dispatch( { type: "ADD_TODO", payload: inputText })
    }

    return (
        <form onSubmit={addTodo}>
            <input type="text"  style={{ width: '500px'}} onChange={changeHandler} name="inputText" value={inputText} style={ {backgroundColor: 'white'}}/>
            <button type="submit" onClick={console.log(props.dispatch)}>Add Todo</button>
        </form>
    )
}