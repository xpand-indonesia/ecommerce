import React from 'react';

interface CircleInfoProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const CircleInfo: React.FC<CircleInfoProps> = ({ className, ...props }) => {
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
                d="M7.99935 1.33317C4.33268 1.33317 1.33268 4.33317 1.33268 7.99984C1.33268 11.6665 4.33268 14.6665 7.99935 14.6665C11.666 14.6665 14.666 11.6665 14.666 7.99984C14.666 4.33317 11.666 1.33317 7.99935 1.33317Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 10.6665L8 7.33317"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.00391 5.3335L7.99792 5.3335"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};