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
    <div className="bg-gradient-to-b from-[#F4F4F4] to-[#dfdddd] py-20 w-screen flex flex-col items-center text-black p-4">
      <h1 className="text-xl font-bold mb-4">Title</h1>
      <div className="bg-white p-6 rounded-xl shadow-xl w-3/4 mb-4">
        <pre className="text-gray-700">{content}</pre>
      </div>
      <button
        onClick={() => navigate(-1)} // Navigate back
        className="fixed bottom-4 left-4  overflow-hidden text-white px-6 py-3 bg-black rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95"
      >
        Back
      </button>
    </div>
  );
};

export default WriteUp_0;
