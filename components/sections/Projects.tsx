"use client";
import { projectsData } from "@/lib/data";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  description,
  github,
  image,
  stack,
  title,
}: {
  image: string;
  title: string;
  description: string;
  github: string;
  stack: string[];
}) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg sm:w-[360px] w-full transition-transform duration-300 transform hover:scale-105">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end p-2">
          <Link
            href={github}
            target="_blank"
            className="bg-primary text-white p-2 rounded-full center cursor-pointer shadow-md transition-transform duration-300 transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-primary font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tag, idx) => (
          <p
            key={idx}
            className="text-[14px] bg-gray-100 px-2 py-1 rounded-md"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto md:px-10 px-3 min-h-[90vh] py-24"
    >
      <p className="subheading text-center text-lg text-primary uppercase">
        Projects
      </p>
      <h3 className="heading text-center text-4xl font-bold mt-2">
        What I&apos;ve Built
      </h3>
      <div className="md:mt-20 mt-10 flex flex-wrap justify-center gap-7">
        {projectsData.map((proj, idx) => (
          <ProjectCard
            key={idx}
            description={proj.description}
            github={proj.github}
            image={proj.image}
            stack={proj.stack}
            title={proj.title}
          />
        ))}
      </div>
    </section>
  );
};
