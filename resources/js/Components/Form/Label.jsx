import React from "react";

export const Label = ({ forInput, value, className, children }) => {
    return (
        <label htmlFor={forInput} className={`form-label ` + className}>
            {value ? value : children}
        </label>
    );
};
