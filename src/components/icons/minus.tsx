import React from 'react';

interface MinusProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const Minus: React.FC<MinusProps> = ({ className, ...props }) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M6 12H18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
