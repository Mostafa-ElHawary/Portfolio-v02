import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-700   dark:text-gray-400 ">
      <small className="mb-2 block text-xs">
        &copy; 2030 . All rights reserved.
      </small>
      <p className=" flex flex-col text-xs ">
        <span className="mb-2">
          Designed & Built by {" "}
          <a
            className="underline font-semibold dark:text-[#64ffda]"
            href="https://web.facebook.com/profile.php?id=100004541353201
"
          >
            Mostafa El Hawary
          </a>{" "}
        </span>
       
      </p>
    </footer>
  );
}
