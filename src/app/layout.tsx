import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Coach",
  description: "AI agent that helps you improve your communication skills and prepare for interviews.",
  authors: {
    name: "@josecortezz25",
    url: "https://github.com/JoseCortezz25"
  },
  keywords: ["AI", "AI Voice Agent", "Interview", "Communication", "Skills", "Coach", "Voice", "Chat", "Interviewer", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing", "NLP", "Speech Recognition", "Speech Synthesis", "Voice Recognition", "Voice Synthesis", "Voice Chat", "Voice Assistant", "Voice Agent", "Voice Coach", "Voice Interviewer", "Voice Communication", "Voice Skills", "Voice AI", "Voice ML", "Voice DL", "Voice NLP", "Voice Speech Recognition", "Voice Speech Synthesis", "Voice Voice Recognition", "Voice Voice Synthesis", "Voice Voice Chat", "Voice Voice Assistant", "Voice Voice Agent", "Voice Voice Coach", "Voice Voice Interviewer", "Voice Voice Communication", "Voice Voice Skills"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
