import GoogleDocEmbed from "../components/GoogleDocEmbed.jsx";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const WriteUp_0 = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetch("/write0.txt")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading the file:", error));
  }, []);

  return (
    <div className="bg-white h-screen w-screen flex flex-col justify-center items-center text-black p-4">
      <h1 className="text-xl font-bold mb-4">WriteUp_0</h1>
      <pre className="text-gray-700 bg-gray-100 p-4 rounded w-3/4 mb-4">
      <GoogleDocEmbed docId={"2PACX-1vTuMRcJlLCFNtNQC9vw6quRtP3u1XEABgZ_qEiHQxjM_QnBkfcRVtkpgW4sSBt_X1NTW5iMTnQdPu3D"} height="500px" />
      </pre>
      <button
        onClick={() => navigate(-1)} // Navigate back
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default WriteUp_0;
