"use client";

import { Description } from "@radix-ui/react-dialog";
import{ FaHtml5,
    FaCss3,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaPython,
    FaSalesforce,
    FaStripe,
} from "react-icons/fa";

import {SiTailwindcss, 
        SiNextdotjs,
        SiPowerbi,
        SiZapier,
        SiFastapi,
        SiAzurefunctions,
        SiAzuredevops,
        SiMicrosoftazure,
        SiFirebase,
        SiOpenai,
        SiTensorflow,
        SiIbmwatson,
        SiKeras,
        SiOpencv} from "react-icons/si";

import { TbApi } from "react-icons/tb";

import { VscAzure, VscAzureDevops } from "react-icons/vsc";


const about ={
        title: 'About me',
        Description:'With four years of experience as an engineer and one and a half years specializing in Data Science and Machine Learning, I am a seasoned problem solver across multiple industries. My accomplishments include developing over five applications addressing real-world challenges in sectors such as e-commerce, security, civil engineering, oil and gas, and service. I am proficient in Python, Salesforce, Firebase, Azure, SQL, and PowerBI, leveraging CI/CD pipelines to deliver robust solutions. Additionally, I have two years of expertise in automating robotic processes, demonstrating my ability to drive innovation and problem-solving.',
        info: [
            {
                fieldName: "Name",
                fieldValue: "Angel Maldonado"
            },
            {
                fieldName: "Phone",
                fieldValue: "(+1) 416 831 5632"
            },
            {
                fieldName: "Experience",
                fieldValue: "+5 Years"
            },
            {
                fieldName: "Nationality",
                fieldValue: "World"
            },
            
            {
                fieldName: "Freelance",
                fieldValue: "Available"
            },
            {
                fieldName: "Languages",
                fieldValue: "English, Spanish"
            },
            {
                fieldName: "Email",
                fieldValue: "angel.a.maldonado.mend@gmail.com"
            },
        ],
};
// experience data
const experience ={
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "",
    items : [
        {
            company: "Provincial Smart Home Services.",
            position: "Data Scientist",
            duration: "2023 - present",
        },
        {
            company: "Boston Pizza",
            position: "Bussiness Data Analyst (CO-OP)",
            duration: "2022 - 2023",
        },
        {
            company: "PEMARSA SA",
            position: "Reliability and Project Engineer",
            duration: "2019 - 2021",
        },
        {
            company: "Pontificia Universidad Javeriana",
            position: "Assistant Professor",
            duration: "2018 - 2019",
        },
    ],
};
// education
const education ={
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: "",
    items : [
        {
            institution: "Lambton College",
            degree: "Artifitial intelligence and Machine Learning",
            duration: "2021 - 2023",
        },
        {
            institution: "Pontificia Universidad Javeriana",
            degree: "Electronic Engineer",
            duration: "2014 - 2019",
        },
        {
            institution: "Metroomat NDT",
            degree: "Phased Array Operator",
            duration: "Jul 2021",
        },
        {
            institution: "Yaskawa Motoman",
            degree: " Integrator for YRC 1000 Controller",
            duration: "Jan 2020",
        },
        {
            institution: "LinkedIn Learning",
            degree: "Deep Learning with OpenCV",
            duration: "Dec 2017",
        },
    ],
};
//skills data
const skills = {
    title: 'My Skills',
    description: "",
    items : [
        {
            icon: <SiPowerbi />,
            name: "PowerBI",
        },
        {
            icon: <SiZapier />,
            name: "Zapier",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <SiTensorflow />,
            name: "Tensorflow",
        },
        {
            icon: <SiKeras />,
            name: "Keras",
        },
        {
            icon: <SiOpenai />,
            name: "OpenAI API",
        },
        {
            icon: <SiOpencv />,
            name: "OpenCV",
        },
        {
            icon: <SiMicrosoftazure />,
            name: "Azure",
        },
        {
            icon: <SiAzuredevops />,
            name: "Azure DevOps",
        },
        {
            icon: <SiAzurefunctions />,
            name: "Functions",
        },
        {
            icon: <SiFirebase />,
            name: "Firebase",
        },
        {
            icon: <SiIbmwatson />,
            name: "IBM Watson",
        },
        {
            icon: <FaSalesforce />,
            name: "Salesforce",
        },
        {
            icon: <SiFastapi />,
            name: "Fastapi",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
      
    ],
};

import {Tabs,TabsContent, TabsList,TabsTrigger} from "@/components/ui/tabs"

import {Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
            >
                <div className="container mx-auto">
                <div>
                    <h3 className="text-4xl font-bold ">
                        About me
                    </h3>
                    <p className="py-4">Throughout my career, I've applied my expertise in Data Science and Machine Learning across various industries, delivering innovative solutions that drive business success. I have a proven track record in developing and automating data-driven processes, creating impactful dashboards, and collaborating with cross-functional teams to achieve strategic goals. My experience spans from optimizing sales pipelines to enhancing operational efficiency, always focusing on adding value and solving complex challenges.</p>
                </div >
                    <Tabs 
                    defaultValue="experience"
                    className="flex flex-col lg:flex-row gap-[60px] py-6">
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About me</TabsTrigger>
                            
                        </TabsList>
                        
                        {/**Content */}
                        <div className="min-h-[50vh] w-full">
                            {/**experience */}
                            <TabsContent value='experience' className="w=full">
                                <div className="flex flex-col gap-[30px] text-centet lg:text-lef">
                                    <h3 className="text-4xl font-bold ">{experience.title}</h3>
                                    <p className="max-w-[600px] text-withe/60 mx-auto lg:mx-0">{experience.description}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => {
                                                return(
                                                    <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" 
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/**education */}
                            <TabsContent value='education' className="w=full">
                            <div className="flex flex-col gap-[30px] text-centet lg:text-lef">
                                    <h3 className="text-4xl font-bold ">{education.title}</h3>
                                    <p className="max-w-[600px] text-withe/60 mx-auto lg:mx-0">{education.description}</p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item, index) => {
                                                return(
                                                    <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" 
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/**skills */}
                            <TabsContent value='skills' className="w=full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center lg:text-left">
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                                            {skills.description}
                                        </p>
                                    </div>
                                    <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                                        {skills.items.map((skill, index) => {
                                            return <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[80px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                        {skill.icon}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                    </TooltipProvider>
                                                </li>;
                                        })}
                                    </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            {/**about */}
                            <TabsContent value='about' className="w-full text-center lg:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{about.description}</p>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                                        {about.info.map((item,index)=>{
                                            return <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </motion.div>
    )
}

export default Resume