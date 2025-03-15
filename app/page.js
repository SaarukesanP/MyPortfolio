'use client'
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Services from "../components/Services";
import Work from "../components/Work";
import {TimelineDemo} from "../components/Timeline";

export default function Home() {

 const [isDarkMode, setIsDarkMode] = useState(false);

 useEffect(()=>{
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setIsDarkMode(true)
  }else{
    setIsDarkMode(false)
  }
 },[])

 useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
 },[isDarkMode])

  return (
    <>
    <Navbar2 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header2 isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
        <TimelineDemo isDarkMode={isDarkMode} />
    <Services isDarkMode={isDarkMode} />
    <Work isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />

    </>
  );
}
