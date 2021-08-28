import React, { useRef } from "react";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import Select from "../UI/Select";

const Form = (props) => {
  const fromRef = useRef();
  const toRef = useRef();
  const amountRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredFrom = fromRef.current.value;
    const enteredTo = toRef.current.value;
    const enteredAmount = amountRef.current.value;

    const formObj = {
      amount: +enteredAmount,
      from: enteredFrom,
      to: enteredTo,
    };
    props.onConvert(formObj);
  };

  return (
    <div className={classes.form}>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            ref={amountRef}
            id="amount"
            className={classes["amount-input"]}
            type="number"
            step="0.01"
          ></input>
        </div>
        <div className={classes["input-units"]}>
          <div className={classes["from-to"]}>
            <Select ref={fromRef} label="From" id="from" />
            <Select ref={toRef} label="To" id="to" />
          </div>
          <div className={classes["main - btn"]}>
            <Button type="submit" text="Convert" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
