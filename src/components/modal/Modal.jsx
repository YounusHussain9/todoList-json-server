import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function Modaal({ data, settodo, todo, fetch, time }) {
  const [updateTodo, setUpdateTodo] = useState(data.item);
  const [show, setShow] = useState(false);

  const handleClose = async () => {
    const req = await axios.put(`http://localhost:400/todos/${data.id}`, {
      id: data.id,
      item: updateTodo,
      time: time,
    });
    settodo([...todo, req]);
    fetch();
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        📝
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              value={updateTodo}
              placeholder="s"
              autoFocus
              onChange={(e) => setUpdateTodo(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modaal;
