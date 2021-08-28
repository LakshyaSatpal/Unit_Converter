import React from "react";
import classes from "./Select.module.css";

const Select = React.forwardRef((props, ref) => {
  return (
    <div className={classes["select-cont"]}>
      <label>{props.label}</label>
      <select ref={ref} id={props.id}>
        <option value="km">km</option>
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="feet">feet</option>
        <option value="inch">inch</option>
      </select>
    </div>
  );
});

export default Select;
