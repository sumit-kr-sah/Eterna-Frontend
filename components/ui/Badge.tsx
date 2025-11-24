import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "danger" | "neutral";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  className = "",
}) => {
  const variants = {
    success: "text-green-400",
    danger: "text-red-400",
    neutral: "text-white",
  };

  return (
    <span className={`${variants[variant]} ${className}`}>{children}</span>
  );
};
