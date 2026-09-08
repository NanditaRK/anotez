import Link from "next/link";
import { ModeToggle } from "../landing/ModeToggle";

const Navbar = () => {
  return (
    <nav className="mx-auto mt-8 flex h-16 max-w-6xl items-center justify-between rounded-2xl border bg-background/80 px-6 shadow-sm backdrop-blur fixed t-12 z-50 w-3/4 left-1/2 -translate-x-1/2">
      
      <Link
        href="/"
        className="text-xl font-extrabold text-blue-500 transition-colors hover:text-blue-600"
      >
        AnoteZ
      </Link>

      
      <div className="flex items-center gap-2">
        <Link
          href="/editor"
          className="rounded-lg px-4 py-2 transition-colors hover:bg-muted"
        >
          Note
        </Link>

        <Link
          href="/about"
          className="rounded-lg px-4 py-2 transition-colors hover:bg-muted"
        >
          About
        </Link>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;