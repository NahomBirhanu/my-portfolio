'use client'
import { useEffect, useState } from "react";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Navbar from "./componenets/Navbar";
import Services from "./componenets/Services";
import Work from "./componenets/Work";
export default function Home() {


  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.
    matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsDarkMode(true)

    }else{
      setIsDarkMode(false)
    }

  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
  },[isDarkMode])

  return (
   <>
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
   <Header isDarkMode={isDarkMode}/>
   <About isDarkMode={isDarkMode}/>
   <Services isDarkMode={isDarkMode}/>
   <Work isDarkMode={isDarkMode}/>
   <Contact isDarkMode={isDarkMode}/>
   <Footer isDarkMode={isDarkMode}/>

   </>
  );
}

