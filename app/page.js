'use client'
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import Navbar2 from "../components/Navbar2";
import {AppleCardsCarouselDemo} from "../components/Projects";
import Gallery from "../components/Work2";
import {TimelineDemo} from "../components/Timeline";
import {AnimatedTooltipPreview} from "../components/Skill";


export default function Home() {

 const [isDarkMode, setIsDarkMode] = useState(false);

 // useEffect(()=>{
 //  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
 //    setIsDarkMode(true)
 //  }else{
 //    setIsDarkMode(false)
 //  }
 // },[])
 //
 // useEffect(()=>{
 //    if(isDarkMode){
 //      document.documentElement.classList.add('dark');
 //      localStorage.theme = 'dark';
 //    }else{
 //      document.documentElement.classList.remove('dark');
 //      localStorage.theme = '';
 //    }
 // },[isDarkMode])

  return (
      <>
          <Navbar2/>
          <div className='w-full py-10 scroll-mt-20 bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100'>
              <Header2/>
              <TimelineDemo/>
              <AppleCardsCarouselDemo/>
              <Gallery/>
              <AnimatedTooltipPreview/>
              <Contact/>
              <Footer/>
          </div>
      </>

  );
}
