import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spark School ERP",
  description: "Next.js School Management System",
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className=" min-h-screen flex ">
      {/*Left side sideBar construction  */}
      <div className="lg:w-[16%] w-[14%] md:w-[8%] p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="" className=" " width={32} height={32} />
          <span className="hidden lg:block">SparkERP</span>
        </Link>
        <Menu />
      </div>
      {/*Right Side-  the whole details of the dashboard including NavBar*/}
      <div className=" w-[86%] md:w-[92%] xl:w-[86%] lg:w-[84%] bg-[#F7F8FA] overflow-scroll">

        <Navbar />
        {children} 
        {/*This children is from page.txt of various dashboards */}
      </div>
    </div>

  );
}
