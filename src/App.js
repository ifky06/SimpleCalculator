import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const opt = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    if ((opt.includes(value) && calc === "") || (opt.includes(value) && opt.includes(calc.slice(-1)))) {
      return;
    }

    setCalc(calc + value);

    if (!opt.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i} type="">
          {i}
        </button>
      );
    }

    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button type="" onClick={() => updateCalc("/")}>
            /
          </button>
          <button type="" onClick={() => updateCalc("*")}>
            *
          </button>
          <button type="" onClick={() => updateCalc("+")}>
            +
          </button>
          <button type="" onClick={() => updateCalc("-")}>
            -
          </button>

          <button type="" onClick={deleteLast}>
            DEL
          </button>
        </div>
        <div className="digits">
          {createDigits()}
          <button type="" onClick={() => updateCalc("0")}>
            0
          </button>
          <button type="" onClick={() => updateCalc(".")}>
            .
          </button>
          <button type="" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
