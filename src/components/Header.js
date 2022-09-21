import {Layout} from "antd";
import styled from 'styled-components';
import styles from "../themes/styles";
import TodoList from "./TodoList";
import {useState} from "react";

const Searchbar = styled(Layout.Header)`
    &&{
      &.ant-layout-header {
        ${styles.flexConfig.rowCenter};
        ${styles.margin.top(1)}
       
      }
      //display: flex;
    }
`

const Header = (props) =>{
    const [input ,setInput] = useState('');
    const handleSubmit = e => {
        if (input === ''){
            alert("Empty not allowed!")
        } else {
            e.preventDefault();
            props.onSubmit({
                id : Math.floor(Math.random() * 100),
                text : input
            })
            setInput('');
        }

    }
    const handleChange = e =>{
       setInput(e.target.value);
    }


    return(
       <Searchbar>
           <form onSubmit={handleSubmit}>
              <input placeholder="Enter your Task" value={input} className='todo-input' onChange={handleChange}/>
               <button> Add </button>
           </form>
           {/*<button onClick={handleRemove}> Remove </button>*/}
       </Searchbar>
    )
}

export default Header;