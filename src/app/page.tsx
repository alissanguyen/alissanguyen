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
import { smoothScrollToElement } from "@/utils/scrollAnimationUtil";

/**
 * TODO LIST:
 *    1. Add responsive design for mobile
 *    2. Add dark/light theme for all components and track it in cookie storage
 *    3. Start pulling blog posts from Contentful
 *    4. Make resume downloadable
 *    5. Change website logo (tab logo)
 *    6. Make burger menu
 *    7. Integrate GPT into the website (somehow)
 */

// Easing function for smooth scrolling. 
// Takes a time progress value between 0 and 1 and returns an eased progress value that starts fast and slows down towards the end.
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export default function Home() {
  const pathname = usePathname();
  const [navbarOpacity, setNavbarOpacity] = React.useState(0);
  const elementRef = React.useRef<HTMLDivElement>(null);

  // Restore scroll position smoothly on component mount
  React.useLayoutEffect(() => {
    const element: HTMLDivElement | null = elementRef.current;
    if (element) {
      const savedScrollPosition = localStorage.getItem('scrollPosition_index');
      if (savedScrollPosition !== null) {
        const scrollToPosition = parseInt(savedScrollPosition, 10);

        smoothScrollToElement(element, scrollToPosition);
      }
    }
  }, []);

  React.useEffect(() => {
    const element: HTMLDivElement | null = elementRef.current;
    if (element) {
      const onScroll = () => {
        const newScrollOffset = element.scrollTop;
        const opacity = Math.min(newScrollOffset / 200, 0.2);
        setNavbarOpacity(opacity);
      };

      element.addEventListener('scroll', onScroll);

      // Save scroll position before page refresh
      const handleBeforeUnload = () => {
        localStorage.setItem('scrollPosition_index', element.scrollTop.toString());
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        element.removeEventListener('scroll', onScroll);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

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