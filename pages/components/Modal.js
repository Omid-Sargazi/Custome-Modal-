import React from "react";

const Modal = ({ children, isVisible, onClose }) => {
  if (!isVisible) {
    return;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur flex justify-center items-center"
    >
      <div className="w-[600px] flex flex-col">
        <button onClick={onClose} className="text-white text-xl place-self-end">
          X
        </button>
        <div className="bg-white p-2 rounded-lg"> {children}</div>
      </div>
    </div>
  );
};

export default Modal;
