import React from "react";

const Select = ({ options, onChange }) => {
  return (
    <select
      className="capitalize border outline-none border-green-950"
      onChange={onChange}
    >
      {options?.map((value, index) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
