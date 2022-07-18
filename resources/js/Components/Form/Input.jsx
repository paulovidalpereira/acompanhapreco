import React, { useEffect, useRef } from "react";

export const Input = ({
    type = "text",
    name,
    id,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) => {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={`form-input ` + className}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};
