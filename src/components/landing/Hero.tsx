import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Spotlight } from "../ui/spotlight";

const words = [
  {
    text: "Take",
  },
  {
    text: "awesome",
  },
  {
    text: "notes",
  },
  {
    text: "with",
  },
  {
    text: "AnoteZ.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const Hero = () => {
  return (
  

    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        
        <TypewriterEffectSmooth words={words} />
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          A simple and beautiful place to write, organize, and manage your
          notes without the hassle.
        </p>
        <Button
          className="mt-8 h-12 w-40 transition-transform duration-200 hover:scale-105"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;