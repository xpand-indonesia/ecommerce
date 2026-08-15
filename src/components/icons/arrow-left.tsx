import React from 'react';

interface ArrowLeftProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({
    className,
    ...props
}) => (
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
            d="M9.57 5.93L3.5 12L9.57 18.07"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M20.4999 12H3.66992"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
