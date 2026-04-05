import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "./utils";

// ── Variants ────────────────────────────────────────────────────────────────

const buttonVariants = cva(
  // Base styles shared across all variants
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium text-sm leading-none",
    "rounded-full px-5 py-3",
    "transition-all duration-200 ease-in-out",
    "cursor-pointer select-none whitespace-nowrap",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-[#0052FF] text-white"],
        secondary: ["bg-black text-white"],
        outline: ["bg-transparent text-[#FFFFFF] border border-[#FFFFFF]"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariants, "variant"> {
  variant: "primary" | "secondary" | "outline";
  /** Text label */
  children?: React.ReactNode;
  /** Icon element — any ReactNode (svg, img, lucide, etc.) */
  icon?: ReactNode;
  /** Whether the icon appears before or after the label. Defaults to "right" */
  iconPosition?: "left" | "right";
  /** Extra Tailwind classes for one-off overrides */
  className?: string;
}

export default function Button({
  children,
  variant,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </button>
  );
}
