"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInviwe } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
export default function Contact() {
  const { ref } = useSectionInviwe("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="flex flex-col mb-20 sm:mb-28 w-[(100% , 38rem)]  text-center items-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get In Touch</SectionHeading>
            <div className="bg-[#7984c4] absolute bottom-[12rem] -z-10 right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#173027]"></div>

      <p className=" md:w-[20rem] w-[25rem]  text-xs md:text-md text-gray-700 text-center text-md ml-[10rem] mr-[10rem] dark:text-[#8892b0]">
      My inbox is always open for you contact me directly at{" "}
        <a
          className="underline font-semibold dark:text-[#64ffda]"
          href="mailto:alhwarymostafa@gmail.com
"
        >
          alhwarymostafa@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black  justify-center items-center max-w-[100%]"
        action={async (formData) => {

          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 md:w-[30rem]   w-[25rem]  rounded-lg border border-white dark:borderBlack dark:bg-[#0a192f] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-41 my-3  md:w-[30rem]   w-[25rem]  rounded-lg border border-white   dark:borderBlack p-4 dark:bg-[#0a192f] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
