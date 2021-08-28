import { useEffect, useState } from "react";
import classes from "./Result.module.css";

const Result = (props) => {
  const [toBump, setToBump] = useState(false);
  useEffect(() => {
    setToBump(true);
    const timer = setTimeout(() => {
      setToBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [props]);
  const isAmountEmpty = props.amount === null;
  const conversions = [
    {
      from: "km",
      to: "m",
      factor: 1000,
    },
    {
      from: "m",
      to: "km",
      factor: 1 / 1000,
    },
    {
      from: "km",
      to: "cm",
      factor: 100000,
    },
    {
      from: "cm",
      to: "km",
      factor: 1 / 100000,
    },
    {
      from: "km",
      to: "feet",
      factor: 3280.84,
    },
    {
      from: "feet",
      to: "km",
      factor: 1 / 3280.84,
    },
    {
      from: "km",
      to: "inch",
      factor: 39370.1,
    },
    {
      from: "inch",
      to: "km",
      factor: 1 / 39370.1,
    },
    {
      from: "m",
      to: "cm",
      factor: 100,
    },
    {
      from: "cm",
      to: "m",
      factor: 1 / 100,
    },
    {
      from: "m",
      to: "feet",
      factor: 3.28084,
    },
    {
      from: "feet",
      to: "m",
      factor: 1 / 3.28084,
    },
    {
      from: "m",
      to: "inch",
      factor: 39.3701,
    },
    {
      from: "inch",
      to: "m",
      factor: 1 / 39.3701,
    },
    {
      from: "cm",
      to: "feet",
      factor: 0.0328084,
    },
    {
      from: "feet",
      to: "cm",
      factor: 1 / 0.0328084,
    },
    {
      from: "cm",
      to: "inch",
      factor: 0.393701,
    },
    {
      from: "inch",
      to: "cm",
      factor: 1 / 0.393701,
    },
    {
      from: "feet",
      to: "inch",
      factor: 12,
    },
    {
      from: "inch",
      to: "feet",
      factor: 1 / 12,
    },
  ];
  const multiplyingFactorIndex = conversions.findIndex((con) => {
    return props.from === con.from && props.to === con.to;
  });
  let multiplyingFactor;
  if (props.from === props.to) {
    multiplyingFactor = 1;
  } else {
    multiplyingFactor = conversions[multiplyingFactorIndex].factor;
  }

  const result = (props.amount * multiplyingFactor).toFixed(2);

  return (
    <div className={classes.result}>
      {isAmountEmpty ? (
        <p
          className={`${classes["result-text"]} ${toBump ? classes.bump : ""}`}
        >
          Please enter some value of amount.
        </p>
      ) : props.isValid ? (
        <p
          className={`${classes["result-text"]} ${toBump ? classes.bump : ""}`}
        >
          {props.amount}
          {props.from} is {result}
          {props.to}
        </p>
      ) : (
        <p
          className={`${classes["result-text"]} ${toBump ? classes.bump : ""} ${
            classes.invalid
          }`}
        >
          Invalid input.
        </p>
      )}
    </div>
  );
  // return;
};

export default Result;
