import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import AchievementsSection from "./components/AchievementsSection";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 px-4">
        
        {/* Hero */}
        <section className="max-w-6xl mx-auto mb-16">
          <HeroSection />
        </section>

        {/* About */}
        <section className="max-w-5xl mx-auto mb-16">
          <AboutSection />
        </section>

        {/* Skills */}
        <section className="max-w-5xl mx-auto mb-16">
          <Skills />
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto mb-16">
          <ProjectsSection />
        </section>

        {/* Achievements */}
        <section className="max-w-5xl mx-auto mb-16">
          <AchievementsSection />
        </section>

        {/* Contact */}
        <section className="max-w-5xl mx-auto mb-10">
          <EmailSection />
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}