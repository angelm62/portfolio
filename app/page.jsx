import { Button } from "@/components/ui/Button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
//Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Resume from "@/app/resume/page";
import Work from "@/app/work/page";
import Contact from "@/app/contact/page";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/**Text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
                <span className="text-xl">Data Scientist | Software Developer | Engineer</span>
                <h1 className="h1 mb-6">
                  Hello I&apos;m <br /> <span className="text-accent"> Angel Maldonado </span> 
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80">
                I&apos;m an engineer with a focus on Data Science and Machine Learning. I have a strong track record in problem-solving across various industries, particularly in AI and data technologies. Proficient in various programming languages and technologies.
                </p>
                {/**btn and socials */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <Link href="https://firebasestorage.googleapis.com/v0/b/portfolio-8b2e0.appspot.com/o/Angel%20Maldonado.pdf?alt=media&token=64ab70bc-4696-49bd-9384-903d6cb60b9f">
                  <Button
                    variants="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                  </Link>
                  <div className="mb-8 lg:mb-0">
                    <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                  </div>
                </div>
          </div>
          {/**Photo */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      {
        /**
          
        <div className="">
        <Resume />
      </div>
      <div className="">
        <Work />
      </div>
      <div className="">
        <Contact />
      </div>
         */
      }
     
    </section>
  

  );
};

export default Home