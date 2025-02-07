import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Footer from "../components/Footer";

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
            { id: "authors", label: "Authors" },
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
                className="absolute top- left-70 w-[50%] h-full object-cover drop-shadow-md opacity-10"
              />
              <img
                src="blacksquare.png"
                alt="Origami Cybersecurity"
                className="absolute top-40 left-30 w-[50%] h-full object-cover rotate-90 drop-shadow-md opacity-100"
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
          <div className="flex justify-center gap-8">
            {/* Origami Image */}
            <div className="relative w-[400px] h-[400px]">
              <img
                src="five.png"
                alt="Origami Cybersecurity"
                className="absolute top-0 left-0 w-full h-full object-cover drop-shadow-md z-10"
                style={{
                  filter: "invert(50%)",
                }}
              />
              <img
                src="blacksquare.png"
                alt="Origami Cybersecurity"
                className="absolute top-25 left-[-10%] w-[40%] h-[50%] object-cover drop-shadow-md opacity-100"
              />

              <img
                src="blacksquare.png"
                alt="Origami Cybersecurity"
                className="absolute top-40 left-10 w-[50%] h-full object-cover rotate-90 drop-shadow-md opacity-10"
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-3xl font-semibold text-[#000000] mb-4">
                I Know There Are a Lot of Problems in My Area, I Have a Mirror
              </h2>
              <div className="text-gray-700 text-md font-light leading-relaxed text-justify">
                <p>
                  No matter how advanced security gets, humans always find a way
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
                  mall.
                </p>
              </div>
              <br />
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
