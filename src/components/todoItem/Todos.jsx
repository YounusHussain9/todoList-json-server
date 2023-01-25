// import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./todo.css";
import Modaal from "../modal/Modal";

const Todos = ({ todo, deleteTodo, updateTodo, settodo, fetch, time }) => {
  return (
    <>
      <ul>
        {" "}
        {todo.length > 0 ? (
          todo.map((data) => (
            <li key={data.id}>
              <h4>{data.item}</h4>
              <h5 className="time">{data.time}</h5>
              <section className="actions">
                <h5 onClick={() => deleteTodo(data.id)} key={data.id}>
                  ❌
                </h5>
                <Modaal
                  onClick={() => updateTodo(data.id)}
                  data={data}
                  settodo={settodo}
                  todo={todo}
                  fetch={fetch}
                  time={time}
                >
                  📝
                </Modaal>
              </section>
            </li>
          ))
        ) : (
          <h6>No Item.. </h6>
        )}
      </ul>
    </>
  );
};

export default Todos;
