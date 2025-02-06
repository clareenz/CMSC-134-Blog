//import GoogleDocEmbed from "../components/GoogleDocEmbed.jsx";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "./styles.css";
import Footer from "../components/Footer";

const WriteUp_0 = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      <div className="bg-white w-screen min-h-screen flex flex-col items-center">
        <div className="text-center py-20">
          <h2 className="text-black text-8xl font-bold custom-font">Human</h2>
          <h2 className="text-black text-8xl font-bold custom-font">Factors</h2>
          <h3 className="text-black text-xl font-medium">
            IN COMPUTER SECURITY
          </h3>
          <h3 className="text-black text-xl font-medium">WRITEUP 0</h3>
          <img
            src="/brain.png"
            alt="brain"
            className="w-[50%] h-auto mx-auto py-3"
          />
        </div>
        <br />
        <br />
        {/*1*/}
        <section className="bg-white px-30">
          <div>
            <h2 className="text-3xl custom-font text-[#000000] mb-4">
              Stardew Valley Incident
            </h2>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                &quot;Teh na hack acc ko sa Steam, akong stardew nawala, andun
                na sa Germany :(("
              </p>
              <br />
              <p>
                "Akala ko{" "}
                <span className="bg-[#595959] text-white">
                  free gift sa Steam,
                </span>{" "}
                nagrequest siya akala ko natural yon, na need sign in again for{" "}
                <span className="bg-[#595959] text-white">security</span> like
                input password etc, tas ininput ko hahaha{" "}
                <span className="bg-[#595959] text-white">
                  tas shempre taas kaayo ang email sa steam di kona binasa
                </span>{" "}
                na may location pala nakalagay hahaha di ko napansin kay{" "}
                <span className="bg-[#595959] text-white">tamad man me.</span>"
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
                factors in computer security – like weak passwords to kasabogan
                ug katapol to falling victim to social engineering attacks.
              </p>
            </div>
          </div>
        </section>
        {/*2*/}
        <section className="py-12 p-50 pt-10">
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
        <section className="px-50">
          <div className="grid grid-cols-2 items-center">
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
            <div className="flex justify-center">
              <img
                src="origami.png"
                alt="origami"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </section>
        <section className="py-1 p-50 pt-10">
          <div className="grid grid-cols-2 items-center">
            <div className="flex flex-col">
              <h2 className="text-3xl custom-font text-[#000000] mb-4">
                Phishing Attacks
              </h2>
              <div className="flex justify-center">
                <img
                  src="origami.png"
                  alt="origami"
                  className="w-full max-w-[400px] h-auto"
                />
              </div>
            </div>
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
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
                    bank, a social media platform, or government agency. All of
                    this sounds familiar. Was Nikka the fish, and the Steam gift
                    the bait that reeled in her personal information and caught
                    her account? Yes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white px-30">
          <div>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                Phishing works by sending fake emails or messages that look like
                it comes from a legitimate source. The messages often contain
                links to fake websites, then the fake website may ask for login
                credentials or other personal details, which are then stolen.
                The attacker uses the stolen data to access accounts, commit
                fraud, or even do so much worse.
              </p>
              <div className="flex justify-center">
                <img
                  src="origami.png"
                  alt="origami"
                  className="w-full max-w-[400px] h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 p-50 pt-10">
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
                <h2 className="text-3xl custom-font text-[#000000] mb-4">
                  Security Fatigue
                </h2>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
                    Never have I ever changed passwords for the nth time. Most
                    people – maybe even all – have updated their passwords
                    repeatedly, only to reuse an old one because it’s easier to
                    remember, risking security across multiple accounts. Some
                    even abandon transactions altogether, finding the process of
                    creating a new account or going through a ‘tedious’
                    verification step too inconvenient.
                  </p>
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
        <section className="bg-white px-30">
          <div>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                People are just like Nemo from Finding Nemo. Marlin, being
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
            </div>
          </div>
        </section>
        <section className="px-50">
          <div className="grid grid-cols-2 items-center">
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
                src="origami.png"
                alt="origami"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </section>
        <section className="bg-white px-30">
          <div>
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
        </section>
        <section className="py-1 p-50 pt-10">
          <div className="grid grid-cols-2 items-center">
            <div className="flex flex-col">
              <h2 className="text-3xl custom-font text-[#000000] mb-4">
                Lack of Security Awareness
              </h2>
              <div className="flex justify-center">
                <img
                  src="origami.png"
                  alt="origami"
                  className="w-full max-w-[400px] h-auto"
                />
              </div>
            </div>
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
                    In terms of security, ignorance certainly isn't bliss; quite
                    the opposite, actually. People may have chosen not to learn
                    about it (big mistake, if you ask me) or were never equipped
                    with the resources to learn more about it but regardless,
                    having no knowledge regarding security will lead to massive
                    losses.
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
        <section className="bg-white px-30">
          <div>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                For everyday users like you and us, this is even more
                concerning. A lack of security awareness makes it easy to fall
                for phishing scams, get hacked, or even lose money to fraud.
                Clicking sketchy links, reusing weak passwords, or ignoring
                two-factor authentication are all risky moves that
                cybercriminals love to take advantage of. And the worst part? A
                lot of people don’t even realize they’re making these mistakes
                until it’s too late.
              </p>
            </div>
          </div>
        </section>
        {/*1*/}
        <section className="bg-white px-30">
          <br />
          <br />
          <div>
            <h2 className="text-3xl custom-font text-[#000000] mb-4">
              Stardew Valley Incident
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
          <br />
          <br />
        </section>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 px-6 py-3 custom-button"
        >
          Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default WriteUp_0;
