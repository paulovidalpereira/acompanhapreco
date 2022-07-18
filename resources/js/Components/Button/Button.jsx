import React from "react";

export const Button = ({
    type = "submit",
    className = "",
    processing,
    children,
}) => {
    return (
        <button
            type={type}
            className={`btn ${processing && "opacity-25"} ` + className}
            disabled={processing}
        >
            {children}
        </button>
    );
};
