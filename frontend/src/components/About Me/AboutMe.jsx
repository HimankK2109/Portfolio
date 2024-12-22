import React, { Suspense } from 'react'
import Grains from '../../assets/grains.png'
import theme_pattern from '../../assets/theme_pattern.svg'
import { motion } from 'framer-motion'
import { slideUp } from '../Hero/Hero.jsx'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader/CanvasLoader.jsx'
import Developer from '../Developer/Developer.jsx'

const bgGrains = {
    backgroundImage: `url(${Grains})`,
    backgroundPosition: "center",
};

function AboutMe() {
  return (
    <div  className='mx-6 lg:mx-28 flex flex-col items-center justify-center gap-[80px] mt-[80px]'>
        <div className='relative text-center'>
            <motion.h1 variants={slideUp(0.3)} initial="initial" whileInView="animate" className='py-0 px-4 text-[40px] md:text-[60px] lg:text-[80px] font-[600] leading-tight'>About Me</motion.h1>
            <img src={theme_pattern} alt="" className='absolute bottom-0 right-0 z-[-1] w-24 md:w-32 lg:w-40'/>
        </div>

        <div style={bgGrains} className='bg-gray-950 rounded-3xl py-8 lg:py-0 min-h-[90vh] lg:h-[80vh] px-5 w-[90%] grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-y-0'>
            {/* Banner Image */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className='flex items-center justify-center m-4 min-h-[50vh]'>
                <Canvas>
                    <ambientLight intensity={7} />
                    <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
                    <directionalLight position={[10,10,10]} intensity={1} />
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                    <Suspense fallback={<CanvasLoader />}>
                        <Developer position-y={-3} scale={3.2}/>
                    </Suspense>
                </Canvas>
            </motion.div>
            {/* Banner Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-left space-y-7 lg:max-w-[400px]'>
                    <motion.h1 variants={slideUp(0.5)} initial="initial" whileInView="animate" className='text-3xl text-white lg:text-4xl font-bold  text-center md:text-left lg:text-left'>I am a Fullstack Developer</motion.h1>
                    <motion.p variants={slideUp(0.7)} initial="initial" whileInView="animate" className='text-white/70 text-center md:text-left lg:text-left'>Hi, I'm Himank Kumar, a dedicated Full Stack Developer with a passion for creating seamless web experiences. With expertise in both front-end and back-end technologies, I craft efficient and user-friendly solutions that drive business growth. From designing intuitive user interfaces to building robust back-end systems, I focus on delivering high-quality results. I thrive on solving complex problems and continually strive to enhance my skills with the latest technologies. Let's collaborate to turn your ideas into innovative digital products.</motion.p>
                </div>
            </div>
        </div>
        <div id="arsenal"></div>
    </div>
  )
}

export default AboutMe