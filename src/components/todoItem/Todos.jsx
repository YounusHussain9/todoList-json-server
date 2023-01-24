// import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./todo.css";
import Update from "../updatetodo/Update";

const Todos = ({
  todo,
  deleteTodo,
  updateTodo,
  settodo,
  isupdate,
  updateid,
  fetch,
}) => {
  return (
    <>
      <ul>
        {" "}
        {todo.length > 0 &&
          todo.map((data) =>
            data.id === updateid ? (
              isupdate === true && (
                <Update
                  data={data}
                  updateid={updateid}
                  settodo={settodo}
                  fetch={fetch}
                  isupdate={isupdate}
                />
              )
            ) : (
              <li key={data.id}>
                <h4>{data.item}</h4>
                <h5 className="time">{data.time}</h5>
                <section className="actions">
                  <h5 onClick={() => deleteTodo(data.id)} key={data.id}>
                    ❌
                  </h5>
                  <h5 onClick={() => updateTodo(data.id)}>📝</h5>
                </section>
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default Todos;
