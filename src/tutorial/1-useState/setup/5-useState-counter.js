import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = (val) => {
    setValue(val + 1);
  };

  const handleComplexIncrease = () => {
    setTimeout(() => {
      // this gets the current value unlike the 'setValue(value + 1);' and considers clicks during the 2 sec delay
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => handleIncrement(value)}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleComplexIncrease}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
