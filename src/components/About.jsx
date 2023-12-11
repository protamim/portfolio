import { FaCalendar, FaFlag, FaGraduationCap } from "react-icons/fa";
import protamim from "../assets/protamim.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdInterests } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const About = () => {
  return (
    <>
      <section className="pb-12">
        <h2 className="text-4xl font-extrabold pb-9">
          <span className="text-green-500">Abo</span>ut Me
        </h2>
        <div className="md:relative flex flex-col">
          <div className="w-full md:w-10/12 bg-zinc-800 py-10 px-5 md:px-12 rounded-2xl order-2 md:order-1">
            <div className="space-y-5 md:pr-12">
              <p>
                With expertise in React, MongoDB, and Express, I bring ideas to
                life with clean, efficient code. Collaboration is key, and Git
                ensures our journey is version-controlled brilliance.
              </p>
              <p>
                Beyond the code, I thrive on creating functional yet beautifully
                intuitive designs. Each project in my portfolio is a testament
                to innovation meeting practicality.
              </p>
              <p>
                Let&apos;s build something extraordinary together. Explore my
                portfolio, and feel free to reach out for new challenges and
                collaborations!
              </p>
            </div>
            <div className="mt-10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-start md:items-center items-start">
                <li className="flex md:flex-row items-start md:items-center gap-2 text-white text-base">
                  <div className="flex">
                    <FaMapLocationDot className="w-12 h-6" />
                    <span>Location:</span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    Netrokona, Mymensingh
                  </span>
                </li>
                <li className="flex md:flex-row items-start md:items-center gap-2 text-white text-base">
                  <FaFlag className="w-12 h-6" />
                  <span>Nationality:</span>
                  <span className="text-gray-400 text-sm">Bangladeshi</span>
                </li>
                <li className="flex md:flex-row items-start md:items-center gap-2 text-white text-base">
                  <FaGraduationCap className="w-12 h-6" />
                  <span>Study:</span>
                  <span className="text-gray-400 text-sm">
                    Islamic University of Raypur Mamrokpur
                  </span>
                </li>
                <li className="flex md:flex-row items-start md:items-center gap-2 text-white text-base">
                  <FaCalendar className="w-12 h-6" />
                  <span>Age:</span>
                  <span className="text-gray-400 text-sm">25</span>
                </li>
                <li className="flex md:flex-row items-start md:items-center gap-2 text-white text-base">
                  <MdInterests className="w-12 h-6" />
                  <span>Interests:</span>
                  <span className="text-gray-400 text-sm">
                    Exploring New Technologies, Open Source Enthusiast
                  </span>
                </li>
                <li className="flex md:flex-row items-start md:items-center gap-2 text-white text-base">
                  <HiOutlineBuildingOffice2 className="w-12 h-6" />
                  <span>Employment:</span>
                  <span className="text-gray-400 text-sm">Self-employment</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Profile Image */}
          <div className="md:absolute left-[76%] top-[18%]">
            <img
              className="w-full md:w-[290px] rounded-2xl"
              src={protamim}
              alt="Protamim"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
