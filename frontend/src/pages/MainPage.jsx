import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./styles.css";

const MainPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState(null);

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

  const writeups = [
    {
      title: "Error 404: Human Security Not Found",
      content: `No matter how advanced security gets, humans always find a way
                  to speedrun getting hacked. From using "iloveyou" as a
                  password to signing into a fake Steam giveaway faster than you
                  can say "free gift ni?", we're often the biggest threat to our
                  own security. This write-up dives into the human side of
                  cybersecurity fails—whether it's falling for phishing scams
                  ("Akala ko need for security"—famous last words), ignoring
                  two-factor authentication ("Samok kaayo"), or reusing the same
                  password everywhere ("Kinsa gud mag-hack nako?"). It also
                  looks at the eternal struggle between usability and
                  security—because when security gets too strict, people start
                  writing passwords on sticky notes or rage-quitting sign-ins
                  altogether. At the end of the day, cybersecurity isn’t just
                  about strong encryption—it’s about making sure we don’t
                  accidentally hand over our accounts like free samples at the
                  mall.`,
      image: "five.png",
      link: "/writeup0",
    },
    {
      title: "Buffer overflow to exit",
      content: `The purpose of this machine problem is to exploit a stack-based
      buffer overflow in a vulnerable program to force it to exit cleanly using
      shellcode. This is achieved by overwriting the return address and redirecting
      execution to our custom shellcode injected into memory.`,
      image: "seven.png",
      link: "/writeup1",
    },
    // Add more writeups here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWriteup = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % writeups.length);
  };

  const prevWriteup = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? writeups.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Top Left Corner Menu */}
      <div className="fixed top-0 left-0 bg-transparent py-10 px-5 z-20">
        <ul>
          {[
            { id: "home", label: "The Phishermen" },
            {
              id: "writeups",
              label: "Writeups",
              subMenu: [
                { id: "writeup0", label: "Writeup 0", index: 0 },
                { id: "writeup1", label: "Writeup 1", index: 1 },
              ],
            },
            { id: "authors", label: "Authors" },
          ].map(({ id, label, subMenu }) => (
            <li
              key={id}
              className="py-1 transition-all"
              onMouseEnter={() => setHoveredSection(id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <a href={`#${id}`} onClick={() => setActiveSection(id)}>
                <div className="w-40 flex items-center">
                  <span
                    className={`w-full text-left transition-all py-2 pl-2 rounded-r-xl ${
                      activeSection === id
                        ? "bg-black text-white" // Active section stays black
                        : hoveredSection === id
                        ? "bg-black text-white" // Hover effect
                        : "bg-transparent text-black" // Default state
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </a>

              {/* Submenu */}
              {subMenu &&
                hoveredSection &&
                activeSection.startsWith("writeups") && (
                  <ul className="pl-4">
                    {subMenu.map(({ id, label, index }) => (
                      <li key={id} className="py-1">
                        <a
                          href={`#${id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSection(`writeups-${id}`); // Keep main menu active while tracking submenu
                            setCurrentIndex(index);

                            // Smooth scroll to section
                            const section = document.getElementById(id);
                            if (section) {
                              section.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }}
                        >
                          <div className="w-40 flex items-center">
                            <span
                              className={`w-full text-left transition-all py-2 pl-2 rounded-r-xl ${
                                activeSection === `writeups-${id}`
                                  ? "bg-black text-white" // Active submenu
                                  : "hover:bg-black hover:text-white bg-transparent text-black" // Default & Hover
                              }`}
                            >
                              {label}
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
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
              Goodbye World! Oh wait— Hello World!
            </h2>
            <p>
              This page contains submissions for CMSC 134—all the write-ups
              assigned to us by our teacher about cybersecurity. The content
              might even include memes on the topic. Who knows where this will
              end up? But one thing’s for sure: the Earth is round.
            </p>
            <br />
            <br />
            <p className="text-sm">CMSC 134: Cybersecurity</p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center gap-8">
            {/* Origami Image */}
            <div className="relative w-[500px] h-[500px]">
              <img
                src="four.png"
                alt="Origami Cybersecurity"
                className="absolute top-0 left-0 w-full h-full object-cover drop-shadow-md z-10"
                style={{
                  filter: "invert(50%)",
                }}
              />
              <img
                src="blacksquare.png"
                alt="Origami Cybersecurity"
                className="absolute top- left-80 w-[50%] h-full object-cover drop-shadow-md opacity-10"
              />
              <img
                src="blacksquare.png"
                alt="Origami Cybersecurity"
                className="absolute top-65 left-35 w-[50%] h-[70%] object-cover rotate-90 drop-shadow-md opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="writeups"
        className="py-12 bg-gradient-to-b from-[#EAEAEA] to-[#dad8d8] p-50 pt-30"
      >
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-center gap-8">
            <div className="relative w-[400px] h-[400px]">
              <img
                src={writeups[currentIndex].image}
                alt="Writeup Image"
                className="absolute top-0 left-0 w-full h-full object-cover drop-shadow-md z-10"
                style={{
                  filter: "invert(50%)",
                }}
              />
              <img
                src="blacksquare.png"
                className="absolute top-25 left-[-10%] w-[40%] h-[50%] object-cover drop-shadow-md opacity-100"
              />
              <img
                src="blacksquare.png"
                className="absolute top-40 left-10 w-[50%] h-full object-cover rotate-90 drop-shadow-md opacity-10"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#000000] mb-4">
              {writeups[currentIndex].title}
            </h2>
            <p className="text-gray-700 text-md font-light leading-relaxed text-justify">
              {writeups[currentIndex].content}
            </p>
            <br />
            <button
              className="custom-button"
              onClick={() => navigate(writeups[currentIndex].link)}
            >
              Read more
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-[100px]">
          <button onClick={prevWriteup} className="custom-button">
            ⬅ Prev
          </button>
          <button onClick={nextWriteup} className="custom-button">
            Next ➡
          </button>
        </div>
      </section>

      <section
        id="authors"
        className="py-12 bg-gradient-to-b from-[#EAEAEA] to-[#dad8d8] pb-70 pt-30"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-semibold text-[#000000] mb-8 text-center animate__animated animate__fadeInUp">
            Meet the Authors
          </h2>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`max-w-sm w-full lg:w-1/4 p-4 animate__animated animate__fadeInUp animate__delay-${index}s`}
              >
                <div className="relative group">
                  {/* Front Card */}
                  <div className="bg-gradient-to-t from-gray-200 via-gray-100 to-[#DDDCDC] rounded-xl shadow-lg p-6 text-center  transition-transform duration-300 ease-in-out transform hover:shadow-xl">
                    <img
                      src={member.image}
                      alt="Team member"
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
                    />
                    <h3 className="text-xl font-mono text-black mt-4">
                      {member.name}
                    </h3>
                    {/* Optional: Member role and skills */}
                    {/* <p className="text-gray-600 text-sm">{member.role}</p> */}
                    {/* <p className="text-gray-600 text-sm">{member.skills}</p> */}
                  </div>

                  {/* Back Card (appears on hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100 to-[#DDDCDC] rounded-xl shadow-lg p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
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

      <Footer />
    </div>
  );
};

export default MainPage;
