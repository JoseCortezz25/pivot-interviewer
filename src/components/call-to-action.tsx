import { Button } from "./ui/button";

export const CallToActionSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-black text-white rounded-3xl my-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to ace your next interview?
        </h2>
        <p className="text-xl mb-8 md:max-w-[70%] mx-auto">
          Start practicing with AI Coach today and get detailed feedback to improve your communication skills.
        </p>
        <Button size="full" className="bg-white text-black hover:bg-gray-100">
          Start practicing now
        </Button>
      </div>
    </section>
  );
};