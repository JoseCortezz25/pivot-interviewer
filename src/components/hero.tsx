import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 relative">
      {/* Replace the two absolute divs with this new background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-100 via-orange-100 to-purple-50 blur-3xl opacity-30" />
      <div className="max-w-4xl mx-auto text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Master your interview skills with AI-powered practice
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AI Coach is your trusted platform for interview preparation. We provide realistic practice sessions and actionable feedback to boost your confidence.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/interviewer">
            <Button size="full" className="bg-black text-white hover:bg-gray-800">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};