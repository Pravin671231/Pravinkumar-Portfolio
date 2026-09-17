import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

/**
 * Previously pulled toward the cursor with spring physics (Motion). Simplified
 * to a plain CSS hover-scale — the `.magnetic-hover` rule in globals.css is
 * scoped to `(hover: hover) and (pointer: fine)` so touch taps don't trigger
 * a sticky "hover".
 */
export function MagneticButton({ children, className }: MagneticButtonProps) {
  return (
    <div className={cn("magnetic-hover inline-block transition-transform duration-200", className)}>
      {children}
    </div>
  );
}
