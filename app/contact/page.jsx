"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+1) 416 531 5632",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "angel.a.maldonado.mend@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Toronto, Canada",
    },
];
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                animate: { delay: 0.4, duration: 0.4, ease: "easeIn" }
            }}
            className='py-6'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-[30px]">
                    {/**form */}
                    <div className="lg:h-[34%] order-2 lg:order-none">
                        <form className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-lg">
                            <h3 className="text-4xl text-accent">Lets work together</h3>
                            <p className="text-white/60">
                            Share your project details, and I&apos;ll get back to you soon!
                            </p>
                            {/**input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input type='firstname' placeholder="Firstname" />
                                <Input type='lastname' placeholder="Lastname" />
                                <Input type='email' placeholder="Email address" />
                                <Input type='phone' placeholder="Phone number" />
                            </div>
                            {/**Select */}
                            <Select>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="bed">Back-End Developer</SelectItem>
                                        <SelectItem value="ds">Data Scientist</SelectItem>
                                        <SelectItem value="ba">Bussiness Analyst</SelectItem>
                                        <SelectItem value="cst">Software developer</SelectItem>
                                        <SelectItem value="mst">Web developer</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/**textarea */}
                            <Textarea className="h-[200px]"
                                placeholder="Type your message here" />
                            <Button size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    {/**info */}
                    <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[24px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-lg lg:text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact