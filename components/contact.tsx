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
    //     <motion.section
    //       ref={ref}
    //       id="contact"
    //       className=" elementCenter relative  sm:w-[20rem]  md:w-[30rem] mb-20 sm:mb-28  max-w-[20rem]  text-center  px-4 border "
    //       initial={{
    //         opacity: 0,
    //       }}
    //       whileInView={{
    //         opacity: 1,
    //       }}
    //       transition={{
    //         duration: 1,
    //       }}
    //       viewport={{
    //         once: true,
    //       }}
    //     >
    //       <SectionHeading>Get In Touch</SectionHeading>
    //       {/* <div className="  bg-[#7984c4] absolute bottom-[12rem] -z-10 right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[0rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#173027]"></div> */}
    //       {/* <div className="bg-[#7984c4] absolute bottom-[10rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#173027]"></div> */}
    //       {/* <div className="bg-[#7984c4] absolute bottom-[10rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[-15rem] md:left-[-15rem] lg:left-[-20rem] xl:left-[-25rem] 2xl:left-[-35rem] dark:bg-[#0a192f] bg-gradient-to-r from-[#173027] "></div> */}

    //       <p className="border max-w-540 mx-auto break-words   text-clamp text-gray-700 text-center  dark:text-[#8892b0] m-auto text-normal   font-mono">
    //         My inbox is always open for you contact me directly at{" "}
    //         <a
    //           className=" underline font-semibold dark:text-[#64ffda]"
    //           href="mailto:alhwarymostafa@gmail.com
    // "
    //         >
    //           alhwarymostafa@gmail.com
    //         </a>{" "}
    //         or through this form.
    //       </p>
    //       <form
    //         className="mt-10 flex flex-col w-[100%] dark:text-black  justify-center items-center "
    //         action={async (formData) => {
    //           // const {data , error }  = await sendEmail(formData)  ;

    //           // if (error) {
    //           //   toast.error(error);
    //           //   return;
    //           // }

    //           toast.success("Email sent successfully!");
    //         }}
    //       >
    //         <input
    //           className="h-14 px-4 text-clamp font-mono w-[110%] rounded-lg  dark:borderBlack dark:bg-[#45575326] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
    //           name="senderEmail"
    //           type="email"
    //           required
    //           maxLength={500}
    //           placeholder="Your email"
    //         />
    //         <textarea
    //           className="h-41 my-3 text-clamp font-mono w-[110%] rounded-lg   dark:borderBlack p-4 dark:bg-[#45575326] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
    //           name="message"
    //           placeholder="Your message"
    //           required
    //           maxLength={5000}
    //         />
    //         <SubmitBtn />
    //       </form>
    //     </motion.section>

    <motion.section
      ref={ref}
      id="contact"
      className=" relative  text-center  px-4 mb-20 sm:mb-28"
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

      <p className="text-clamp text-gray-700  dark:text-[#8892b0] m-auto text-normal   font-mono">
      My inbox is always open for you!  <br /> contact me directly at{" "} <br /> 
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
              className=" inputResize h-14 px-4 text-clamp font-mono rounded-lg  dark:borderBlack dark:bg-[#45575326] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className=" inputResize h-41 my-3 text-clamp font-mono  rounded-lg   dark:borderBlack p-4 dark:bg-[#45575326] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
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
