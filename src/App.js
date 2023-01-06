function App() {
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} type="">
          {i}
        </button>
      );
    }

    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span>0
        </div>
        <div className="operators">
          <button type="">/</button>
          <button type="">*</button>
          <button type="">+</button>
          <button type="">-</button>

          <button type="">DEL</button>

          <div className="digits">
            {createDigits()}
            <button type="">0</button>
            <button type="">.</button>
            <button type="">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
