import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section id="home" className="container mx-auto md:px-10 px-3 min-h-screen flex items-center py-16">
      <div className="max-w-[650px] mx-auto text-center">
        <p className="sm:text-lg uppercase text-text">
          Let&apos;s code Together
        </p>
        <h2 className="font-bold md:text-6xl md:leading-[70px] text-3xl leading-[40px] mt-5">
          Hi, I&apos;m <span className="text-primary">Rooma Siddiqui</span>
          <br />
          AI/ML Enthusiast
        </h2>
        <p className="text-text mt-5 sm:text-lg">
          I am a computer science student who loves Python programming. I enjoy
          working on projects that use data to find interesting patterns and
          insights.
        </p>

        <div className="w-full flex justify-center mt-10 gap-x-5">
          <Link href="https://www.linkedin.com/in/rooma-siddiqui-aa92872a1/" className="social-icon">
            <div className="p-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full">
              <Linkedin />
            </div>
          </Link>
          <Link href="https://github.com/roomeesyncss" className="social-icon">
            <div className="p-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full">
              <Github />
            </div>
          </Link>
          <Link href="mailto:roomasiddiqui2003@gmail.com" className="social-icon">
            <div className="p-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full">
              <Mail />
            </div>
          </Link>
          <Link href="tel:+923217308988" className="social-icon">
            <div className="p-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full">
              <Phone />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
