import React from 'react'
import * as icons from "react-icons/bi";

export const BiIcon = ({ as, ...rest }) => {
    const IconStance = icons[as];
    return <IconStance {...rest} />;
}
