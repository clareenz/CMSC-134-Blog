//import GoogleDocEmbed from "../components/GoogleDocEmbed.jsx";
import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "./styles.css";
import Footer from "../components/Footer";

const WriteUp_0 = () => {
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  const [showScroll, setShowScroll] = useState(false);

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="bg-white">
      <div className=" flex flex-col items-center px-50">
        <div className="text-center py-20">
          <h2 className="text-black text-8xl font-bold custom-font">Human</h2>
          <h2 className="text-black text-8xl font-bold custom-font">Factors</h2>
          <br />
          <h3 className="text-black text-xl font-light">
            IN COMPUTER SECURITY
          </h3>
          <h3 className="text-black text-xl font-light">WRITEUP 0</h3>
          <br />
          <img
            src="/brain.png"
            alt="brain"
            className="w-[50%] h-auto mx-auto py-3"
          />
          <br />
          <h3 className="text-black text-sm font-light">February 8, 2025</h3>
        </div>
        <br />
        <br />
        {/*1*/}
        <section>
          <div>
            <h2 className="text-3xl custom-font text-[#000000] mb-4">
              Stardew Valley Incident
            </h2>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p className="italic">
                &quot;Teh na hack acc ko sa Steam, akong stardew nawala, andun
                na sa Germany :(("
              </p>
              <br />
              <p className="italic">
                "Nag request siya akala ko natural yon, na need sign in again
                for security like input pass diba ana man sa iba hahaah tas ako
                ininput hahahah tas shempre taas kaayo ang email ni steam di
                kona binasa na may location pala nakalagay hahah di ko napansin
                kay tamad man me"
              </p>
              <div className="flex justify-end">
                <p className="text-sm">-Nikka 2024</p>
              </div>
              <br />
              <p>
                Computer security does not solely rely on the capabilities of
                strong encryption, firewalls, and complex security protocols,
                but it also heavily relies on human behavior. Many security
                breaches occur not because of the flaw in technology but due to
                human errors, negligence, or manipulation. Understanding how
                humans behave or interact with security systems helps in
                designing better protection that minimize risks caused by human
                factors. While security measures aim to protect systems, they
                can be ineffective if users and even developers unintentionally
                introduce vulnerabilities. So let’s dive right into the human
                factors in computer security – like weak passwords to{" "}
                <span className="italic">kasabogan ug katapol</span> to falling
                victim to social engineering attacks.
              </p>
            </div>
          </div>
          <br />
          <br />
        </section>
        {/*2*/}
        <section className="py-12 pt-10 z-10">
          <div className="grid grid-cols-2 space-x-8">
            <div className="relative">
              {/* Main Image */}
              <img
                src="meme1.png"
                alt="weakpass"
                className="relative w-full h-auto z-10"
              />
            </div>
            <div>
              <div>
                <h2 className="text-3xl custom-font text-[#000000] mb-4">
                  Weak Passwords
                </h2>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
                    Be honest, have you ever used your birthday, pet’s name, or
                    ‘123456’ as a password? If yes, please change it. Now.
                    Please.
                  </p>
                  <br />
                  <p>
                    One of the most common and preventable security risks caused
                    by human behavior is the use of weak passwords. Weak
                    passwords are common in personal accounts, workplace
                    systems, and online services where users prioritize
                    convenience over security. Many people use simple, easily
                    guessable passwords such as "123456," "password," or their
                    birthdates, making them vulnerable to cyberattacks like
                    brute force attacks and credential stuffing. If they are
                    reusing ‘password123’ everywhere, that’s like locking your
                    front door but leaving the key under a very obvious flower
                    pot labeled “KEY HERE! TAKE IT.”.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-2*/}
        <section className="relative">
          {/* Background Image */}

          {/* Grid Content */}
          <div className="grid grid-cols-2 items-center relative z-10 space-x-8">
            {/* First Column */}
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
                    The reuse of weak passwords across multiple accounts further
                    increases the risk, as a single data breach can compromise
                    multiple services. Encouraging strong, unique passwords and
                    using password managers can help mitigate these risks. The
                    devil works hard, but users should work harder in creating
                    unique passwords and practicing good security habits.
                  </p>
                </div>
              </div>
            </div>
            {/* Second Column */}
            <div className="flex justify-center">
              <img
                src="meme2.png"
                alt="weakpass"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
          <br />
          <br />
        </section>

        <section className="py-1 pt-20 relative">
          {/* Extended Background Image */}
          {/* Content */}
          <div className="grid grid-cols-2 space-x-8 relative z-10">
            {/* First Column */}
            <div className="flex flex-col">
              <h2 className="text-3xl custom-font text-[#000000] mb-4">
                Phishing Attacks
              </h2>
              <div className="justify-center">
                <img
                  src="meme3.png"
                  alt="phishing"
                  className="w-full h-auto z-10"
                />
              </div>
            </div>

            {/* Second Column */}
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify pt-16">
                  <p className="italic">
                    Another common security risk that baits humans with their
                    naivety is phishing. “What is phishing? Is it similar to
                    fishing?”, you might ask. Yes. In a way.
                  </p>
                  <br />
                  <p>
                    Phishing attacks are a type of cyberattack where attackers
                    trick people into revealing sensitive information, such as
                    passwords, credit card numbers, or personal data. This is
                    usually done by impersonating a trusted identity, like a
                    bank, a social media platform, or government agency.
                  </p>
                  <br />
                  <p className="italic">
                    All of this sounds familiar. Was Nikka the fish, and the
                    Steam gift the bait that reeled in her personal information
                    and caught her account? Yes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*-2*/}
        <section className="relative pt-10">
          {/* Background Image */}

          {/* Grid Content */}
          <div className="grid grid-cols-2 items-center relative z-10 space-x-8">
            {/* First Column */}
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
                    Phishing works by sending fake emails or messages that look
                    like it comes from a legitimate source. The messages often
                    contain links to fake websites, then the fake website may
                    ask for login credentials or other personal details, which
                    are then stolen. The attacker uses the stolen data to access
                    accounts, commit fraud, or even do so much worse.
                  </p>
                </div>
              </div>
            </div>
            {/* Second Column */}
            <div className="flex justify-center">
              <img
                src="meme4.png"
                alt="weakpass"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
          <br />
          <br />
        </section>
        <section className="py-12 pt-10 relative">
          <div className="grid grid-cols-2 space-x-8">
            <div className="justify-center">
              <img
                src="meme5.png"
                alt="fatigue"
                className="w-full h-auto relative"
              />
            </div>
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <div>
                    <h2 className="text-3xl custom-font text-[#000000] mb-4">
                      Security Fatigue
                    </h2>
                    <p>
                      <span className="italic">
                        Never have I ever changed passwords for the nth time.
                      </span>{" "}
                      Most people – maybe even all – have updated their
                      passwords repeatedly, only to reuse an old one because
                      it’s easier to remember, risking security across multiple
                      accounts. Some even abandon transactions altogether,
                      finding the process of creating a new account or going
                      through a ‘tedious’ verification step too inconvenient.
                    </p>
                  </div>
                  <br />
                  <p>
                    Security fatigue refers to the feeling of frustration,
                    exhaustion, or apathy that people go through when dealing
                    with security measures, such as creating strong passwords,
                    enabling multi-factor authentication, or being on alert for
                    phishing scams. When users feel overwhelmed, they tend to
                    skip the process or start ignoring security best practices,
                    putting themselves and their data at risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*1*/}
        <section>
          <div>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                People are just like Nemo from <span className="italic">Finding Nemo</span>. Marlin, being
                overly protective of his son, causes Nemo to eventually rebel
                and swim into danger. People might not be driven by curiosity,
                rather by fatigue. When users feel overloaded with security
                measures, they stop caring and take unnecessary risks, like
                ignoring two-factor authentication (2FA), dismissing security
                warnings without reading them, reusing passwords, or ignoring
                security updates.
              </p>
              <br />
              <p>
                This is where developers face a challenge: striking the right
                balance between security and usability. While strict security
                measures help protect users, overly complex or inconvenient
                processes can lead to security fatigue, making users more likely
                to take shortcuts. Security shouldn’t come at the cost of
                usability.
              </p>
              <br />
            </div>
          </div>
          <br />
          <br />
        </section>
        <section className="relative">
          <div className="grid grid-cols-2 items-center space-x-8">
            <div>
              <h2 className="text-3xl custom-font text-[#000000] mb-4">
                Usability vs Security
              </h2>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
                    Usability and security often stand at opposite ends of the
                    spectrum, creating a constant trade-off for both users and
                    developers. From a user’s perspective, stringent security
                    measures—like complex password requirements, multi-factor
                    authentication, and frequent verification prompts—can be
                    frustrating, leading to security fatigue and risky behaviors
                    such as reusing passwords or ignoring warnings. However, if
                    security is too lax, users are vulnerable to attacks like
                    phishing and account takeovers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="meme6.png"
                alt="uvs"
                className="w-full max-w-[400px] h-auto relative"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <br />
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                On the developer side, prioritizing usability may mean
                simplifying authentication processes, but doing so carelessly
                can introduce vulnerabilities, such as weak encryption or
                insufficient input validation. Conversely, enforcing strict
                security policies without considering user experience can result
                in workarounds that compromise security, like users writing down
                passwords or developers hardcoding credentials. Striking a
                balance between usability and security requires thoughtful
                design, user education, and secure-by-default development
                practices to ensure protection without sacrificing
                accessibility.
              </p>
            </div>
          </div>
          <br />
          <br />
        </section>

        <section className="py-1 pt-10 relative">
          <br />
          <br />
          <div className="grid grid-cols-2 space-x-8">
            <div className="flex flex-col">
              <h2 className="text-3xl custom-font text-black mb-4 relative">
                Lack of Security Awareness
              </h2>
              <div className="justify-center">
                <img
                  src="meme7.png"
                  alt="secawareness"
                  className="w-full h-auto relative"
                />
              </div>
            </div>
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
                    In terms of security, ignorance{" "}
                    <span className="font-bold">certainly</span> isn't bliss;
                    quite the opposite, actually. People may have chosen not to
                    learn about it (big mistake, if you ask me) or were never
                    equipped with the resources to learn more about it but
                    regardless, having no knowledge regarding security will lead
                    to massive losses.
                  </p>
                  <br />
                  <p>
                    For developers, this can lead to data breach, financial
                    loss, and system compromise. Devs who neglect the security
                    aspect of their codebase might use insecure coding
                    practices, never update dependencies, misconfigure systems
                    or really, just choose not to make it a priority to make
                    room for functionality in the processing power, opening up
                    the possibility of SQL injection and weak authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <br />
          <div>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                For everyday users like you and us, this is even more
                concerning. A lack of security awareness makes it easy to fall
                for phishing scams, get hacked, or even lose money to fraud.
                Clicking sketchy links, reusing weak passwords, or ignoring
                two-factor authentication are all risky moves that
                cybercriminals love to take advantage of. And the worst part? A
                lot of people don’t even <span className="italic">realize</span> they’re making these mistakes
                until it’s too late.
              </p>
            </div>
          </div>
          <br />
          <br />
        </section>
        {/*1*/}
        <section>
          <br />
          <br />
          <br />
          <div>
            <h2 className="text-3xl custom-font text-[#000000] mb-4">
              Insider Threat
            </h2>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                In addition to external attacks and user errors, insider threats
                represent a unique and often overlooked vulnerability. These
                threats stem from individuals who already have authorized access
                to an organization’s systems and sensitive information. These
                are commonly known as ‘Inside Job’ by most people. Whether
                driven by malice, negligence, or coercion, insiders can bypass
                many external security measures by exploiting their intimate
                knowledge of internal processes and vulnerabilities. Their
                actions—ranging from unintentional mishandling of data to
                deliberate sabotage or fraud—can be particularly challenging to
                detect before significant damage is done. Since insiders often
                operate under the radar of conventional security protocols,
                organizations must implement robust monitoring, enforce strict
                access controls, and cultivate a culture of security awareness
                to mitigate this complex threat.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </section>
        {/*1*/}
        <section>
          <div>
            <h2 className="text-3xl custom-font text-[#000000] mb-4">
              Parting Words
            </h2>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                In the end, the core of cyber security lies not just in
                technology, but human involvement. No matter how advanced
                encryption methods, firewalls, or security protocols become,
                they are only as effective as the people using them. Security is
                a shared responsibility. Technology may safeguard us, but
                awareness, caution, and proactive behavior are what truly keep
                us safe.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </section>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="fixed bottom-4 left-4 px-6 py-3 custom-button"
        >
          Back
        </button>

         {/* Back Button */}
         {showScroll && (
          <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 px-6 py-3 custom-button"
        >
          Up
        </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WriteUp_0;
