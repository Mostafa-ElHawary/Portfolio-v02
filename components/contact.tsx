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
      className="flex flex-col justify-center gap-0 h-[90vh] relative  text-center  px-4  "
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
      {/* <div className=" absolute top-[45rem] left-[-6rem] -z-10  h-[3.25rem] w-[30.25rem] rounded-full bg-gradient-to-r from-sky-600 from-20% via-sky-500 via-40% to-emerald-500  to-80%  blur-[4rem] sm:w-[50.75rem] md:right-[-4rem] lg:right-[5rem] xl:right-[-10rem] 2xl:right-[-5rem]  dark:bg-[	#301720] -rotate-[-77deg]"></div> */}

      <p className=" text-gray-700  dark:text-[#8892b0] text-normal font-mono">
        My inbox is always open for you! <br /> contact me directly at <br />
        <a
          className=" underline font-semibold dark:text-[#64ffda] "
          href="mailto:alhwarymostafa@gmail.com
 "
        >
          alhwarymostafa@gmail.com <br />
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col w-[100%] dark:text-black  justify-center items-center "
        action={async (formData) => {
          // const {data , error }  = await sendEmail(formData)  ;

          // if (error) {
          //   toast.error(error);
          //   return;
          // }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className=" inputResize h-14 px-4 text-clamp font-mono rounded-lg  dark:borderBlack dark:bg-[#45575326] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className=" inputResize h-[20rem] my-6 text-clamp font-mono  rounded-lg   dark:borderBlack p-4 dark:bg-[#45575326] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-100"
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
