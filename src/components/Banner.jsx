import workplace from "../assets/workplace.jpg";
import { FaDownload, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import resume from "../../public/resume_tamim_talukdar.pdf";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <>
      <section className="py-10">
        <div className="md:flex relative">
          <div className="w-full md:w-[50%]">
            <img
              className="rounded-r-xl h-full w-full md:h-[540px]"
              src={workplace}
              alt="React developer workplace"
            />
          </div>
          {/* Content Area - right */}
          <div className="bg-zinc-800 px-8 py-10 w-full md:w-[48%] md:h-[450px] md:absolute left-[48%] top-10 rounded-2xl space-y-6">
            {/* Typing Area */}
            <div className="text-sm">
              <code className="text-green-500 mr-2">{"<code>"}</code>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "I build Crafting Digital Experiences",
                  1000,
                  "I build Transforming Ideas into Code",
                  1000,
                  "I build Innovating with React Magic",
                  1000,
                  "I build Weaving UI Wonders in JavaScript",
                  1000,
                  "I build Code Poetry in Motion",
                  1000,
                  "I build Dreams with MongoDB & Express",
                  1000,
                  "I build Responsive Design, Reactive Results",
                  1000,
                  "I build Animating the Web with Elegance",
                  1000,
                  "I build Where Pixels Meet Passion",
                  1000,
                  "I build In the Realm of React Realities",
                  1000,
                  "I build Designing Tomorrow's Interfaces Today",
                  1000,
                  "I build Expressing Ideas through React Components",
                  1000,
                  "I build Beyond Frameworks, Into Experiences",
                  1000,
                  "I build Elevating UX with React Sorcery",
                  1000,
                  "I build Code Choreography, Dancing with Git",
                  1000,
                  "I build Expressing Creativity through Code",
                  1000,
                  "I build Where Concepts Come to Life",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              <code className="text-green-500">{"</code>"}</code>
            </div>
            {/* Main Content */}
            <div className="flex gap-8 items-center">
              <h2 className="text-white text-3xl font-extrabold">
                Tamim Talukdar
              </h2>
              <div className="flex gap-3">
                <a
                  className="text-xl hover:text-gray-400 transition-all"
                  href="https://github.com/protamim"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-xl hover:text-gray-400 transition-all"
                  href="https://www.linkedin.com/in/tamim-talukdar-35a5a2287/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="text-xl hover:text-gray-400 transition-all"
                  href="https://www.facebook.com/protamim32/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="text-xl hover:text-gray-400 transition-all"
                  href="https://twitter.com/talukdar_32"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
            <div className="space-y-4 text-base">
              <p>
                Welcome to my world of React wizardry! I&apos;m a passionate{" "}
                <span className="font-semibold text-xl">
                  React front-end developer
                </span>{" "}
                on a mission to bring digital dreams to life.
              </p>
              <p>
                Armed with React, I specialize in crafting mesmerizing user
                interfaces that dance seamlessly across devices. Every project
                in my portfolio is a showcase of my design finesse and code
                expertise.
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-8 mt-5">
              <a
                className=" flex gap-3 items-center border border-green-600 py-2 px-5 rounded-full hover:bg-green-600 hover:text-black transition-all"
                href={resume}
                download="resume_tamim_talukdar"
                target="_blank"
                rel="noreferrer"
              >
                <FaDownload />
                resume
              </a>
              <a
                className="border-transparent border hover:bg-transparent hover:border-green-600 py-2 text-black hover:text-gray-300 px-5 rounded-full bg-green-600 transition-all"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
