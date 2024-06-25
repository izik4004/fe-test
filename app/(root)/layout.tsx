
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
      <div className="container__wrapper">
        {/* <div className=""> */}
          <Sidebar />
        {/* </div> */}
     
        <div className="main_section">
          {children}
        </div>
        
      </div>

    </main>
  )
}
