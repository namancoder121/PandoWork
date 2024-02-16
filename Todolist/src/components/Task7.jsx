import React, { useState } from "react";

const Task7 = () => {
  const [count, setCount] = useState(0);
  // const[name1,setname1]=useState('hi')

  function handleIncrement() {
    setCount(count + 1);

    // setname1('hello')
  }

  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>Counter App</p>
      <h1>{count}</h1>
      <div>
        <button
          onClick={handleIncrement}
          style={{
            border: "1px solid red",
            margin: "10px",
            background: "blue",
          }}
        >
          {" "}
          Increment{" "}
        </button>
        <button
          onClick={handleDecrement}
          style={{ border: "1px solid red", margin: "10px", background: "red" }}
        >
          {" "}
          Decrement
        </button>
        {/* <div>{`${count}${name1}`}</div> */}
      </div>
    </div>
  );
};

export default Task7;
