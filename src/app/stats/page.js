import {Navbar} from "../components/Navbar";
import Rating from "../components/Rating";

export default function Home() {
  return (
    <body className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Rating />;
      </div>
    </body>
  );
}
