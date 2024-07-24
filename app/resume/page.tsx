import Link from 'next/link';
import React from 'react';
import { Linkedin } from 'lucide-react';

const ResumePage = () => {
  return (
    <main className="bg-bg text-text min-h-screen">
      <div className="max-w-[940px] mx-auto p-4 pt-[120px]">
        <h2 className="text-center text-4xl font-bold mb-6">Resume</h2>
        <div className="bg-muted my-4 p-4 w-full flex justify-between items-center rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Rooma Siddiqui</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/roomaa/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-secondary transition duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Data Analysis <span className="px-1">|</span> Python Programming{' '}
              <span className="px-1">|</span> Machine Learning
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Data Analysis</p>
            <p className="py-2">Python Programming</p>
            <p>Machine Learning</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          Computer Science student proficient in Python and data analysis. With
          a solid foundation in Python, I excel in crafting efficient algorithms
          tailored for data analysis, enabling me to effectively tackle complex
          data-related challenges. I&apos;m eager to deepen my knowledge in machine
          learning and data science to leverage data-driven insights for
          impactful solutions.
        </p>

        {/* Skills */}
        <div className="text-center py-8">
          <h5 className="text-center underline text-2xl py-4">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span> Python
            <span className="px-2">|</span> Excel
            <span className="px-2">|</span> SQL
            <span className="px-2">|</span> Data Analysis
            <span className="px-2">|</span> Machine Learning
            <span className="px-2">|</span> Basic Backend Development
          </p>
        </div>

        {/* Professional Experience */}
        <h5 className="text-center underline text-2xl py-4">
          Professional Experience
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Softic Solutions</span>
            <span className="px-2">|</span>AI Development Intern (March 2024 -
            Present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Engaged in comprehensive learning and exploration within the AI
              development field.
            </li>
            <li>
              Documented personal learning, project processes, and outcomes for
              future reference.
            </li>
            <li>
              Developed an interactive web app using Streamlit for predicting
              car prices based on thorough analysis and model prediction.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">CodeAlpha</span>
            <span className="px-2">|</span>Data Science Intern (Dec 2023 - Jan
            2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Completed a data science internship at CodeAlpha.</li>
            <li>
              Applied data analysis and machine learning techniques to
              real-world projects.
            </li>
          </ul>
        </div>

        {/* Education & Certifications */}
        <h5 className="text-center underline text-2xl py-4">
          Education & Certifications
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Bahria University Karachi Campus</span>
            <span className="px-2">|</span>Bachelor of Science, Computer Science
            (2022 - Present)
          </p>
          <p className="py-1 italic">
            <span className="font-bold">IBM</span>
            <span className="px-2">|</span>Certified Data Analyst
          </p>
          <p className="py-1 italic">
            <span className="font-bold">Meta</span>
            <span className="px-2">|</span>Programming in Python
          </p>
        </div>

        {/* Projects */}
        <h5 className="text-center underline text-2xl py-4">
          Relevant Project Work
        </h5>
        <div className="py-6">
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Predictive Modeling with Linear Regression</li>
            <li>Exploratory Data Analysis (EDA) Projects</li>
            <li>World Population Analysis</li>
            <li>Cricket Match Data Analysis</li>
            <li>Economic Indicators Investigation</li>
            <li>
              LMS automation tool: Features include automated login, course
              selection, lecture material download, and attendance viewing.
              Technology used: Python, Tkinter, Selenium.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
