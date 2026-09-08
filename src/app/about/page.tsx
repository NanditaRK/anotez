import AboutComponent from "@/components/about/AboutComponent";
import Navbar from "@/components/navbar/Navbar";

export default function AboutPage() {
  return (
    <section className="h-screen flex">
      <Navbar />
      <AboutComponent />
    </section>
  );
}
