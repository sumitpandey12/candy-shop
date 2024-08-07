import React from "react";

const Card = (props) => {
  return (
    <div
      className={`relative flex p-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
