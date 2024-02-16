import React,{useState} from "react";
import './List1.css'
const List1 = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddBottom() {
    const newTodo = {
      id: todo.length + 1,
      item: inputValue,
      createdAt: new Date().toLocaleString(),
    };
    setTodo([...todo, newTodo]);
    setInputValue("");
  }

  function handleAddTop() {
    const newTodo = {
      id: todo.length + 1,
      item: inputValue,
      createdAt: new Date().toLocaleString(),
    };
    setTodo([newTodo, ...todo]);
    setInputValue("");
  }

  function handleSortLatest() {
    const sortedTodo = [...todo].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setTodo(sortedTodo);
  }

  function handleSortEarliest() {
    const sortedTodo = [...todo].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    setTodo(sortedTodo);
  }

  return (
    <div className="list-container">
      <h2>List1 hello</h2>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
      />
      <div>
        <button onClick={handleAddTop}>Add List at Top</button>
        <button onClick={handleAddBottom}>Add List at Bottom</button>
        <button onClick={handleSortLatest}>Sort Latest</button>
        <button onClick={handleSortEarliest}>Sort Earliest</button>
      </div>
      <ul>
        <li><span>Id</span>
        <span>Item </span>
        <span>created At</span>
        </li>
        {todo.map((todo) => (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.item}</span>
            <span>{todo.createdAt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List1
