import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AccessibleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'hero' | 'large' | 'success' | 'default';
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const AccessibleButton = ({
  children,
  onClick,
  variant = 'default',
  className,
  ariaLabel,
  disabled = false,
  type = 'button',
}: AccessibleButtonProps) => {
  const baseClasses = "transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    hero: 'btn-hero',
    large: 'btn-large',
    success: 'btn-success',
    default: 'px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark min-h-[44px]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
};