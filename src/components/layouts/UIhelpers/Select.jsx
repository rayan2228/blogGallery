import React from "react";

const Select = ({ options }) => {
  return (
    <select className="capitalize outline-none border border-green-950">
      {options?.map((value, index) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
