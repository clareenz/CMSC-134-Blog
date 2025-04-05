import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {styles} from "./styles";
import "./styles.css";

const MainPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);

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
    {
      title: "RSA & Code Walkthrough",
      content: `RSA is based on the mathematical difficulty of factoring large prime numbers, making it incredibly secure. This write-up explores how RSA encryption and digital signatures work—from generating key pairs and saving/loading keys to encrypting, decrypting, signing, and verifying messages. It also demonstrates the effects of random padding in producing different outputs for the same message, ensuring confidentiality, integrity, and authentication in cybersecurity.`,
      image: "three.png",
      link: "/writeup2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWriteup = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % writeups.length;
      setActiveSection("writeups");
      setActiveSubSection(`writeups-writeup${newIndex}`);
      return newIndex;
    });
  };

  const prevWriteup = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? writeups.length - 1 : prevIndex - 1;
      setActiveSection("writeups");
      setActiveSubSection(`writeups-writeup${newIndex}`);
      return newIndex;
    });
  };

  return (
    <div className="w-screen">
      {/* Top Left Corner Menu */}
      <div className={styles.menuContainer}>
        <ul>
          {[
            { id: "home", label: "The Phishermen" },
            {
              id: "writeups",
              label: "Writeups",
              subMenu: [
                { id: "writeup0", label: "Writeup 0", index: 0 },
                { id: "writeup1", label: "Writeup 1", index: 1 },
                { id: "writeup2", label: "Writeup 2", index: 2 },
              ],
            },
            { id: "authors", label: "Authors" },
          ].map(({ id, label, subMenu }) => (
            <li
              key={id}
              className={styles.menuItem}
              onMouseEnter={() => setHoveredSection(id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <a
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={styles.menuLink}
              >
                <span
                  className={`${styles.menuLinkSpan} ${
                    activeSection === id || hoveredSection === id
                      ? styles.activeLink
                      : styles.defaultLink
                  }`}
                >
                  {label}
                </span>
              </a>

              {subMenu && (
                <ul
                  className={`${styles.subMenu} ${
                    hoveredSection === id ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {subMenu.map(({ id: subId, label: subLabel, index }) => (
                    <li key={subId} className={styles.subMenuItem}>
                      <a
                        href="#writeups"
                        onClick={(e) => {
                          e.preventDefault();
                          // Set the main section to "writeups"
                          setActiveSection("writeups");
                          // Set the active submenu and update the current index
                          setActiveSubSection(`writeups-${subId}`);
                          setCurrentIndex(index);
                          // Scroll to the Writeups section
                          const section = document.getElementById("writeups");
                          if (section) {
                            section.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }}
                        className={styles.subMenuLink}
                      >
                        <span
                          className={`${styles.subMenuLinkSpan} ${
                            activeSubSection === `writeups-${subId}`
                              ? styles.activeSubLink
                              : styles.defaultSubLink
                          }`}
                        >
                          {subLabel}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Home Section */}
      <section id="home" className={styles.sSection}>
        <div className={styles.homeBackground}></div>
        <div className={styles.cContent}>
          <div className={styles.gGrid0}>
            <div>
              <h2 className={styles.homeHeading}>
                Goodbye World! Oh wait— Hello World!
              </h2>
              <p className={styles.homeText}>
                This page contains submissions for CMSC 134—all the write-ups
                assigned to us by our teacher about cybersecurity. The content
                might even include memes on the topic. Who knows where this will
                end up? But one thing’s for sure: the Earth is round.
              </p>
              <br />
              <p className={styles.homeFooter}>CMSC 134: Cybersecurity</p>
            </div>

            {/* Image Section */}
            <div className={styles.imageWrapper}>
              <div className={styles.origamiImageContainer}>
                <img
                  src="four.png"
                  alt="Origami Cybersecurity"
                  className={styles.origamiImage}
                  style={{ filter: "invert(50%)" }}
                />
                <img
                  src="blacksquare.png"
                  alt="Origami Cybersecurity"
                  className={styles.origamiBgImage1}
                />
                <img
                  src="blacksquare.png"
                  alt="Origami Cybersecurity"
                  className={styles.origamiBgImage2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writeup Section */}
      <section id="writeups" className={styles.sSection}>
        <div className={styles.writeupBackground}></div>
        <div className={styles.cContent}>
          <div className={styles.gGrid1}>
            {/* Image Section */}
            <div className={styles.imageWrapper}>
              <div className={styles.writeupImageContainer}>
                <img
                  src={writeups[currentIndex].image}
                  alt="Writeup"
                  className={styles.writeupImage}
                  style={{ filter: "invert(50%)" }}
                />
                <img
                  src="blacksquare.png"
                  className={styles.writeupBgImage1}
                  alt="Background"
                />
                <img
                  src="blacksquare.png"
                  className={styles.writeupBgImage2}
                  alt="Background"
                />
              </div>
            </div>
            {/* Content Section */}
            <div>
              <h2 className={styles.writeupTitle}>
                {writeups[currentIndex].title}
              </h2>
              <p className={styles.writeupContent}>
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
        </div>
        {/* Navigation Arrows */}
        <div className={styles.navArrowsContainer}>
          <button onClick={prevWriteup} className="custom-button">
            ⬅ Prev
          </button>
          <button onClick={nextWriteup} className="custom-button">
            Next ➡
          </button>
        </div>
      </section>

      {/* Authors Section */}
      <section id="authors" className={styles.authorsSection}>
        <div className={styles.authorsContainer}>
          <h2 className={styles.authorsHeading}>Meet the Authors</h2>
          <div className={styles.authorsGrid}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`${styles.teamMemberCard} animate__delay-${index}s`}
              >
                <div className={styles.teamMemberCardContainer}>
                  {/* Front Card */}
                  <div className={styles.teamMemberFront}>
                    <img
                      src={member.image}
                      alt="Team member"
                      className={styles.teamMemberImage}
                    />
                    <h3 className={styles.teamMemberName}>{member.name}</h3>
                  </div>

                  {/* Back Card */}
                  <div className={styles.teamMemberBack}>
                    <h3 className={styles.teamMemberBackName}>{member.name}</h3>
                    <p className={styles.teamMemberBackMotto}>
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
