import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="px-4 h-20 flex items-center sticky top-0 backdrop-blur-md bg-white/50 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">AI Coach</span>
          </Link>
        </div>
        <Button variant="outline" className="hidden md:flex">
          Log In
        </Button>
      </div>
    </nav>
  );
};
