"use client";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full h-20 z-[100] flex items-center justify-between px-5 transition-all duration-150 ease-in-out",
        isScrolled ? "bg-white/90 shadow-md" : "bg-transparent"
      )}
    >
      <Link href="/" className="relative">
        <Image
          src="/images/Roomi.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain w-[80px]"
        />
      </Link>

      <nav className="hidden md:flex items-center gap-x-5">
        {navLinks.map(({ name, path }, idx) => (
          <Link
            href={path}
            key={idx}
            className="text-neutral-700 hover:text-primary transition-colors duration-150 uppercase"
          >
            {name}
          </Link>
        ))}
      </nav>

      <button onClick={() => setIsOpen((prev) => !prev)} className="md:hidden">
        <Menu size={25} className="cursor-pointer" />
      </button>

      {isOpen && (
        <div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 transition-transform duration-500">
            <div className="flex justify-between items-center mb-4">
              <Link href="/">
                <Image
                  src="/images/Roomi.png"
                  alt="logo"
                  width={87}
                  height={35}
                  className="object-contain w-[80px]"
                />
              </Link>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <X size={25} />
              </button>
            </div>
            <div className="border-b border-gray-300 mb-4 pb-4">
              <p>Let's build something legendary together</p>
            </div>
            <ul className="flex flex-col gap-y-6 text-sm uppercase">
              {navLinks.map(({ name, path }, idx) => (
                <li key={idx} onClick={() => setIsOpen(false)}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="" className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-transform duration-300">
                  <Linkedin />
                </Link>
                <Link href="" className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-transform duration-300">
                  <Github />
                </Link>
                <Link href="" className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-transform duration-300">
                  <Mail />
                </Link>
                <Link href="" className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-transform duration-300">
                  <Phone />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
