import React from "react";

const DemoCard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
      {/* <p className="font-bold text-xl mb-2">Demo Account</p> */}
      <p className="text-gray-700 text-base px-4">
        <strong>Demo Account(Sign In):</strong>
        <br />
        <strong>Email:</strong> as4@gmail.com <br />
        <strong>Password:</strong> Avhi@1234
      </p>
    </div>
  );
};

export default DemoCard;
