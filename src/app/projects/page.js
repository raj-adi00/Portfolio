import { Navbar } from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <section className="pt-24 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <ProjectsSection />
        </div>
      </section>

    </main>
  );
}