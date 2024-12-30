import { Mic, Headphones, Globe, IterationCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const features = [
    {
      icon: <Mic className="w-6 h-6 min-w-6 min-h-6 text-primary" />,
      title: "Practica con IA en tiempo real",
      description: "Simula entrevistas de trabajo reales conversando naturalmente con nuestra IA"
    },
    {
      icon: <Headphones className="w-6 h-6 min-w-6 min-h-6 text-primary" />,
      title: "Feedback instantáneo",
      description: "Recibe análisis detallado de tus respuestas y consejos para mejorar tu comunicación"
    },
    {
      icon: <IterationCwIcon className="w-6 h-6 min-w-6 min-h-6 text-primary" />,
      title: "Práctica sin riesgos",
      description: "Equivócate, aprende y mejora en un entorno seguro antes de la entrevista real"
    },
    {
      icon: <Globe className="w-6 h-6 min-w-6 min-h-6 text-primary" />,
      title: "Multilenguaje inteligente",
      description: "Practica en cualquier idioma con detección automática y adaptación a tu nivel"
    }
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col animate-fade-in">
      <div className="flex-1">
        <span className="flex gap-2 items-center justify-center mb-12">
          <h1 className="text-3xl font-bold ">Pivot</h1>
          <span className="text-[10px] px-4 py-1 rounded-full font-bold bg-blue-950 text-white">Beta</span>
        </span>
        <div className="flex flex-col gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              {feature.icon}
              <div className="space-y-1">
                <h2 className="font-semibold">{feature.title}</h2>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={onStart}
        className="w-full bg-primary hover:bg-primary/90 text-white py-6"
      >
        Choose a voice
      </Button>
    </div>
  );
};
