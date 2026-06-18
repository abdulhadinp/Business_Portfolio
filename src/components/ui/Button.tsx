"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-white";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  onClick,
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  fullWidth = false,
  className = ""
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-5 py-2.5 rounded-[10px]",
    md: "text-sm px-6 py-3 rounded-[10px]",
    lg: "text-base px-8 py-4 rounded-[10px]"
  };

  const variantStyles = {
    primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-button)]",
    secondary: "bg-white text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    ghost: "text-[var(--accent)] hover:bg-[var(--accent-light)]",
    "outline-white": "border border-white text-white hover:bg-white hover:text-[var(--bg-dark)]"
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : 16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : 16} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
