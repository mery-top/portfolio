import { FaEnvelope, FaYoutube, FaLinkedin, FaGithub,FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/meerthika/", icon: <FaLinkedin /> },
  { href: "https://www.youtube.com/channel/UCBSAxhUjqFdXMPTsw40RTdw", icon: <FaYoutube /> },
  { href: "https://github.com/mery-top", icon: <FaGithub /> },
  { href: "mailto:23ucs083@kamarajengg.edu.in", icon: <FaEnvelope /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-normal md:text-left">
          ©Meerthika 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-5xl transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
