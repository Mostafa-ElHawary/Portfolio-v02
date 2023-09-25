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
      className="mb-20 sm:mb-28 w-[(100% , 38rem)] "
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
      <p className="text-gray-700 text-center text-md ml-4 mr-4 dark:text-white ">
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
        className="mt-10 flex flex-col dark:text-black "
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
          name="senderEmail"
          required
          maxLength={200}
          placeholder="Your email"
          type="email"
          className="text-white p-4 borderBlack h-14 rounded-lg dark:bg-gray-900  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          className="text-white  h-14 my-3 rounded-lg borderBlack p-4 dark:bg-gray-900 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
        />
     
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
