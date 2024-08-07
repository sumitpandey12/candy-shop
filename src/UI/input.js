import React from "react";

const Input = (props) => {
  return (
    <div className={`flex flex-col items-start ${props.className}`}>
      <label className="mb-2">{props.label}</label>
      <input
        className="block w-full rounded-md border-0 py-1.5 pl-2 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      ></input>
    </div>
  );
};

export default Input;
