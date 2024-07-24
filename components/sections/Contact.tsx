"use client";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Input = ({
  label,
  name,
  onChange,
  type,
  value,
}: {
  label: string;
  type: string;
  value: string;
  name: string;
  onChange: any;
}) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className="text-sm font-semibold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full py-3 px-4 mt-2 rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
      />
    </div>
  );
};

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name) return toast.error("Name is required");
    if (!form.email) return toast.error("Email is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return toast.error("Invalid email address");
    if (!form.subject) return toast.error("Subject is required");
    if (!form.message) return toast.error("Message is required");
    if (!form.phone) return toast.error("Phone number is required");
    if (!/^\d{7,13}$/.test(form.phone))
      return toast.error("Invalid phone number");

    try {
      setLoading(true);

      const emailData = {
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject: form.subject,
        message: form.message,
      };

      console.log("Sending email with the following data:", emailData);

      const res = await emailjs.send(
        "service_zcp55js",
        "template_05mfl29",
        emailData,
        "LmK5Sb97_zRKOXeg-"
      );

      if (res.text === "OK" && res.status === 200) {
        toast.success("Message sent successfully");
        setForm({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("An error occurred, please try again later");
      }
    } catch (error: any) {
      console.log(error);
      return toast.error("An error occurred, please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto md:px-10 px-3 min-h-[90vh] py-24 bg-bg"
    >
      <p className="text-primary text-lg uppercase tracking-widest">Contact</p>
      <h3 className="text-4xl font-bold text-gray-800 mt-2">Get In Touch</h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5 place-items-center mt-10">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] w-full flex flex-col gap-y-6 bg-white p-8 rounded-lg shadow-md"
        >
          <div className="flex flex-col sm:flex-row sm:gap-x-4">
            <Input
              label="Name"
              name="name"
              onChange={handleChange}
              type="text"
              value={form.name}
            />
            <div className="max-sm:mt-3 w-full">
              <Input
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="tel"
                value={form.phone}
              />
            </div>
          </div>
          <Input
            label="Email"
            name="email"
            onChange={handleChange}
            type="email"
            value={form.email}
          />
          <Input
            label="Subject"
            name="subject"
            onChange={handleChange}
            type="text"
            value={form.subject}
          />
          <div className="w-full flex flex-col">
            <label
              htmlFor="msg"
              className="text-sm font-semibold text-gray-600"
            >
              Message
            </label>
            <textarea
              name="message"
              id="msg"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="py-3 px-4 mt-2 rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-primary/90 transition-colors duration-300 disabled:bg-primary/80"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {/* Info */}
        <div className="md:max-w-[600px] w-full bg-white p-8 rounded-lg shadow-md">
          <Image
            src="/images/contact.jpg"
            alt="contact image"
            width={400}
            height={400}
            className="rounded-md w-full max-h-[350px] object-cover"
          />
          <div className="mt-6">
            <h2 className="text-primary text-4xl font-bold">Rooma Siddiqui</h2>
            <p className="mt-5 text-gray-600">
              I am available for freelance or full-time positions. Contact me
              and let&apos;s talk.
            </p>
            <div>
              <p className="uppercase text-lg mt-5 text-gray-700">
                Connect with me
              </p>
              <div className="w-full mt-5 flex items-center gap-x-5">
                <Link
                  href="https://www.linkedin.com/in/rooma-siddiqui-aa92872a1/"
                  className="social-icon"
                >
                  <div className="p-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full">
                    <Linkedin className="w-6 h-6 text-gray-600" />
                  </div>
                </Link>
                <Link
                  href="https://github.com/roomeesyncss"
                  className="social-icon"
                >
                  <div className="p-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full">
                    <Github className="w-6 h-6 text-gray-600" />
                  </div>
                </Link>
                <Link
                  href="mailto:roomasiddiqui2003@gmail.com"
                  className="social-icon"
                >
                  <div className="p-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                </Link>
                <Link href="tel:+923217308988" className="social-icon">
                  <div className="p-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-full">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
