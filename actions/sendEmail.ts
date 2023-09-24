"use server";
import { Resend } from "resend";
import { VlidateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!VlidateString(senderEmail, 200)) {
    return {
      error: "Invaled Sender Email",
    };
  }
  if (!VlidateString(message, 5000)) {
    return {
      error: "Invaled Message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "alhwarymostafa@gmail.com",
      subject: "Message from contact form",
    //   text: message as string,
      reply_to: senderEmail as string,
      // react:<ContactFormEmail message={message} senderEmail={senderEmail}/>
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return;
    {
      error: getErrorMessage(error);
    }
  }
  return {
    data,
  };
};
