import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { useActions } from "../actions";
import * as TodoActions from "../actions/todo";
import { RootState } from "../reducers";

export function EditToDo() {
    const location = useLocation()
    const history = useHistory();
    console.log(location.state);
    let todoList;
    let todoActions;
    let data: any;



    const [tText, setTtext] = useState({
        id: '',
        completed: '',
        text: '',
        created: ''
    })
    let [text, setText] = useState('')

    const updateTodo = () => {
        // console.log(text);
        // console.log(tText);
        let obj = {
            created: new Date(),
            id: tText.id,
            text: text,
            completed: tText.completed
        }
        todoActions.updateTodo(tText.id, obj);
        alert('Updated Successfully')
        history.push("/tasks")
    }
    todoList = useSelector((state: RootState) => state.todoList);
    todoActions = useActions(TodoActions);
    useEffect(() => {
        data = todoList.filter(item => location.state.id === item.id)[0]
        setTtext(data)
            setText(data.text)
    }, [])
    let styleobj = {
        background: 'red',
        color: 'white',
    }
    return (
        
        <div className='edit-todo'>
            {/* <form> */}
            Item Text: <input type="text" name='text' value={text} onChange={e => (
                setText(e.target.value)
            )} /> <br /> <br /> <br />
            <button className="join-now btn save"  onClick={updateTodo}>Save</button>
            <button className="join-now btn" style={styleobj} onClick={e=>{
                history.push("/tasks")
            }}>Back</button>
            {/* </form> */}
        </div>
    )
}