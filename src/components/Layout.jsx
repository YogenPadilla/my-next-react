import NavBar from "./NavBar";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import Container from "./Container";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <main
      className={`min-h-screen max-w-[1440px] m-auto border border-[#393E46] ${inter.className}`}
    >
      <Container
        variant="flexColsCenter"
        className="relative w-full"
      >
        <div
          style={{
            backgroundImage: "url(/assets/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "1440px",
            height: "960px",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
        <NavBar />
        {children}
        <Footer />
      </Container>
    </main>
  );
};

export default Layout;
