"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className=" w-full h-full relative ">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease:"easeIn"},
            }}
        >
            {/**image I have to fix the Image component of react */}
            <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{
                      opacity: 1,
                      transition: { delay: 1.4, duration: 0.4, ease:"easeInOut"},
                  }}
                  className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten shadow-inner[0_0_20px_20px_rgba(0,0,0,0.3)] absolute">
                   
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-8b2e0.appspot.com/o/angel.png?alt=media&token=b86395dc-2c49-4a44-806e-4c33ff394fdf"
                    alt="Description"
                />
                
            </motion.div>
            {/**Circle */}
            <motion.svg 
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#007acc"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120,360]
                    }}
                    transition={{
                        duration:20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo