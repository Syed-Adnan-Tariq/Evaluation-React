import Counter from "./components/counter";
import Multiplier from "./components/multiplier";
import Subtraction from "./components/subtraction";
import Divider from "./components/divider";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(7);
  const setCountFunc = (val) => (setCounter(val), localStorage.setItem("counter", val));
  return (
    <>
    <Multiplier/>
    <Subtraction/>
    <Divider/>
    <Counter value={counter} func={setCountFunc} />
    </>
  );
}

export default App;
