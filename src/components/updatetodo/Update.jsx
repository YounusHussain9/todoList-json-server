import axios from "axios";
import React, { useState } from "react";
import Todos from "../todoItem/Todos";
// import Todos from "../todoItem/Todos";
import "./update.css";

const Update = ({ data, updateid, settodo, fetch, isupdate }) => {
  const [updateTodo, setUpdateTodo] = useState(data.item);
  const [updatedTodo, setUpdatedTodo] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setUpdatedTodo(updateTodo.trim());
  };

  const update = async () => {
    const req = await axios.put(`http://localhost:400/todos/${data.id}`, {
      id: data.id,
      item: updateTodo,
    });
    settodo(req);
    fetch();
    isupdate(false);
    console.log(isupdate);
  };

  return (
    <>
      {isupdate ? (
        <div className="update-container">
          <form onSubmit={submit}>
            <input
              type="text"
              value={updateTodo}
              onChange={(e) => setUpdateTodo(e.target.value)}
            />
          </form>
          <h5 onClick={update}>Save</h5>
        </div>
      ) : (
        <Todos />
      )}
    </>
  );
};

export default Update;
