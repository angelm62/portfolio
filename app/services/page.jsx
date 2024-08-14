"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Data Scientist',
        description: 'Developed comprehensive reports using Power BI, integrating five years of sales data and seven-day forecasts. Applied linear regression and ARIMA modeling for sales forecasting, reducing inventory costs. Communicated findings to non-technical stakeholders, supporting strategic decision-making.',
        href: ""
    },
    {
        num: '02',
        title: 'Bussiness analyst',
        description: 'Developed comprehensive reports using Power BI, integrating five years of sales data and seven-day forecasts. Applied linear regression and ARIMA modeling for sales forecasting, reducing inventory costs. Communicated findings to non-technical stakeholders, supporting strategic decision-making.',
        href: ""
    },
    {
        num: '03',
        title: 'Artifitial Intelligence & Machine Learning',
        description: 'Developed comprehensive reports using Power BI, integrating five years of sales data and seven-day forecasts. Applied linear regression and ARIMA modeling for sales forecasting, reducing inventory costs. Communicated findings to non-technical stakeholders, supporting strategic decision-making.',
        href: ""
    },
    {
        num: '04',
        title: 'Software development',
        description: 'Developed comprehensive reports using Power BI, integrating five years of sales data and seven-day forecasts. Applied linear regression and ARIMA modeling for sales forecasting, reducing inventory costs. Communicated findings to non-technical stakeholders, supporting strategic decision-making.',
        href: ""
    },
    {
        num: '05',
        title: 'Web Development',
        description: 'Developed comprehensive reports using Power BI, integrating five years of sales data and seven-day forecasts. Applied linear regression and ARIMA modeling for sales forecasting, reducing inventory costs. Communicated findings to non-technical stakeholders, supporting strategic decision-making.',
        href: ""
    },
   
]

const Services = () => {
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                        {services.map((service, index) => {
                            return( <div 
                                    key={index}
                                    className="flex-1 flex flex-col justify-center gap-6 group"
                                    >

                                {/** top */}
                                <div className="w-full flex justify-between items-center"> 
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/** title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/**description */}
                                <p className="text-white/60">{service.description}</p>
                                {/**border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                            );
                        })}
                    </motion.div>
            </div>
        </section>
    )
}

export default Services