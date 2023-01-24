import { useState, useEffect } from "react";
import axios from "axios";
import Todos from "./components/todoItem/Todos";
import Input from "./components/input/Input";
import Example from "./components/modal/Modal";

function App() {
  // state declaration
  const [todo, setTodo] = useState([]);
  const [userTodo, setUserTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(0);

  // variable declaration
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`;

  //fetch data from api
  const getTodoFun = async () => {
    const request = await fetch(`http://localhost:400/todos`);
    const responce = await request.json();
    setTodo(responce);
  };

  //add todo function
  const postTodoFun = async () => {
    if (userTodo !== "") {
      const request = await axios.post(`http://localhost:400/todos`, {
        // id: Math.floor(Math.random() * 1000),
        item: userTodo,
        time: time,
      });
      setTodo([...todo, request.data]);
    }
  };

  //delete function
  const deleteTodo = async (id) => {
    const req = await axios.delete(`http://localhost:400/todos/${id}`);
    setTodo([req]);
    getTodoFun();
  };

  //update function
  const updateTodo = async (id) => {
    setIsUpdate(true);
    setUpdateId(id);
    console.log(id);
    // const req = await axios.put(`http://localhost:400/todos/${id}`, {});
  };

  // console.log(updateId)

  //use Effect run Once
  useEffect(() => {
    getTodoFun();
  }, []);

  //use Effect run whenever userTodo update
  useEffect(() => {
    postTodoFun();
  }, [userTodo]);

  return (
    <>
      <h2>Iam React Json Server</h2>
      <Input userTodo={(e) => setUserTodo(e)} placeholder="Todos" />
      <Todos
        todo={todo}
        settodo={setTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        isupdate={isUpdate}
        updateid={updateId}
        fetch={getTodoFun}
      />
    </>
  );
}

export default App;
