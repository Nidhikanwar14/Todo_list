import {useState} from "react";
import Header from "./Header";
import Todo from "./Todo";
import {Alert} from "antd";

const TodoList = () =>{
    const [todos ,setTodos] = useState([]);
    const [isEdit ,setIsEdit] = useState('');

    const addTodo = todo => {

            const newTodos = [todo, ...todos];
            setTodos(newTodos);
    }
 const updatedTodo = (id,newValue) =>{
      setTodos(prev => prev.map(item => (item.id === id ? newValue : item)))
 }
    // const submitUpdate = value =>{
    //     // updatedTodo(edit.id , value);
    //     setIsEdit({
    //         id: null,
    //         value: ''
    //     })
    // }

    const deleteTodo = (id) =>{

        const remove = todos.filter((todo) =>{
            return todo.id !==id;
        })
        setTodos(remove)
    }

    const editTask = () =>{

    }

    const completeTodo = () =>{
        let updatedTodos = todos.map(todo =>{
            return todo
        })
        setTodos(updatedTodos)
    }

    return(
        <div>
            <Header onSubmit = {addTodo} />
            <Todo todos ={todos} completeTodo ={completeTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}
export default TodoList;