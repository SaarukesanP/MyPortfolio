'use client'
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import Navbar2 from "../components/Navbar2";
import {AppleCardsCarouselDemo} from "@/components/Projects";
import {TimelineDemo} from "@/components/Timeline";
import {AnimatedTooltipPreview} from "@/components/Skill";
import PortfolioPage from "../components/Work2";


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
          <div className='w-full scroll-mt-20 bg-blue-50'>
              <Header2/>
              <AnimatedTooltipPreview/>
              <TimelineDemo/>
              <AppleCardsCarouselDemo/>
              <PortfolioPage/>
              <Contact/>
              <Footer/>
          </div>
      </>

  );
}
