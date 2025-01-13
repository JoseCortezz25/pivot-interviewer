"use client";
import { LiveAPIProvider } from "@/contexts/live-api-context";
import { ReactNode } from "react";

const API_KEY: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';
const host = "generativelanguage.googleapis.com";
const uri = `wss://${host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LiveAPIProvider url={uri} apiKey={API_KEY}>
      {children}
    </LiveAPIProvider>
  );
};

export default Layout;