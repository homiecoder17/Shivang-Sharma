import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Education } from "@/app/components/Education";
import { WeeklyLearning } from "@/app/components/WeeklyLearning";
import { Assignments } from "@/app/components/Assignments";
import { Certificates } from "@/app/components/Certificates";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <WeeklyLearning />
        <Assignments />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Shivang Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}