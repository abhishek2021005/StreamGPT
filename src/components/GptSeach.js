// // import React, { useState } from "react";
// // import GptSearchBar from "./GptSearchBar";
// // import GptMovieSuggestion from "./GptMovieSuggestion";
// // import { BACKGROUND_URL } from "../utils/constants";

// // const GptSeach = () => {
// //   return (
// //     <>
// //       <div className="fixed -z-10">
// //         <img
// //           src={BACKGROUND_URL}
// //           alt=""
// //           className="object-cover h-screen sm:object-cover sm:h-screen md:h-full "
// //         />
// //       </div>

// //       <div className="">
// //         <GptSearchBar />
// //         <GptMovieSuggestion />
// //       </div>
// //     </>
// //   );
// // };

// // export default GptSeach;

import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_URL } from "../utils/constants";
import ApiKeyPopup from "./ApiKeyPopup";

const GptSeach = () => {
  const [isApiKeyPopupOpen, setIsApiKeyPopupOpen] = useState(true);

  const handleOpenPopup = () => {
    setIsApiKeyPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsApiKeyPopupOpen(false);
  };

  const handleApiKeySubmit = (apiKey) => {
    // Simulate API key validation logic here
    if (apiKey === "valid-api-key") {
      alert("API key submitted successfully!");
      setIsApiKeyPopupOpen(false); // Close popup on valid key submission
    } else {
      alert("Invalid API key. Please try again.");
    }
  };

  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src={BACKGROUND_URL}
          alt=""
          className="object-cover h-screen sm:h-screen md:h-full"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        {/* ApiKeyPopup */}
        {isApiKeyPopupOpen && (
          <ApiKeyPopup
            onClose={handleClosePopup}
            onSubmit={handleApiKeySubmit}
          />
        )}

        {/* GPT Search Bar */}

        <GptSearchBar />

        {/* GPT Movie Suggestion */}
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSeach;

// import React, { useState } from "react";
// import GptSearchBar from "./GptSearchBar";
// import GptMovieSuggestion from "./GptMovieSuggestion";
// import { BACKGROUND_URL } from "../utils/constants";
// import ApiKeyPopup from "./ApiKeyPopup";

// const GptSeach = () => {
//   const [isApiKeyPopupOpen, setIsApiKeyPopupOpen] = useState(false);

//   const handleOpenPopup = () => {
//     setIsApiKeyPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsApiKeyPopupOpen(false);
//   };

//   const handleApiKeySubmit = (apiKey) => {
//     // Simulate API key validation logic here
//     if (apiKey === "valid-api-key") {
//       alert("API key submitted successfully!");
//       setIsApiKeyPopupOpen(false); // Close popup on valid key submission
//     } else {
//       alert("Invalid API key. Please try again.");
//     }
//   };

//   return (
//     <>
//       {/* Background Image */}
//       <div className="fixed inset-0 z-0">
//         <img
//           src={BACKGROUND_URL}
//           alt=""
//           className="object-cover h-screen sm:h-screen md:h-full"
//         />
//       </div>

//       {/* Main Content Area */}
//       <div className="relative z-10">
//         {/* ApiKeyPopup */}
//         {isApiKeyPopupOpen && (
//           <ApiKeyPopup
//             onClose={handleClosePopup}
//             onSubmit={handleApiKeySubmit}
//           />
//         )}

//         {/* GPT Search Bar */}
//         <GptSearchBar />

//         {/* GPT Movie Suggestion */}
//         <GptMovieSuggestion />
//       </div>
//     </>
//   );
// };

// export default GptSeach;
