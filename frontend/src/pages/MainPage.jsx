import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("mission");

  const teamMembers = [
    {
      name: "Zayne Peladas",
      role: "role role role",
      skills: "skills skills skills",
      motto: "Leading with passion and precision.",
      image: "cat4.jpg",
    },
    {
      name: "Mc Zerrudo",
      role: "role role role",
      skills: "skills skills skills skills",
      motto: "Coding the future, one line at a time.",
      image: "cat3.jpg",
    },
    {
      name: "Nikka Mendoza",
      role: "role role role",
      skills: "skills skills skills",
      motto: "Designing with creativity and purpose.",
      image: "cat5.jpg",
    },
    {
      name: "CJ Pingal",
      role: "role role role",
      skills: "skills skills skills",
      motto: "Ensuring quality with every click.",
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
            { id: "mission", label: "Mission" },
            { id: "vision", label: "Vision" },
            { id: "team", label: "Team" },
          ].map(({ id, label }) => (
            <li key={id} className="py-2">
              <a href={`#${id}`} onClick={() => setActiveSection(id)}>
                <div className="w-40 flex items-center">
                  <span
                    className={`w-full text-left text-black transition-all py-2 pl-2 ${
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
        id="mission"
        className="py-12 bg-gradient-to-b from-[#F4F4F4] to-[#dfdddd]  p-50 pt-30 pb-30"
      >
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-center">
            <img
              src="origami.png"
              alt="origami"
              className="w-full max-w-[300px] h-auto"
            />
          </div>
          <div>
            <div>
              <h2 className="text-3xl font-semibold text-[#000000] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg mb-4 text-justify">
                Lorem ipsum dolor sit amet. Ut illum dolores et voluptatem
                voluptatem et deleniti omnis est ullam laudantium ut voluptas
                veritatis in reprehenderit aperiam. Est neque internos et
                voluptatem eligendi qui odio quia ex internos perspiciatis ut
                rerum assumenda. Aut tempora suscipit qui impedit odio ex
                repellendus delectus est internos sint. In delectus rerum ut
                veritatis quasi et consequuntur galisum aut adipisci molestiae
                eos galisum enim ab quas quod. Et nobis dolor in voluptatibus
                distinctio id velit illum sit dolores dolorum et velit totam.
                Eos galisum explicabo vel illum doloremque et animi deleniti eos
                quae modi.
              </p>
            </div>
            <button
              className="relative overflow-hidden text-white px-6 py-3 bg-black rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95"
              onClick={() => navigate("/writeup0")}
            >
              <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-500 hover:opacity-0"></span>
              Read more
            </button>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="py-12 bg-gradient-to-b from-[#EAEAEA] to-[#dad8d8] pb-30 p-70 pt-30"
      >
        <div className="grid grid-cols-2 items-center">
          <div>
            <div>
              <h2 className="text-3xl font-semibold text-[#000000] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg mb-4 text-justify">
                Lorem ipsum dolor sit amet. Ut illum dolores et voluptatem
                voluptatem et deleniti omnis est ullam laudantium ut voluptas
                veritatis in reprehenderit aperiam. Est neque internos et
                voluptatem eligendi qui odio quia ex internos perspiciatis ut
                rerum assumenda. Aut tempora suscipit qui impedit odio ex
                repellendus delectus est internos sint. In delectus rerum ut
                veritatis quasi et consequuntur galisum aut adipisci molestiae
                eos galisum enim ab quas quod. Et nobis dolor in voluptatibus
                distinctio id velit illum sit dolores dolorum et velit totam.
                Eos galisum explicabo vel illum doloremque et animi deleniti eos
                quae modi.
              </p>
            </div>
            <button
              className="relative overflow-hidden text-white px-6 py-3 bg-black rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95"
              onClick={() => navigate("/")}
            >
              <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-500 hover:opacity-0"></span>
              Read more
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="origami.png"
              alt="origami"
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>
      </section>

      <section
        id="team"
        className="py-12 bg-gradient-to-b from-[#f1efef] to-[#ebeaea] pb-30 pt-30"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-semibold text-[#000000] mb-8 text-center animate__animated animate__fadeInUp">
            Meet the Team
          </h2>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`max-w-sm w-full lg:w-1/4 p-4 animate__animated animate__fadeInUp animate__delay-${index}s`}
              >
                <div className="relative group">
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center group-hover:scale-100 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt="Team member"
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h3 className="text-xl font-semibold mt-4">
                      {member.name}
                    </h3>
                    <p className="text-gray-700">{member.name}</p>
                    <p className="text-gray-700">{member.role}</p>
                    <p className="text-gray-700">{member.skills}</p>
                  </div>
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold mt-4">
                      {member.name}
                    </h3>
                    <p className="text-gray-700">{member.role}</p>
                    <p className="text-gray-700">{member.skills}</p>
                    <p className="text-gray-700 mt-4 italic">
                      "{member.motto}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r  bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2025 Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
