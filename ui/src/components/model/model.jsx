import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./model.css";

export default function HeaderCon() {
  const [show, setShow] = useState(false);

  const [select, setSelect] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chooes your loction</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Delivery options and delivery speed may very for different location!
        </Modal.Body>
        <Button className="btn-1">Sign in to see your address</Button>
        <hr />

        <div className="box">
          <form>
            <div className="box-1">
              <label htmlFor="">Enter a Zip Code</label> <br />
              <input type="text" />
              <button className="btn-2 ">Apply</button>
            </div>
            <hr className="hr-tag" />
            <select
              name="cars"
              id="cars"
              value={select}
              className="select"
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </form>
        </div>
        <div>
          <Button className="btn-3">Done</Button>
        </div>
      </Modal>
    </>
  );
}
