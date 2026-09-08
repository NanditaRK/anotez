import Hero from "@/components/landing/Hero";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const words = [
  {
    text: "Take",
    className: "text-black dark:text-white",
  },
  {
    text: "awesome",
    className: "text-black dark:text-white",
  },
  {
    text: "notes",
    className: "text-black dark:text-white",
  },
  {
    text: "with",
    className: "text-black dark:text-white",
  },
  {
    text: "AnoteZ.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-white/[0.96] dark:bg-black/[0.96] antialiased md:items-center md:justify-center">
      
      <div
  className={cn(
    "pointer-events-none absolute inset-0 select-none z-0 pointer-events-none",
    "flex items-center justify-center",
    "[background-size:40px_40px]",
    "[background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]",
    "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
  )}
>

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-20 pointer-events-auto mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="w-fit h-fit mx-auto">
        <TypewriterEffectSmooth words={words} />
        </div>
        
        <p className="mx-auto mt-4 max-w-lg text-center text-slate-500 font-normal">
          A simple and beautiful place to write, organize, and manage your
          notes without the hassle.
        </p>
        <div className="mt-16 w-full flex justify-center items-center">
          <Button
          asChild
          className="mt-8 h-12 w-40 animate-bounce transition-transform duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white"
          size="lg"
          >
            <Link href="/editor">
              Get Started
            </Link>
          </Button>
        </div>
       
      </div>
    </div>
    </div>
    </section>
  );
}
