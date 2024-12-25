import React from "react";
import profile from "../../assets/profile1.png";
import { motion } from "framer-motion";

export const slideUp = (delay) => {
    return {
        initial: {
            y: 50,
            opacity: 0,
        },
        animate:{
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
}

function Hero() {
  return (
    <div className="mx-6 lg:mx-28">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-10 lg:mt-20 xl:mt-0 xl:p-20">
            <motion.img
              src={profile}
              className="border border-stone-900 relative rounded-3xl"
              alt="Profile Image"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 variants={slideUp(0.3)} initial="initial" animate="animate" className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Himank Kumar
            </motion.h2>
            <motion.span variants={slideUp(0.7)} initial="initial" animate="animate" className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p variants={slideUp(1.1)} initial="initial" animate="animate" className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            Crafting dynamic and responsive web solutions as a passionate Full Stack Developer. I specialize in creating functional, scalable, and user-centric applications to bring ideas to life. Let's build something extraordinary together
            </motion.p>
            <motion.a variants={slideUp(1.5)} initial="initial" animate="animate"
              href="https://drive.google.com/file/d/1Rjc_nbcH8Xw8jAO2CoK5uBrRV3QKzWJt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white z-20 rounded-full p-4 text-sm text-stone-800 mb-10 cursor-pointer hover:shadow-[0_0_50px_#ff4d00] hover:bg-orange-600 transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
      <div id="about"></div>
    </div>
  );
}

export default Hero;