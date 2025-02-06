import GoogleDocEmbed from "../components/GoogleDocEmbed.jsx";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const WriteUp_0 = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="bg-white w-screen flex flex-col items-center justify-center ">
      <div className="p-4 pt-20 space-y-2 text-center">
        <h2 className="text-black text-8xl font-bold">Human</h2>
        <h2 className="text-black text-8xl font-bold">Factors</h2>
        <h3 className="text-black text-xl font-medium">IN COMPUTER SECURITY</h3>
        <h3 className="text-black text-xl font-medium">WRITEUP 0</h3>

        <div className="mt-4">
          <img
            src="/brain.png"
            alt="brain"
            className="w-[20%] h-auto mx-auto"
          />
          <br />
          <img
            src="/page2.png"
            alt="page2"
            className="w-[90%] h-auto mx-auto"
          />
          <img
            src="/page3.png"
            alt="page2"
            className="w-[90%] h-auto mx-auto"
          />
          <img
            src="/page4.png"
            alt="page2"
            className="w-[90%] h-auto mx-auto"
          />
          <img
            src="/page5.png"
            alt="page2"
            className="w-[90%] h-auto mx-auto"
          />
        </div>
      </div>

      {/* <div>
        <GoogleDocEmbed
          docId="2PACX-1vTuMRcJlLCFNtNQC9vw6quRtP3u1XEABgZ_qEiHQxjM_QnBkfcRVtkpgW4sSBt_X1NTW5iMTnQdPu3D"
          height="600px"
        />
      </div> */}

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-4 left-4 px-6 py-3 custom-button"
      >
        Back
      </button>
    </div>
  );
};

export default WriteUp_0;
