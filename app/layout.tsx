import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950  relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[5rem] h-[31.25rem] w-[41.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#0C2336]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2B1C37]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right"/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
