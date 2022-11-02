import { createRef, useEffect, useState } from "react";
import '../App.css';

function Counter(){

    const [count, setCount] = useState(0);
    const [inputval, setInputval] = useState(1);
    const buttonReff = createRef();

    useEffect(()=> {
        if(count <= 0){
            buttonReff.current.disabled = true;
        }else{
            buttonReff.current.disabled = false;
        }
    },[count])

    const increment = () => setCount(count + Number(inputval));
    const decrement = () => setCount(count - Number(inputval));

    return(
        <div className="counter-container">
            <h1>counter</h1>
            <input placeholder="Enter the counter value" 
                value={inputval}
                onChange={(e) => setInputval(e.target.value)}
            />
            <h2 className="color-white">Count : {count}</h2>

            <button onClick={decrement} ref= {buttonReff}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;