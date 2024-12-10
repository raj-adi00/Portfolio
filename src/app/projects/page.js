import {Navbar} from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <body className="flex min-h-screen flex-col bg-[#121212]">
        <nav>
          <Navbar />
        </nav>
        <div className="container mt-24 mx-auto px-12 py-4">
          <ProjectsSection />
        </div>
      </body>
    </>
  );
}
