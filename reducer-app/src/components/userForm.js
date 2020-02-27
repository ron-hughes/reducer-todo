import React, { useState } from 'react';



export const UserForm = (props) => {

    const [ inputText, setInputText ] = useState('')


    const changeHandler = event => {
            event.preventDefault();
            setInputText(event.target.value)
    }

     const addTodo = event => {
        const todo = {
            item: inputText,
            completed: false,
            id: Date.now()
          };
        event.preventDefault();
      props.dispatch( { type: "ADD_TODO", payload: todo }) // passing down dispatch props, sending data/payload from input of type ADD_TODO
      setInputText("");
    }

     function toggleTodo (taskId)  {
        setInputText({
            todos: props.state.todos.map(todo => {
                if (taskId === todo.id) {
                  return { ...todo, completed: !todo.completed };
                }
                return todo;
        })})
    }
    

    return (
        <form onSubmit={addTodo}>
            <input type="text"  style={{ width: '500px'}} onChange={changeHandler} name="inputText" value={inputText} style={ {backgroundColor: 'white'}}/>
            <button type="submit">Add Todo</button>
            
        </form>
    )
}