import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Random Title");

  const handlClick = () => {
    title === "Random Title"
      ? setTitle("Hello People")
      : setTitle("Random Title");
  };
  return (
    <>
      <button type="button" className="btn" onClick={handlClick}>
        Change Title
      </button>
      <h2>{title}</h2>
    </>
  );
};

export default UseStateBasics;
