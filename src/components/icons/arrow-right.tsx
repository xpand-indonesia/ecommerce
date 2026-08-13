import React from 'react';

interface ArrowRightProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const ArrowRight: React.FC<ArrowRightProps> = ({
    className,
    ...props
}) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path
            d="M9.62109 3.95312L13.6678 7.99979L9.62109 12.0465"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.33203 8H13.552"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
