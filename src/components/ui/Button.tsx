import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

// Define button styles using CVA
const buttonVariants = cva(
  // Base styles
  "uppercase leading-[32px] text-md py-[10px] px-[16px] text-center block",
  {
    variants: {
      variant: {
        primary: "bg-primary text-black hover:bg-[#e66df2]",
        primaryLight: "bg-white text-black hover:shadow-[5px_5px_10px_#000] transition duration-200",
        ghost: "bg-transparent",
      },
      size: {
        small: "max-sm:w-full w-auto",
        full: "w-full",
      },
    },
  }
);

// ButtonProps interface
interface ButtonProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  link?: string | object;
  type?: "button" | "submit" | "reset";
  target?: string;
}

// Button Component
export function Button({ link, className, variant, size, children, target, ...props }: ButtonProps) {
  // If a link is provided, render a Link component
  if (link) {
    return (
      <Link href={link} target={target} className={buttonVariants({ variant, size, className })} {...props}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a regular button
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
