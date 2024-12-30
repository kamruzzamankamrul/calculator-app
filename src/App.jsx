import Buttons from "./components/Buttons";
import Display from "./components/Display";
import "./App.css";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");

  const buttonOnClick = (item) => {
    if (item === "C") {
      setCalValue("");
    } else if (item === "=") {
      let result = eval(calValue);
      setCalValue(result);
    } else {
      const newDidplayValue = calValue + item;
      setCalValue(newDidplayValue);
    }
  };

  return (
    <div className="container">
      <Display calValue={calValue} />
      <Buttons buttonOnClick={buttonOnClick} />
    </div>
  );
}

export default App;
