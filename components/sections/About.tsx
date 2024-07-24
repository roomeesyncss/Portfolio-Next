import Image from "next/image";
import Link from "next/link";
import React from "react";

type ImageCardProps = {
  src: string;
  alt: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="rounded-xl"
      />
    </div>
  );
};

export const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto md:px-10 px-3 min-h-[90vh] center py-24 bg-bg"
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 gap-y-8">
        <div className="col-span-2 max-w-[650px]">
          <p className="subheading uppercase text-xl tracking-widest">About</p>
          <h3 className="heading py-4">Who I Am</h3>
          <p className="py-2 text-gray-600 mt-5">
            I enjoy working on projects that uncover interesting patterns and
            insights from data. My skills include using Python and its libraries
            such as Pandas, NumPy, and Scikit-Learn, as well as working with SQL
            for database management.
          </p>
          <p className="py-2 text-gray-600 mt-3">
            Additionally, I have experience in web scraping, backend
            development, and automation using libraries like BeautifulSoup,
            Selenium, Flask, and Django. I am dedicated to creating solutions
            that can benefit society through the power of data.
          </p>

          <Link
            href="#projects"
            className="underline mt-5 inline-flex hover:text-primary transition-colors"
          >
            Check out some of my latest projects.
          </Link>
        </div>
        <ImageCard src="/images/laptop.jpeg" alt="about me img" />
      </div>
    </section>
  );
};
