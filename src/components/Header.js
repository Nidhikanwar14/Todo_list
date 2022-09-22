import {Layout} from "antd";
import styled from 'styled-components';
import styles from "../themes/styles";
import TodoList from "./TodoList";
import {useState} from "react";
import {Form , Input ,Button ,Alert} from "antd";
import colors from "../themes/colors";
import border from "../themes/border";

const Searchbar = styled(Layout.Header)`
    &&{
      &.ant-layout-header {
        ${styles.flexConfig.rowCenter};
        ${styles.margin.top(1)}
       
      }
      //display: flex;
    }
`

const StyledButton = styled.div`
  display: flex;
  button{
    background: ${colors.Lime};
    ${border.borderRadius(0.3)};
  }
`
const StyledInput = styled.div`
  input {
    ${border.borderRadius(0.3)}
  }
`

const Header = (props) =>{
    const [input ,setInput] = useState('');
    const num = /^[0-9\b]+$/;
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const handleSubmit = e => {
        if (input === '' || input.length >20){
            // document.getElementById('error').innerHTML = "Please Enter Valid input.."
            alert("Please enter valid input..")
        }
        // else if(specialChar.test(input)){
        //         alert(" Special Characters are not allowed..")
        //     }

        else {
            e.preventDefault();
            props.onSubmit({
                id : Math.floor(Math.random() * 100),
                text : input
            })
            setInput('');
        }

    }

    const handleChange = e => {

            setInput(e.target.value);

    }

    return(
       <Searchbar>
           <form onSubmit={handleSubmit}>
               <StyledButton>
                   <StyledInput>
               <Input placeholder = "Enter your Task" value={input} className = 'todo-input' onChange={handleChange} required/>
                   </StyledInput>
              {/*<input placeholder="Enter your Task" value={input} className='todo-input' onChange={handleChange}/>*/}

               <button data-testid = 'clear-sort'>ADD</button></StyledButton>
               {/*<button> Add </button>*/}
           </form>
           {/*<button onClick={handleRemove}> Remove </button>*/}
       </Searchbar>
    )
}

export default Header;