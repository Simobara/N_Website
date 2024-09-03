"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Face1 from "../../../public/images/MYFACE1.png";

const HeroSection = () => {
  return (
    <section className="bg-black px-[3rem] lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Simone",
                3000,
                "Web Dev",
                3000,
                "Mobile Dev",
                3000,
                "UI/UX Pro",
                3000,
              ]}
              wrapper="span"
              speed={50} // Slower typing speed for a smoother effect
              deletionSpeed={30} // Speed of deletion effect
              repeat={Infinity}
              cursor={true} // Show a blinking cursor
              className="animated-text" // Add a class for custom styling
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mr-[4rem]">
            Sono un professionista del web con esperienza nello sviluppo di
            applicazioni web e mobili. Amo creare esperienze utente uniche e
            intuitive.
          </p>
          <div className="flex">
            <Link
              href="https://wa.me/+393342325244"
              className="px-6 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-3xl" />
            </Link>
            <Link
              href="/ResumeIT SimoneBaravelli.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src={Face1}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
