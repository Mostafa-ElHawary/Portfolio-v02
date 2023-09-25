import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 . All rights reserved.
      </small>
      <p className=" flex flex-col text-xs ">
        <span className="mb-2">
          Designed & Built by {" "}
          <a
            className="underline"
            href="https://web.facebook.com/profile.php?id=100004541353201
"
          >
            Mostafa El Hawary
          </a>{" "}
        </span>
        <span className="font-semibold">
          About this website: built with React & Next.js (App Router & Server
          Actions), TypeScript, Tailwind CSS, Framer Motion, React Email &
          Resend, Vercel hosting.
        </span>
      </p>
    </footer>
  );
}
