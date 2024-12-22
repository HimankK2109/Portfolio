import React, { useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRailway,
  SiVercel,
  SiRender,
  SiCplusplus,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import sword from "../../assets/sword.png";
import swordtop from "../../assets/swordtop.png";
import swordbottom from "../../assets/swordbottom.png";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  const [showIcons, setShowIcons] = useState(false);
  const [swordStage, setSwordStage] = useState("whole");

  const startSwordAnimation = () => {
    setSwordStage("whole");
    setShowIcons(false);

    setTimeout(() => setSwordStage("broken"), 2000); // Break after 2 seconds
    setTimeout(() => {
      setSwordStage("none");
      setShowIcons(true); // Show icons after sword disappears
    }, 3000);
  };

  return (
    <div className="pb-24 max-w-[80vw] mx-auto md:pb-5 lg:pb-10 min-h-[20vh] mt-[80px]">
      <motion.h2
        onViewportEnter={startSwordAnimation}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Sword Animation */}
      {swordStage !== "none" && (
        <div className="flex justify-center items-center relative h-40">
          {swordStage === "whole" && (
            <motion.img
              src={sword}
              alt="Whole Sword"
              className="h-52 w-48"
              initial={{ y: -200 }}
              animate={{ y: 50 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          )}
          {swordStage === "broken" && (
            <>
              <motion.img
                src={swordtop}
                alt="Sword Top"
                className="absolute h-52 w-48"
                initial={{ y: 50 }}
                animate={{ y: -100, rotate: -45, opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <motion.img
                src={swordbottom}
                alt="Sword Bottom"
                className="absolute h-52 w-48"
                initial={{ y: 50 }}
                animate={{ y: 200, rotate: 45, opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </>
          )}
        </div>
      )}

      {showIcons && (
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* HTML */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(1)}
          >
            <AiFillHtml5 className="text-7xl text-orange-500" />
          </motion.div>
          {/* CSS */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(1.5)}
            className="p-4"
          >
            <DiCss3 className="text-7xl text-blue-500" />
          </motion.div>

          {/* JavaScript */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <DiJavascript1 className="text-7xl text-yellow-400" />
          </motion.div>

          {/* React */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiTailwindcss className="text-7xl text-teal-400" />
          </motion.div>

          {/* Node.js */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
            className="p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>

          {/* Express */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <SiExpress className="text-7xl text-gray-800" />
          </motion.div>

          {/* MongoDB */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4.5)}
            className="p-4"
          >
            <SiMongodb className="text-7xl text-green-400" />
          </motion.div>

          {/* SQL */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4.5)}
            className="p-4"
          >
            <SiMysql className="text-7xl text-sky-700" />
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <FaGithub className="text-7xl text-purple-900" />
          </motion.div>

          {/* C++ */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiCplusplus className="text-7xl text-blue-500" />
          </motion.div>

          {/* Vercel */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiVercel className="text-7xl text-gray-500" />
          </motion.div>

          {/* Render */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4"
          >
            <SiRender className="text-7xl text-white" />
          </motion.div>

          {/* Railway */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
            className="p-4"
          >
            <SiRailway className="text-7xl text-purple-600" />
          </motion.div>

          {/* TypeScript */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(1.5)}
            className="p-4"
          >
            <SiTypescript className="text-7xl text-blue-600" />
          </motion.div>
        </motion.div>
      )}

      <div id="projects"></div>
    </div>
  );
}

export default Technologies;