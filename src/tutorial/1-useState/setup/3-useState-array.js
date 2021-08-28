import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {" "}
      <ul>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <li key={id} className="item">
              <h4>{name}</h4>
              <button
                type="button"
                onClick={() => {
                  setPeople(people.filter((per) => id !== per.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Delete All
      </button>
    </>
  );
};

export default UseStateArray;
