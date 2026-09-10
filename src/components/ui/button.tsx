import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-[13px] font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-navy px-6 py-3 text-paper hover:bg-navy-deep",
        pink: "bg-pink px-6 py-3 text-paper hover:bg-pink-deep",
        outline: "border border-line px-6 py-3 text-navy hover:border-navy",
        ghost: "px-1 py-1 text-navy hover:text-pink",
        default: "bg-navy px-6 py-3 text-paper hover:bg-navy-deep",
      },
      size: {
        default: "",
        sm: "px-5 py-2.5 text-[12px]",
        lg: "px-8 py-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
