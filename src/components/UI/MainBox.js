import React from "react";
import classes from "./MainBox.module.css";
import Bgimg from "../../assets/bg.jpg";

const Backgound = () => {
  return (
    <div className={classes.bg}>
      <img src={Bgimg} alt="Blue background image" />
    </div>
  );
};

const MainBox = (props) => {
  return (
    <React.Fragment>
      <Backgound />
      <div className={classes["main-container"]}>{props.children}</div>
    </React.Fragment>
  );
};

export default MainBox;
