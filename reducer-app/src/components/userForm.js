import React, { useState } from 'react';



export const UserForm = () => {

    const [ inputText, setInputText ] = useState('')


    const changeHandler = event => {
            event.preventDefault();
            setInputText(event.target.value)
    }

    return (
        <form>
            <input type="text"  style={{ width: '100%'}}onChange={changeHandler} name="inputText" value={inputText} style={ {backgroundColor: 'white'}}/>
        </form>
    )
}