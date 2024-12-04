// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <div className="border-t border-stone-900 pb-20">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }} // Changed initial opacity to 0
//         transition={{ duration: 0.5 }}
//         className="my-10 text-center text-4xl"
//       >
//         Get in Touch
//       </motion.h2>
//       <div className="text-center tracking-tighter">
//         <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1 }}
//           className="my-4"
//         >
//           {CONTACT.address}
//         </motion.p>
//         {/* <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 1 }}
//           className="my-4"
//         >
//           {CONTACT.phoneNo}
//         </motion.p> */}
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 1 }}
//         >
//           <a href={`mailto:${CONTACT.email}`} className="border-b text-white-500">
//             {CONTACT.email}
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <a href={`mailto:${CONTACT.email}`} className="border-b text-white-500">
            {CONTACT.email}
          </a>
        </motion.div>
      </div>

      {/* Social Media Icons Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start from below
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position
        transition={{ duration: 0.5, delay: 0.3 }} // Added delay to make the effect smoother
        className="mt-8 flex justify-center gap-8 text-3xl text-gray-300 hover:text-white duration-300"
      >
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
          <FaTwitter />
        </a>
        <a
          href="https://www.youtube.com/@alogoyt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="transform hover:scale-110 transition-transform duration-200"
        >
          <IoLogoYoutube />
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
