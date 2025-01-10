import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";

export const CallToActionSection = () => {
  return (
    <section className="container px-8 sm:px-4 py-20 bg-black dark:bg-white text-white rounded-3xl my-20 w-[95%] sm:w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-black">
          Ready to ace your next interview?
        </h2>
        <p className="text-xl mb-8 md:max-w-[70%] mx-auto dark:text-black">
          Start practicing with AI Coach today and get detailed feedback to improve your communication skills.
        </p>
        <Button size="full" className="bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white">
          Start practicing now
          <ArrowRightIcon className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </section>
  );
};