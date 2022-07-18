import React from "react";
import * as icons from "react-icons/fi";

export const FiIcon = ({ as, ...rest }) => {
    const IconStance = icons[as];
    return <IconStance {...rest} />;
};
