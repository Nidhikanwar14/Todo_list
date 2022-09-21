import {useState} from "react";
import TodoList from "./TodoList";

const Todo = ({todos ,completeTodo ,deleteTodo}) =>{

    return todos.map((todo ,index) =>(
        <div  key = {index}>

            <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
            </div>
         </div>
    ))
}

export default Todo;