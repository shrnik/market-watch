import React from "react";

export const DropDownItem = props => {
  return (
    <li className="dropdownItem" onClick={e => props.onClick(e, props.item)}>
      <div className="name">{props.item}</div> 
      <div className = "badge"> NSE</div>
    </li>
  );
};
