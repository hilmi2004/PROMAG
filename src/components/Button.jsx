import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClasses = 'px-6 py-3 rounded-md font-medium transition-all duration-300';
    const variantClasses = {
        primary: 'bg-primary text-white hover:bg-green-700',
        secondary: 'bg-secondary text-white hover:bg-blue-700',
        outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;