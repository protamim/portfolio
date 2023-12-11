import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex justify-between items-center bg-gray-300 text-black px-3 h-9 rounded-lg">
          <div>
            <p className="text-sm md:text-base">© 2023 Tamim Talukdar</p>
          </div>
          <div>
            <ul className="flex gap-2 md:gap-5">
              <li>
                <a className="hover:text-gray-700 text-xl"
                  href="https://github.com/protamim"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a className="hover:text-gray-700 text-xl"
                  href="https://www.facebook.com/protamim32/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a className="hover:text-gray-700 text-xl"
                  href="https://twitter.com/talukdar_32"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a className="hover:text-gray-700 text-xl"
                  href="https://www.linkedin.com/in/tamim-talukdar-35a5a2287/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
