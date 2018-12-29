import React from 'react';

export const DropDownItem=(props)=>{
    return(
        <li className="dropdownItem" onClick={e=>props.onClick(e,props.item)}>{props.item}</li>
    )
}