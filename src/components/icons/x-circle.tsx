import React from 'react';

interface XCircleProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const XCircle: React.FC<XCircleProps> = ({ className, ...props }) => {
    return (
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
                d="M7.9987 14.6668C11.6654 14.6668 14.6654 11.6668 14.6654 8.00016C14.6654 4.3335 11.6654 1.3335 7.9987 1.3335C4.33203 1.3335 1.33203 4.3335 1.33203 8.00016C1.33203 11.6668 4.33203 14.6668 7.9987 14.6668Z"
                stroke="#003813"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.11328 9.88661L9.88661 6.11328M9.88661 9.88661L6.11328 6.11328"
                stroke="#003813"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
