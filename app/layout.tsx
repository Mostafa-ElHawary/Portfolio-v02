import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Mostafa El Hawary ",
  description: "An Expert Fullstack Javascript Developer",
  authors: [
    { name: "Mostafa El Hawary", url: "https://github.com/Mostafa-ElHawary" },
  ],
  keywords: "portfolio, web development, react developer",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth relative  ">
      <body
        className={`${inter.className} pl-5 pr-5   bg-gray-50 text-gray-950  relative pt-28 sm:pt-36 dark:bg-[#0a192f] dark:text-gray-50 dark:text-opacity-90 `}
      >
        {/* <div className="bg-[#994985] absolute top-[-6rem] -z-10 right-[5rem] h-[31.25rem] w-[41.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[	#301720]"></div>
        <div className="bg-[#7984c4] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0db9be]"></div> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* <Header />  */}
            {children}
            {/* <Footer /> */}
            <Analytics />
            <ThemeSwitch />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
