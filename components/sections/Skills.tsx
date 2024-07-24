import { skillsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto md:px-10 px-3 min-h-[90vh] py-24"
    >
      <p className="text-xl tracking-widest uppercase text-primary">
        Skills
      </p>
      <h3 className="py-4 text-4xl font-bold">What I Can Do</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {skillsData.map(({ name, path }, idx) => (
          <div
            key={idx}
            className="p-6 shadow-xl rounded-xl bg-white transition-transform transform hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={path} alt={name} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
