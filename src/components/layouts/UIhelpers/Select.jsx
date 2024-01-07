import React from "react";

const Select = ({ options, onChange, selected }) => {
  return (
    <select
      className="capitalize border outline-none border-green-950"
      onChange={onChange}
      defaultValue={selected}
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
