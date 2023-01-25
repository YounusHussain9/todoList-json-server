import { useState, useEffect } from "react";
import axios from "axios";
import Todos from "./components/todoItem/Todos";
import Input from "./components/input/Input";
import Search from "./components/search/Search";

function App() {
  // state declaration
  const [todo, setTodo] = useState([]);
  const [userTodo, setUserTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(0);
  const [filterValue, setFilterValue] = useState(todo);
  const [searchField, setSearchField] = useState("");

  // variable declaration
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`;

  const SearchChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };

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
    setFilterValue([req]);
    getTodoFun();
  };

  //update function
  const updateTodo = async (id) => {
    setIsUpdate(true);
    setUpdateId(id);
  };

  //use Effect run Once
  useEffect(() => {
    getTodoFun();
  }, []);

  //use Effect run whenever userTodo update
  useEffect(() => {
    postTodoFun();
  }, [userTodo]);

  // // useffect for filtering
  useEffect(() => {
    const filtering = todo.filter((data) => {
      return data.item.toLocaleLowerCase().includes(searchField);
    });
    setFilterValue(filtering);
  }, [todo, searchField]);

  return (
    <>
      <Search onchange={SearchChange} />
      <Input userTodo={(e) => setUserTodo(e)} placeholder="Todos" />
      <Todos
        todo={filterValue}
        settodo={setFilterValue}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        setisupdate={setIsUpdate}
        isupdate={isUpdate}
        updateid={updateId}
        fetch={getTodoFun}
        time={time}
      />
    </>
  );
}

export default App;
