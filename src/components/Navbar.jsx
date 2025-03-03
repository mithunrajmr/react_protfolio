import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
// import logo from "../assets/fullhd2mredit.jpg";
import logo from "../assets/fullhd2mrlogo.png"
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-8 text-3xl text-gray-300 hover:text-white transition-all duration-300">
        <a
          href="https://www.linkedin.com/in/mithunrajmr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mithunrajmr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mithunraj._.07/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/2mrmithunraj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <FaSquareXTwitter />
        </a>
        {/* <a
          href="https://www.youtube.com/@alogoyt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <IoLogoYoutube />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
