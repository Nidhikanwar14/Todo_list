import {useState} from "react";
import TodoList from "./TodoList";
import {Button} from "antd";
import styled from "styled-components";
import colors from "../themes/colors";
import border from "../themes/border";

const StyledButton = styled.div`

  display: flex;
  button{
    background: ${colors.Lime};
    ${border.borderRadius(0.3)};
  }
`

const Todo = ({todos ,completeTodo ,deleteTodo}) =>{

    const [edit , setEdit] = useState({
        id : null,
        value :''
    })




if (edit.id){
    return <TodoList edit={edit} ></TodoList>
}
    return todos.map((todo ,index) =>(

        <div  key = {index}>

            <br/>
            <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
       <StyledButton>
            <Button onClick={() => deleteTodo(todo.id)} >Delete</Button><br/>
           {/*<Button  onClick={() => setEdit({ id: todo.id, value: todo.text })}> Edit</Button>*/}
            </StyledButton>
            </div>
         </div>
    ))
}

export default Todo;