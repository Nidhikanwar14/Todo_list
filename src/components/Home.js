import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Button} from "antd";
/*
LIST EXAMPLE
 */
function Car(props) {
    return <li>I am a { props.brand }</li>;
}

function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}

// export default Garage;


/*
CLASS COMPONENT STATE EXAMPLE
*/

class Time extends React.Component{
    constructor(props) {
        super(props);
        this.state = {time : new Date()}
    }

    render() {
        return (
         <div>
             <h1>Date is {this.state.time.toLocaleTimeString()}</h1>
         </div>
        )
    }
}
// export default Time;

/*
FUNCTIONAL COMPONENT STATE EXAMPLE
 */

function Count(){
    const [count , setCount] = useState(0);
    return(
        <>
        <h1>you counted {count} times.</h1>
             <Button onClick={()=>setCount(count+1)}>+</Button>
        </>
    )
}
// export default Count;

/*
EXAMPLE OF EVENT HANDLING
 */

function Animal(){
    const eat=()=>{
      alert("Animal is eating");
    }

    return(
        <div>
            <button onClick={()=>eat()}>Click me!</button>
        </div>
    )
}
export default Animal;