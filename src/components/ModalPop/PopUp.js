import React from "react";
import "./PopUp.css";
import { Modal, Button } from "react-bootstrap";

function PopUp({ show, handleClose, adjustFeature, createNewFeature }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Button onClick={adjustFeature} className="btnCloseModal">
          Adjust in next installment
        </Button>
        <Button onClick={createNewFeature} className="btnCloseModal">
          Create New installment
        </Button>
      </Modal>
    </>
  );
}

export default PopUp;
