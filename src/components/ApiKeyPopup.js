// import React, { useState } from "react";

// const ApiKeyPopup = ({ onClose }) => {
//   const [apiKey, setApiKey] = useState("");
//   const [error, setError] = useState("");

//   const handleInputChange = (event) => {
//     setApiKey(event.target.value);
//     setError(""); // Clear any existing errors when typing
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!apiKey.trim()) {
//       setError("API key cannot be empty");
//       return;
//     }
//     // Handle API key submission logic here (e.g., validate, store, or send to backend)
//     // Example: console.log('API Key submitted:', apiKey);
//     onClose(); // Close the popup after submitting
//   };

//   const handleCancel = () => {
//     onClose(); // Close the popup on cancel
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-xl font-bold mb-4">API Key Required</h2>
//         <p className="mb-4">
//           Please provide your GPT API key as my API's limit has been exceeded.
//           If you do not have an API key and want to see its working, go to my
//           <a
//             href="https://github.com/your-username/your-repo"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             GitHub Repository
//           </a>
//           and check the README where screenshots are shown.
//         </p>
//         <form onSubmit={handleSubmit}>
//           <label className="block mb-2 font-medium">Enter API Key:</label>
//           <input
//             type="text"
//             className={`w-full p-2 border rounded-lg mb-4 ${
//               error ? "border-red-500" : "border-gray-300"
//             }`}
//             value={apiKey}
//             onChange={handleInputChange}
//             required
//           />
//           {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
//               onClick={handleCancel} // Close on Cancel button click
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApiKeyPopup;

import React, { useState } from "react";

const ApiKeyPopup = ({ onClose, onSubmit }) => {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setApiKey(event.target.value);
    setError(""); // Clear any existing errors when typing
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!apiKey.trim()) {
      setError("API key cannot be empty");
      return;
    }
    // Pass API key to parent component for validation
    onSubmit(apiKey);
  };

  const handleCancel = () => {
    onClose(); // Close the popup on cancel
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">API Key Required</h2>
        <p className="mb-4">
          Please provide your GPT API key as my API's limit has been exceeded.
          If you do not have an API key and want to see its working, go to my
          <a
            href="https://github.com/abhishek2021005/StreamGPT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Repository
          </a>
          and check the README file where screenshots are shown.
        </p>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">Enter API Key:</label>
          <input
            type="text"
            className={`w-full p-2 border rounded-lg mb-4 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            value={apiKey}
            onChange={handleInputChange}
            required
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
              onClick={handleCancel} // Close on Cancel button click
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApiKeyPopup;
