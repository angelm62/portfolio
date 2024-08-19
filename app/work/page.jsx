"use client";

import { motion } from 'framer-motion';
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub, BsGitlab } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
    {
        num: "01",
        category: "BackEnd",
        title: "Customer Portal API",
        description: "Developed a robust API to connect Salesforce with a custom customer portal, leveraging Azure for deployment and Docker for containerization. Built with Python using FastAPI and Uvicorn, the API also integrates with Firebase for real-time data handling and MySQL for reliable data storage. This solution ensures seamless communication between systems, enhancing customer data management and user experience through efficient, real-time synchronization.",
        stack: [{ name: "Python" }, { name: "FastAPI" }, { name: "Firebase" }, { name: "Azure" }, { name: "Docker" }],
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8b2e0.appspot.com/o/mypsh_app.png?alt=media&token=1e544296-6b59-4285-af50-b36ba0f32f6e",
        live: "https://portal.provincialsmarthome.com/#/Start",
        github: "",
    },
    {
        num: "02",
        category: "FrontEnd",
        title: "Personal Portfolio",
        description: "Developed a website to showcase my experience and developments",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Node.js" }, { name: "Firebase" }, { name: "Firebase" }, { name: "Tailwind CSS" }],
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8b2e0.appspot.com/o/portfolio.png?alt=media&token=975d70b9-bd7c-48eb-a5d9-fc0469c8780d",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "BackEnd",
        title: "Sales Integration API",
        description: "Developed and Automated Sales Solutions, Built custom APIs to streamline CRM, database, and front-end interactions",
        stack: [{ name: "Python" }, { name: "FastAPI" }, { name: "Firebase" }, { name: "Azure" }, { name: "Docker" }, { name: "Stripe" }],
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8b2e0.appspot.com/o/pronto.png?alt=media&token=fced3bd5-3f42-46d2-a64f-3647fc6b380e",
        live: "",
        github: "",
    },
    {
        num: "04",
        category: "Automated Welding Cell",
        title: "Project Engineer",
        description: "Automated welding processes, increasing production efficiency by 25%.",
        stack: [{ name: "InformYaskawa" }, { name: "PLC" }],
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8b2e0.appspot.com/o/pemarsa_show.png?alt=media&token=a0ae6a99-724e-4c50-8d2c-9eb9ffbf5826",
        live: "",
        github: "",
    },

];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                animate: { delay: 0.4, duration: 0.4, ease: "easeIn" }
            }}
            className='min-h-[80px] flex flex-col justify-center py-6 lg:px-16 m-6'
            id="work"
        >
            <div className='container mx-auto'>
                <h2 className="text-4xl font-bold justify-center">My Work</h2>
                <div className='flex flex-col lg:flex-row lg:gap-[30px] py-6'>
                    <div className='w-full lg:w-[50%] flex flex-col lg:justify-between order-2 lg:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/**Outline num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            {/**project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                            {/**Project description */}
                            <p className='text-white/60 '>{project.description}</p>
                            {/** stack */}
                            <div className='container mx-auto p-4'>
                            <ul className='flex gap-4 flex-wrap'>
                                {project.stack.map((item, index) => {
                                    return (<li key={index} className='text-xl text-accent'>
                                        {item.name}
                                        {/** remove the last comma  */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                    );
                                })}
                            </ul>
                            </div>
                            {/**border */}
                            <div className='border border-white/20'></div>
                            {/**buttons */}
                            <div className='flex items-center gap-4'>
                                {/**Live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/**Live project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[50%]'>
                        <Swiper spaceBetween={30} slidesPerView={1} className='lg:h-[520px] mb-10' onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className='w-full'>
                                    <div className='h-[303px] lg:h-[460px] relative group flex justify-center item-center '>
                                        {/**overlay */}
                                        <div className='absolute top-0 bottom-0 w-full h-full z-10'></div>
                                        {/**image */}
                                        <div className='relative w-full h-full rounded-xl overflow-hidden'>
                                            <img
                                                src={project.image}
                                                alt="Description"
                                                className="w-full h-auto object-cover rounded-3xl"
                                            />
                                            {/*<Image
                                                src={project.image}
                                                fill
                                                className='object-cover'
                                                alt=""
                                            />*/}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/**Slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none" btnStyles="bg-accent hover-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all " />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work