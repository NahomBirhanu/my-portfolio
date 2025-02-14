'use client'
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Navbar from "./componenets/Navbar";
import Services from "./componenets/Services";
import Work from "./componenets/Work";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Header/>
   <About/>
   <Services/>
   <Work/>
   <Contact/>
   <Footer/>

   </>
  );
}

