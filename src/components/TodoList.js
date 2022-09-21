import {useState} from "react";
import Header from "./Header";
import Todo from "./Todo";

const TodoList = () =>{
    const [todos ,setTodos] = useState([]);

    const addTodo = todo => {

            const newTodos = [todo, ...todos];
            setTodos(newTodos);
            // console.log(newTodos)
        }

    // }

    const deleteTodo = (id) =>{

        const remove = todos.filter((todo) =>{
            return todo.id !==id;
        })
        setTodos(remove)
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