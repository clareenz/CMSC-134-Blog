//import GoogleDocEmbed from "../components/GoogleDocEmbed.jsx";
import React, { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // Import for navigation
import Footer from "../components/Footer";
import "./styles.css";

const WriteUp_1 = () => {
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
          <h2 className="text-black text-8xl font-bold custom-font">
            Buffer Overflow
          </h2>
          <h2 className="text-black text-8xl font-bold custom-font">to Exit</h2>
          <br />
          <h3 className="text-black text-xl font-light">
            Help Freddie Mercury Break Free
          </h3>
          <h3 className="text-black text-xl font-light">WRITEUP 1</h3>
          <br />
          <img
            src="/im00.png"
            alt="brain"
            className="w-[70%] h-auto mx-auto py-3"
          />
          <br />
          <h3 className="text-black text-sm font-light">February 27, 2025</h3>
        </div>
        <br />
        <br />
        {/*1*/}
        <section>
          <div>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <p>
                You press <span className="italic font-bold">Enter</span>,
                expecting the program to run smoothly. Instead, you're
                trapped—stuck in an infinite loop, no way out. The program just
                sits there, refusing to quit, as if taunting you. All it wants
                to do is to break free.{" "}
                <span className="italic">God knows, I want to break free.</span>
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
        {/*2*/}
        <section className="py-12 pt-10 z-10">
          <div className="grid grid-cols-2 space-x-8">
            <div className="relative">
              {/* Main Image */}
              <img
                src="im1.png"
                alt="weakpass"
                className="relative w-full h-auto z-10"
              />
            </div>
            <div>
              <div>
                {/*title section to haha if may title*/}
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
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
                    Using gdb, we found the memory address of buffer and the
                    saved return address (EIP):
                  </p>
                  <ul className="list-disc ml-5">
                    {" "}
                    {/* ✅ Added Tailwind classes */}
                    <li>buffer starts at 0xffffd048.</li>
                    <li>
                      The saved return address (EIP) is stored at 0xffffd054.
                    </li>
                    <li>
                      Since the buffer is only 8 bytes, writing more than 8
                      bytes will overflow into the saved EIP.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Second Column */}
            <div className="flex justify-center">
              <img
                src="im2.png"
                alt="weakpass"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
          <br />
          <br />
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
                    To force an exit, we use the following assembly
                    instructions:
                  </p>
                </div>
              </div>
            </div>
            {/* Second Column */}
            <div className="flex justify-center">
              <img
                src="im3.png"
                alt="weakpass"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
          <br />
          <br />
        </section>
        <section className="py-12 pt-10 relative">
          <div className="grid grid-cols-2 space-x-8 items-center">
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <div>
                    <p>This translates to hex machine code:</p>
                  </div>
                  <div>
                    <img
                      src="im5.png"
                      alt="fatigue"
                      className="w-full h-auto relative"
                    />
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="justify-center">
              <img
                src="im4.png"
                alt="fatigue"
                className="w-full h-auto relative"
              />
            </div>
          </div>
        </section>
        <section className="py-12 pt-10 relative">
          <div className="grid grid-cols-2 space-x-8 items-center">
            <div>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <div>
                    <p>The payload should follow this structure:</p>
                    <div className="justify-center">
                      <img
                        src="im6.png"
                        alt="fatigue"
                        className="w-full h-auto relative"
                      />
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="justify-center">
              <img
                src="im7.png"
                alt="fatigue"
                className="w-full h-auto relative"
              />
            </div>
          </div>
        </section>
        {/*1*/}
        <section>
          <div>
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
              <div>
                <div>
                  <div className="grid grid-cols-2 space-x-8 items-center">
                    <div>
                      <p>
                        Using echo, we write the crafted payload into a file
                        named egg:
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="im8.png"
                        alt="uvs"
                        className="w-full max-w-[400px] h-auto relative"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="grid grid-cols-2 space-x-8 items-center">
                  <p>Run the exploit by feeding egg as input:</p>
                  <div className="flex justify-center">
                    <img
                      src="im10.png"
                      alt="uvs"
                      className="w-full max-w-[400px] h-auto relative"
                    />
                  </div>
                </div>
                <br />
                <br />
                <div className="grid grid-cols-2 space-x-8 items-center">
                  <p>Launch gdb and load the vulnerable program:</p>
                  <div className="flex justify-center">
                    <img
                      src="im9.png"
                      alt="uvs"
                      className="w-full max-w-[400px] h-auto relative"
                    />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div>
                <p>Successful Exploit Output:</p>
                <div className="flex justify-center">
                  <img
                    src="im12.png"
                    alt="uvs"
                    className="w-full max-w-full h-auto relative"
                  />
                </div>
              </div>
              <p>
                If done correctly, instead of looping forever, the program exits
                with code 1. 🎉
              </p>
              <p>Mission accomplished—we’ve broken Freddie free!</p>
              <p>
                However, if the egg file contains incorrect shellcode, the
                program may crash instead of exiting properly. This results in a
                segmentation fault, which occurs when the program tries to
                execute an invalid memory address. In this case, instead of
                breaking free like Freddie, our program faceplants into the
                ground. 😅
              </p>
            </div>
          </div>
          <br />
          <br />
        </section>
        <br />
        <br />
        <section className="relative">
          <div className="grid grid-cols-2 items-center space-x-8">
            <div>
              <h2 className="text-3xl custom-font text-[#000000] mb-4">
                Why Does Segmentation Fault Happen?
              </h2>
              <div>
                <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
                  <p>
                    A segmentation fault <span className="italic">(or segfault)</span> happens when a program
                    accesses a memory location that it is not allowed to. In our
                    case, this could be due to:
                  </p>
                  <ul className="list-disc ml-5">
                    {" "}
                    {/* ✅ Added Tailwind classes */}
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
            <div className="flex justify-center">
              <img
                src="im13.png"
                alt="uvs"
                className="w-full max-w-full h-auto relative"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <br />
            <br />
            <div className="text-gray-700 text-xl font-light leading-relaxed text-justify">
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
        <button
          onClick={() => navigate(-1)}
          className="fixed bottom-4 left-4 px-6 py-3 custom-button"
        >
          Back
        </button>

        {/* up Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 px-10 py-3 custom-button"
          >
            <IoMdArrowUp size={24} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WriteUp_1;
