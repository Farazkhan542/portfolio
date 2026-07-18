import { DM_Sans, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
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
        className={`${dmSans.variable} ${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
