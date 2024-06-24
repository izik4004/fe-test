
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className="">
      <Sidebar  />
      <div className="">
        {/* <div className="">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="menu icon"
          />
          <div>
            <MobileNav
               />
          </div>
        </div> */}
        {children}
      </div>

    </main>
  )
}
