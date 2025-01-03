import { cn } from "@/lib/utils";
import { Globe, Headphones, IterationCwIcon, Mic } from "lucide-react";

export const SecondaryIssuesSection = () => {
  const features = [
    {
      color: "bg-purple-50",
      icon: <Mic className="w-7 h-7 min-w-7 min-h-7 text-primary mb-3" />,
      title: "Practice with Real-Time AI",
      description: "Simulate real job interviews by naturally conversing with our AI"
    },
    {
      color: "bg-orange-50",
      icon: <Headphones className="w-7 h-7 min-w-7 min-h-7 text-primary mb-3" />,
      title: "Instant Feedback",
      description: "Get detailed analysis of your answers and tips to improve your communication"
    },
    {
      color: "bg-blue-50",
      icon: <IterationCwIcon className="w-7 h-7 min-w-7 min-h-7 text-primary mb-3" />,
      title: "Risk-Free Practice",
      description: "Make mistakes, learn and improve in a safe environment before the real interview"
    },
    {
      color: "bg-green-50",
      icon: <Globe className="w-7 h-7 min-w-7 min-h-7 text-primary mb-3" />,
      title: "Smart Multilanguage",
      description: "Practice in any language with automatic detection and level adaptation"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col sm:grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div className={cn("p-6 rounded-2xl", feature.color)} key={feature.title}>
              {feature.icon}
              <h4 className="font-bold">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-6">
            Comprehensive interview preparation for every scenario
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you are preparing for technical roles or leadership positions, our AI adapts to provide relevant practice and feedback.
          </p>
        </div>
      </div>
    </section>
  );
};
