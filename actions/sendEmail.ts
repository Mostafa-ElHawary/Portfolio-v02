"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 200)) {
    return {
      error: "Invaled Sender Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invaled Message",
    };
  }
  resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "alhwarymostafa@gmail.com",
    subject: "Message from contact form",
    text: message,
    reply_to: senderEmail,
  });
};
