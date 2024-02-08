import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Long | Personal Portfolio",
  description: "I am a new developer with 1 year of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 text-gray-950 relative h-[5000px]`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-96px] right-[176px] h-[500px] w-[500px] rounded-full blur-[160px] sm:w-[1100px]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-16px] left-[-560px] h-[500px] w-[800px] rounded-full blur-[160px] sm:w-[1100px] md:left-[-528px] lg:left-[-448px] xl:left-[-240px] 2xl:left-[-80px]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
