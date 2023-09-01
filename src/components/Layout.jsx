import NavBar from "./NavBar";
import Footer from "./Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <main 
      className={`border border-[#222831] rounded-[16px] min-h-screen max-w-[1445px] m-auto flex flex-col items-center justify-center ${inter.className}`} >
     <NavBar />
     { children }
     <Footer />
    </main>
  );
};

export default Layout;
