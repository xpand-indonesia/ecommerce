import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-white";
  size?: "default" | "full";
}

function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-body text-base leading-[19px] cursor-pointer transition-all duration-200 ease-in-out";

  const variants: Record<string, string> = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:scale-[0.97]",
    outline:
      "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white active:scale-[0.97]",
    "outline-white":
      "border border-white text-white bg-transparent hover:bg-white/10 active:scale-[0.97]",
  };

  const sizes: Record<string, string> = {
    default: "h-[51px] px-8",
    full: "h-[51px] px-8 w-full",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
export type { ButtonProps };
