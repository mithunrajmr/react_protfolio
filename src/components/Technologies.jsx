import { DiPython } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaWordpress } from "react-icons/fa";
import { RiAngularjsFill, RiReactjsLine } from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

// Icon animation variants with bigger movement and rotation
const iconVariants = (duration) => ({
  initial: { y: -30, scale: 0.8, rotate: -15 }, // Increased vertical movement and scale
  animate: {
    y: [30, 0], // Move up and down more dramatically
    scale: [1.2, 1], // Scaling effect
    rotate: [0, 10], // Add rotation for more dynamic movement
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      {/* Title animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.25 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      {/* Icons container */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Each icon with individual animation duration */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <TbBrandNextjs className="text-7xl text-gray-700" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
          <SiFlask className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
          <DiPython className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <RiAngularjsFill className="text-7xl text-red-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <FaWordpress className="text-7xl text-blue-800" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
