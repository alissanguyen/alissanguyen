"use client";

import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import NavBar from "@/components/NavBar/NavBar";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import ResumeSection from "@/components/ResumeSection/ResumeSection";
import SidePanel from "@/components/SidePanel/SidePanel";
import { usePathname } from "next/navigation";
import * as React from 'react'

export default function Home() {
  const pathname = usePathname();
  const [navbarOpacity, setNavbarOpacity] = React.useState(0);

  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element: HTMLDivElement | null = elementRef.current;

    if (element) {
      const onScroll = () => {
        const newScrollOffset = element.scrollTop;
        const opacity = Math.min(newScrollOffset / 200, 0.2);
        setNavbarOpacity(opacity);
      };

      element.addEventListener('scroll', onScroll);

      // Clean up the event listener when the component unmounts or the element changes
      return () => element.removeEventListener('scroll', onScroll);
    }



  }, [elementRef]);

  return (
    <main className={`h-screen flex items-center justify-between p-20 bg-dark-bgPrimary pb-40`}>

      <div className="w-1/5 bg-dark-bgSecondary rounded-2xl h-full sticky">
        <SidePanel />
      </div>
      <div className="MainSection w-3/4 flex-1 h-screen text-dark-textPrimary overflow-y-auto py-20 relative" ref={elementRef}>
        <NavBar navbarOpacity={navbarOpacity} />
        <HomeSection />
        <PortfolioSection />
        <div className="spacer-div h-40"></div>
        <AboutMeSection />
        <div className="spacer-div h-40"></div>
        <ResumeSection />

        <div className="spacer-div h-40"></div>
        <ContactSection />
      </div>
    </main>
  );
}

/**
 * Make sure to use a themeProvider to set classname to correct color scheme using variable
 */