import { FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            text: "Successfully submitted you query, I will response as soon as possible",
            icon: "success"
          });
    }
  return (
    <>
      <section id="#contact" className="pb-12">
        <h2 className="text-4xl font-extrabold pb-10">
          <span className="text-green-500">Get</span> In Touch
        </h2>
        {/* Map embeded */}
        <div>
          <iframe
            style={{ width: "100%", height: "450px", border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5125.633179341764!2d90.94317034390727!3d24.714175398087036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756dcce1908ff05%3A0xc9e714209f3a4581!2sMadan!5e0!3m2!1sen!2sbd!4v1702291870738!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:flex space-y-8 md:space-y-0 gap-8 pt-10">
          <div className="space-y-7 w-full md:w-2/4">
            <p>
              Have a project for me? Any questions about something I&apos;ve
              built? I&apos;d love to hear from you, give me a shout by email or
              by using the form below if you&apos;d like to get in contact with
              me.
            </p>
            <ul className="space-y-3">
              <li className="min-w-min">
                <a
                  className="flex gap-2 items-center hover:text-gray-400"
                  href="https://maps.app.goo.gl/Q52ZTRhtppgtE9NT7" target="_blank" rel="noreferrer"
                >
                  <FaLocationDot />
                  <span>Madan, Netrokona, Mymensingh</span>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-2 items-center hover:text-gray-400"
                  href="mailto:s163.tamim@gmail.com" target="_blank" rel="noreferrer"
                >
                  <FaEnvelope />
                  <span>s163.tamim@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-2 items-center hover:text-gray-400"
                  href="https://github.com/protamim" target="_blank" rel="noreferrer"
                >
                  <FaGithub />
                  <span>protamim</span>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-2 items-center hover:text-gray-400"
                  href="https://twitter.com/talukdar_32" target="_blank" rel="noreferrer"
                >
                  <FaXTwitter />
                  <span>protamim</span>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-2 items-center hover:text-gray-400"
                  href="https://www.facebook.com/protamim32/" target="_blank" rel="noreferrer"
                >
                  <FaFacebook />
                  <span>protamim32</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-2/4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  className="w-full bg-zinc-800 rounded-md outline-none border border-gray-500 py-2 px-3"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="w-full bg-zinc-800 rounded-md outline-none border border-gray-500 py-2 px-3"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  className="w-full bg-zinc-800 rounded-md outline-none border border-gray-500 py-2 px-3 min-h-[160px]"
                  placeholder="Message"
                ></textarea>
              </div>
              <input
                className="cursor-pointer border-green-500 border px-5 py-2 hover:bg-green-500 hover:text-black"
                type="button"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
