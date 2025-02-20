import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariant = cva(
  // Base styles
  "uppercase",
  {
    variants: {
      variant: {
        primaryDark: "text-black",
        primaryLight: "text-white",
        secondaryLight: "text-light font-light",
        secondaryDark: "text-dark font-light",
      },
      size: {
        xl: "text-[80px] leading-[130px]",
        lg: "text-[32px] md:text-[60px] leading-[44px] md:leading-[72px]",
        md: "text-[24px] leading-8 md:text-[40px] md:leading-[60px]",
        sm: "text-[24px] leading-[40px]",
      },
    },
  }
);

interface HeadingProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof headingVariant> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  variant?: any;
  size?: any;
  title?: string;
}

// Main heading component
const Heading = ({ level = 1, title, children, variant, size, className }: HeadingProps) => {
  const validLevel = Math.min(Math.max(1, level), 6);

  className = headingVariant({ variant, size, className });

  return React.createElement(`h${validLevel}`, { className, title }, children);
};

// Component for the text within heading
const HeadingText = ({ children, variant, size, className = "", ...props }: HeadingProps) => {
  return (
    <span className={headingVariant({ variant, size, className })} {...props}>
      {children}
    </span>
  );
};

Heading.Text = HeadingText;
export default Heading;
