import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
