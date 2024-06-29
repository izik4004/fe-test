
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import MobileNav from "@/components/mobileNav/MobileNav";

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
    
      <div className="container__wrapper">
        <div className="sidebar__wrapper">
      
          <Sidebar />
        </div>

        <div className="main_section">
          <div className="mobileNav">
            <MobileNav />
          </div>
          {children}
        </div>
        
      </div>

    </main>
  )
}
