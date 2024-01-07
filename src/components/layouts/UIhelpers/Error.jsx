import React from "react";

const Error = ({ error }) => {
  return (
    <div
      class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p class="font-bold">Be Warned</p>
      <p>{error}</p>
    </div>
  );
};

export default Error;
