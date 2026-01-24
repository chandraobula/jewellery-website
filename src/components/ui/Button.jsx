import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-none font-accent font-medium tracking-wider uppercase transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-dark hover:shadow-lg",
    secondary: "bg-transparent text-brand-dark border border-brand-dark hover:bg-brand-dark hover:text-white",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-brand-dark",
    ghost: "bg-transparent text-brand-dark hover:bg-brand-light",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
