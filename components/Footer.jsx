import { Button } from "@/components/ui/Button";
import { ArrowUp } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} Muhammad Faraz Khan · Karachi, Pakistan
          · Built with Next.js
        </p>
        <Button variant="outline" size="icon" href="#home" aria-label="Back to top">
          <ArrowUp />
        </Button>
      </div>
    </footer>
  );
}
