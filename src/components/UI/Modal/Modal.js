import React from "react";
import "./Modal.css";
import Auxil from "../../../hocComp/Auxil";
import Backdrop from "../Backdrop/Backdrop";
const Modal = (props) => {
  return (
    <Auxil>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxil>
  );
};

export default Modal;
