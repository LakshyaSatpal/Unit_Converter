import React, { useState } from "react";
import MainBox from "./components/UI/MainBox";
import Form from "./components/ConverterForm/Form";
import Result from "./components/Result/Result";

const App = () => {
  const [resultState, setResultState] = useState({
    amount: null,
    from: "km",
    to: "km",
    isFormValid: false,
  });

  let isFormValid = true;
  const convertHandler = (fromAmountTo) => {
    if (fromAmountTo.amount <= 0) {
      isFormValid = false;
    }
    // console.log(resultState);
    setResultState({
      ...fromAmountTo,
      isFormValid: isFormValid,
    });
  };
  return (
    <MainBox>
      <Form onConvert={convertHandler} />

      <Result
        amount={resultState.amount}
        from={resultState.from}
        to={resultState.to}
        isValid={resultState.isFormValid}
      />
    </MainBox>
  );
};

export default App;
