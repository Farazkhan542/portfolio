import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium [&_svg]:size-3",
  {
    variants: {
      variant: {
        primary: "bg-primary/10 text-primary dark:bg-primary/15",
        success: "bg-success/12 text-success dark:bg-success/20",
        warning: "bg-warning/15 text-warning dark:bg-warning/20",
        highlight: "bg-highlight/15 text-highlight dark:bg-highlight/20",
        destructive: "bg-destructive/12 text-destructive dark:bg-destructive/20",
        outline: "border-border text-muted-foreground",
        solid: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
