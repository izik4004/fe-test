
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className="">
      <div className="nav_wrapper">
  <Navbar />
      </div>
 
      <div className="me">
         <Sidebar  />

       
          {children}
      
      
      </div>

    </main>
  )
}
