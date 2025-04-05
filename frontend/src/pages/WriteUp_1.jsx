import React, { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./styles.css";
import { styles } from "./writeUp1Styles";

const WriteUp_1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.headerContainer}>
          <h2 className={styles.largeTitle}>Buffer Overflow</h2>
          <h2 className={styles.largeTitle}>to Exit</h2>
          <br />
          <h3 className={styles.subHeader}>Help Freddie Mercury Break Free</h3>
          <h3 className={styles.subHeader}>WRITEUP 1</h3>
          <br />
          <img src="/im00.png" alt="brain" className={styles.heroImage} />
          <br />
          <h3 className={styles.dateText}>February 27, 2025</h3>
        </div>
        <br />
        <br />
        {/* Section 1 */}
        <section>
          <div>
            <div className={styles.sectionText}>
              <p>
                You press{" "}
                <span className={`${styles.italic} ${styles.fontBold}`}>
                  Enter
                </span>
                , expecting the program to run smoothly. Instead, you're
                trapped—stuck in an infinite loop, no way out. The program just
                sits there, refusing to quit, as if taunting you. All it wants
                to do is to break free.{" "}
                <span className={styles.italic}>
                  God knows, I want to break free.
                </span>
              </p>
              <br />
              <p>
                But what if I told you there's a way to break free? A small
                weakness in the system, a backdoor waiting to be exploited?
                Well, that's exactly what we're about to do. Because just like
                Freddie Mercury, we want to break free!
              </p>
              <br />
              <p>
                In this write-up, we'll explore a classic hacker technique: the
                buffer overflow attack. Using this, we'll force our stubborn
                program to quit with a desired exit code of 1.
              </p>
              <br />
              <p>LET’S BREAK FREDDIE FREE!</p>
            </div>
          </div>
          <br />
          <br />
        </section>
        {/* Section 2 */}
        <section className={styles.sectionSpacing}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.relative}>
              {/* Main Image */}
              <img src="im1.png" alt="weakpass" className={styles.imageFull} />
            </div>
            <div>
              <div>
                <div className={styles.sectionText}>
                  <p>
                    The key vulnerability of the code above is that it uses
                    gets(), a function notorious for not checking input length.
                    This allows us to overflow the buffer and manipulate the
                    program’s execution.
                  </p>
                  <br />
                  <p>
                    Our mission to save Freddie is to inject a shellcode to
                    overwrite the return address, forcing the program to exit
                    with code 1 instead of looping forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3 */}
        <section className={styles.relative}>
          <div className={styles.gridTwoColumnsCentered}>
            {/* First Column */}
            <div>
              <div className={styles.sectionText}>
                <p>
                  Using gdb, we found the memory address of buffer and the saved
                  return address (EIP):
                </p>
                <ul className={styles.list}>
                  <li>buffer starts at 0xffffd048.</li>
                  <li>
                    The saved return address (EIP) is stored at 0xffffd054.
                  </li>
                  <li>
                    Since the buffer is only 8 bytes, writing more than 8 bytes
                    will overflow into the saved EIP.
                  </li>
                </ul>
              </div>
            </div>
            {/* Second Column */}
            <div className={styles.flexCenter}>
              <img
                src="im2.png"
                alt="weakpass"
                className={styles.imageConstrained}
              />
            </div>
          </div>
          <br />
          <br />
        </section>
        {/* Section 4 */}
        <section className={styles.sectionRelativePadding}>
          <div className={styles.gridTwoColumnsCentered}>
            {/* First Column */}
            <div>
              <div className={styles.sectionText}>
                <p>
                  To force an exit, we use the following assembly instructions:
                </p>
              </div>
            </div>
            {/* Second Column */}
            <div className={styles.flexCenter}>
              <img
                src="im3.png"
                alt="weakpass"
                className={styles.imageConstrained}
              />
            </div>
          </div>
          <br />
          <br />
        </section>
        {/* Section 5 */}
        <section className={styles.sectionSpacingRelative}>
          <div className={styles.gridTwoColumnsCentered}>
            <div>
              <div className={styles.sectionText}>
                <div>
                  <p>This translates to hex machine code:</p>
                </div>
                <div>
                  <img
                    src="im5.png"
                    alt="fatigue"
                    className={styles.imageFullRelative}
                  />
                </div>
                <br />
              </div>
            </div>
            <div className={styles.flexCenter}>
              <img
                src="im4.png"
                alt="fatigue"
                className={styles.imageFullRelative}
              />
            </div>
          </div>
        </section>
        {/* Section 6 */}
        <section className={styles.sectionSpacingRelative}>
          <div className={styles.gridTwoColumnsCentered}>
            <div>
              <div className={styles.sectionText}>
                <div>
                  <p>The payload should follow this structure:</p>
                  <div className={styles.flexCenter}>
                    <img
                      src="im6.png"
                      alt="fatigue"
                      className={styles.imageFullRelative}
                    />
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className={styles.flexCenter}>
              <img
                src="im7.png"
                alt="fatigue"
                className={styles.imageFullRelative}
              />
            </div>
          </div>
        </section>
        {/* Section 7 */}
        <section>
          <div>
            <div className={styles.sectionText}>
              <div>
                <div className={styles.gridTwoColumnsCentered}>
                  <div>
                    <p>
                      Using echo, we write the crafted payload into a file named
                      egg:
                    </p>
                  </div>
                  <div className={styles.flexCenter}>
                    <img
                      src="im8.png"
                      alt="uvs"
                      className={styles.imageConstrainedRelative}
                    />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className={styles.gridTwoColumnsCentered}>
                <p>Run the exploit by feeding egg as input:</p>
                <div className={styles.flexCenter}>
                  <img
                    src="im10.png"
                    alt="uvs"
                    className={styles.imageConstrainedRelative}
                  />
                </div>
              </div>
              <br />
              <br />
              <div className={styles.gridTwoColumnsCentered}>
                <p>Launch gdb and load the vulnerable program:</p>
                <div className={styles.flexCenter}>
                  <img
                    src="im9.png"
                    alt="uvs"
                    className={styles.imageConstrainedRelative}
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div>
              <p className={styles.sectionText}>Successful Exploit Output:</p>
              <div className={styles.flexCenter}>
                <img src="im12.png" alt="uvs" className={styles.imageFullMax} />
              </div>
            </div>
            <p className={styles.sectionText}>
              If done correctly, instead of looping forever, the program exits
              with code 1. 🎉
            </p>
            <p className={styles.sectionText}>
              Mission accomplished—we’ve broken Freddie free!
            </p>
            <p className={styles.sectionText}>
              However, if the egg file contains incorrect shellcode, the program
              may crash instead of exiting properly. This results in a
              segmentation fault, which occurs when the program tries to execute
              an invalid memory address. In this case, instead of breaking free
              like Freddie, our program faceplants into the ground. 😅
            </p>
          </div>
          <br />
          <br />
        </section>
        {/* Section 8 */}
        <section className={styles.relative}>
          <div className={styles.gridTwoColumnsCentered}>
            <div>
              <h2 className={styles.sectionTitle}>
                Why Does Segmentation Fault Happen?
              </h2>
              <div>
                <div className={styles.sectionText}>
                  <p>
                    A segmentation fault{" "}
                    <span className={styles.italic}>(or segfault)</span> happens
                    when a program accesses a memory location that it is not
                    allowed to. In our case, this could be due to:
                  </p>
                  <ul className={styles.list}>
                    <li>
                      Writing incorrect shellcode that corrupts important
                      registers.
                    </li>
                    <li>
                      Overwriting the return address with an invalid memory
                      location.
                    </li>
                    <li>Trying to execute non-executable memory.</li>
                    <li>
                      Misaligning the stack, causing the program to crash.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.flexCenter}>
              <img
                src="im13.png"
                alt="uvs"
                className={styles.imageFullRelative}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <br />
            <br />
            <div className={styles.sectionText}>
              <p>
                Since buffer overflow attacks involve overwriting memory, it's
                easy to accidentally corrupt the stack or instruction pointer,
                leading to a segmentation fault. Debugging tools like gdb help
                identify where things went wrong.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>

        {/* Back Button */}
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Back
        </button>

        {/* Up Button */}
        {showScroll && (
          <button onClick={scrollToTop} className={styles.upButton}>
            <IoMdArrowUp size={24} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WriteUp_1;