"use client";

import HomeSection from "@/components/HomeSection/HomeSection";
import NavBar from "@/components/NavBar/NavBar";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import SidePanel from "@/components/SidePanel/SidePanel";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className={`h-screen flex items-center justify-between p-20 bg-dark-bgPrimary`}>

      <div className="w-1/5 bg-dark-bgSecondary rounded-2xl h-full sticky">
        <SidePanel />
      </div>
      <div className="MainSection w-3/4 flex-1 h-screen text-dark-textPrimary overflow-y-auto py-20 relative">
        <NavBar />
        <HomeSection />
        <PortfolioSection />
      </div>
    </main>
  );
}

/**
 * Make sure to use a themeProvider to set classname to correct color scheme using variable
 */