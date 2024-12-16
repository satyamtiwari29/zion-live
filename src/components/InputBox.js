import React from "react";

const InputBox = ({ label, type, classes, id, placeholder, required }) => {
  return (
    <div className="mb-3 text-left">
      <label htmlFor={id} className="form-label ">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        type={type}
        className={`form-control p-2 ${classes}`}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default InputBox;