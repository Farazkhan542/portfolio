import { Familjen_Grotesk, Geist, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Muhammad Faraz Khan — AI Agentic Developer | LLM Engineer",
  description:
    "Portfolio of Muhammad Faraz Khan — AI Agentic Developer & LLM Engineer building multi-agent systems, RAG pipelines and real-time data platforms.",
  keywords: [
    "AI Agentic Developer",
    "LLM Engineer",
    "RAG",
    "OpenAI Agents SDK",
    "LangChain",
    "Muhammad Faraz Khan",
  ],
  openGraph: {
    title: "Muhammad Faraz Khan — AI Agentic Developer | LLM Engineer",
    description:
      "Building multi-agent systems, RAG pipelines and real-time data platforms that turn raw data into intelligent, automated products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
