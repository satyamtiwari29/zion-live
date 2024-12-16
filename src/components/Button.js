import React from "react";

const Button = ({ classes, text, style, onClick }) => {
    return (
        <button className={`btn ${classes} py-2 px-3 fw-normal fs-5`} style={style} onClick={(e) => onClick(e)}>
            {text}
        </button>
    )
}

export default Button