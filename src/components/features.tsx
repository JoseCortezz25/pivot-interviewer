import { cn } from "@/lib/utils";
import { Brain, MessageSquare, Target } from "lucide-react";

export const Features = () => {
  const features = [
    {
      color: "bg-purple-50",
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: "Real-time Conversations",
      description: "Natural dialogue flow with our AI interviewer that adapts to your responses"
    },
    {
      color: "bg-orange-50",
      icon: <Brain className="w-8 h-8 text-orange-400" />,
      title: "Smart Feedback",
      description: "Detailed analysis of your answers, body language, and communication style"
    },
    {
      color: "bg-green-50",
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Industry-specific Practice",
      description: "Tailored questions based on your field and experience level"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20" id="features">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Meet our most popular features to ace your interviews
        </h2>
        <p className="text-xl text-gray-600">
          Practice with our AI interviewer and get comprehensive feedback to improve your performance
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", feature.color)}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

  );
};