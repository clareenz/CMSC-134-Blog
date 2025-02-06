import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left Column - Branding */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white tracking-wide">
            CMSC 134 | Cybersecurity Blog
          </h2>
          <p className="text-gray-300 text-sm">
            University of the Philippines Cebu
          </p>
          <p className="text-gray-300 text-sm">
            Bachelor of Science in Computer Science
          </p>
          <div className="text-left text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} CMSC 134 | All Rights Reserved
          </div>
        </div>

        {/* Middle Column - Submission Info */}
        <div className="space-y-2">
          <div className=" text-white flex flex-col">
            <span className="text-lg font-semibold">Submitted to:</span>
            <span className="text-gray-300">Eli Edrian Tan</span>
          </div>
        </div>

        {/* Right Column - Profile Images */}
        <div>
          <div className="text-lg font-semibold text-white ">Submitted by:</div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            {[
              { src: "/cat4.jpg", name: "Zayne" },
              { src: "/cat3.jpg", name: "Mc" },
              { src: "/cat5.jpg", name: "Nikka" },
              { src: "/cat2.jpg", name: "CJ" },
            ].map(({ src, name }, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={src}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow-md hover:scale-105 transition-transform"
                />
                <span className="text-xs text-gray-400 mt-1">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
