import Header from "../components/Header";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import styles from "../themes/styles";
import {Layout} from "antd";

const StyledHeader = styled(Layout.Header)`
&&{
  ${styles.flexConfig.rowCenter};
`

const List = styled.div`
  ${styles.flexConfig.rowCenter};
    
`

function TodoApp(){
    return(
        <>
            <StyledHeader>
                <h2> To-Do-List</h2>
            </StyledHeader>
            <div>
            <List>
        <TodoList/></List></div>
        </>
    )
}

export default TodoApp;