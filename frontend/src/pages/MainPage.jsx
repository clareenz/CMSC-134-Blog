import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';

const MainPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("mission");

  const teamMembers = [
    {
      name: "Zayne Peladas",
      motto: "404 Error: Success not found, but we’re still here!",
      image: "cat4.jpg",
    },
    {
      name: "Mc Zerrudo",
      motto: "Hack the system, but don’t forget to laugh along the way.",
      image: "cat3.jpg",
    },
    {
      name: "Nikka Mendoza",
      motto: "In cybersecurity, we’re all just one click away from chaos!",
      image: "cat5.jpg",
    },
    {
      name: "CJ Pingal",
      motto: "Keep calm and pretend you know what a firewall does.",
      image: "cat2.jpg",
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Top Left Corner Menu */}
      <div className="fixed top-0 left-0 bg-transparent py-10 px-5">
        <ul>
          {[
            { id: "home", label: "Home" },
            { id: "writeup0", label: "Writeup 0" },
            { id: "members", label: "Members" },
          ].map(({ id, label }) => (
            <li key={id} className="py-1">
              <a href={`#${id}`} onClick={() => setActiveSection(id)}>
                <div className="w-40 flex items-center">
                  <span
                    className={`w-full text-left text-black transition-all py-2  pl-2 rounded-r-xl ${
                      activeSection === id
                        ? "bg-black text-white rounded-r-xl"
                        : "hover:bg-black hover:text-white hover:rounded-r-xl"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <section
        id="home"
        className="py-12 bg-gradient-to-b from-[#F4F4F4] to-[#E2E2E2]  p-70 pt-30 pb-30"
      >
        <div className="grid grid-cols-2 items-center">
          <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
            <h2 className="text-3xl font-mono text-[#000000] mb-4">
              404 Error:
            </h2>
            <p>“Quote not found. But hey, welcome to our blog!”</p>
            <p>
              Grab a seat, relax, and enjoy the ride through our world of words!
            </p>
            <br />
            <br />
            <p className="text-sm">CMSC 134: Cybersecurity</p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center gap-8">
            {/* Origami Image */}
            <div className="relative w-[400px] h-[400px]">
              <img
                src="butterfly.png"
                alt="Origami Cybersecurity"
                className="absolute top-0 left-0 w-full h-full object-cover drop-shadow-md"
              />
              <img
                src="blacksquare.png"
                alt="Origami Cybersecurity"
                className="absolute top-0 left-0 w-full h-full object-cover drop-shadow-md opacity-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="writeup0"
        className="py-12 bg-gradient-to-b from-[#EAEAEA] to-[#dad8d8]  p-50 pt-30 pb-30"
      >
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-center">
            <img
              src="origami.png"
              alt="origami"
              className="w-full max-w-[400px] h-auto"
            />
          </div>
          <div>
            <div>
              <h2 className="text-3xl font-semibold text-[#000000] mb-4">
                Stardew Valley Incident
              </h2>
              <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                <p>
                  &quot;Teh na hack acc ko sa Steam, akong stardew nawala, andun
                  na sa Germany :(("
                </p>
                <br />
                <p>
                  "Akala ko free gift sa Steam, nagrequest siya akala ko natural
                  yon, na need sign in again for security like input password
                  etc, tas ininput ko hahaha tas shempre taas kaayo ang email sa
                  steam di kona binasa na may location pala nakalagay hahaha di
                  ko napansin kay tamad man me."
                </p>
                <div className="flex justify-end">
                  <p className="text-sm">-Nikka 2024</p>
                </div>
              </div>
            </div>
            <button
              className="custom-button"
              onClick={() => navigate("/writeup0")}
            >
              <span></span>
              Read more
            </button>
          </div>
        </div>
      </section>

      <section
        id="members"
        className="py-12 bg-gradient-to-b from-[#EAEAEA] to-[#dad8d8] pb-70 pt-30"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-semibold text-[#000000] mb-8 text-center animate__animated animate__fadeInUp">
            Members
          </h2>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`max-w-sm w-full lg:w-1/4 p-4 animate__animated animate__fadeInUp animate__delay-${index}s`}
              >
                <div className="relative group">
                  {/* Front Card */}
                  <div className="bg-gradient-to-t from-[#cfcfcf] via-gray-100 to-[#DDDCDC] rounded-xl shadow-lg p-6 text-center  transition-transform duration-300 ease-in-out transform hover:shadow-xl">
                    <img
                      src={member.image}
                      alt="Team member"
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
                    />
                    <h3 className="text-xl font-semibold text-black mt-4">
                      {member.name}
                    </h3>
                    {/* Optional: Member role and skills */}
                    {/* <p className="text-gray-600 text-sm">{member.role}</p> */}
                    {/* <p className="text-gray-600 text-sm">{member.skills}</p> */}
                  </div>

                  {/* Back Card (appears on hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#cfcfcf] via-gray-100 to-[#DDDCDC] rounded-xl shadow-lg p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold text-black">
                      {member.name}
                    </h3>
                    <p className="text-gray-700 italic mt-2">
                      "{member.motto}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <div className="text-lg font-semibold text-white ">
              Submitted by:
            </div>
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
    </div>
  );
};

export default MainPage;
