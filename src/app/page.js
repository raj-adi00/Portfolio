import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Head from "next/head";
import AchievementsSection from "./components/AchievementsSection";
import Rating from "./components/Rating";
export default function Home() {
  return (
    <>
      <body className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <Rating />
          <Skills />
          <ProjectsSection />
          <AchievementsSection />
          <EmailSection />
        </div>
        <Footer />
      </body>
    </>
  );
}
