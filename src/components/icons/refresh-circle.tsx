import React from 'react';

interface RefreshCircleProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const RefreshCircle: React.FC<RefreshCircleProps> = ({ className, ...props }) => {
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
                d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.33984 9.67346C5.45984 9.87346 5.60651 10.0601 5.77317 10.2268C6.99984 11.4535 8.99317 11.4535 10.2265 10.2268C10.7265 9.72681 11.0132 9.09344 11.1065 8.44678"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.89258 7.55355C4.98591 6.90021 5.27258 6.27352 5.77258 5.77352C6.99925 4.54685 8.99258 4.54685 10.2259 5.77352C10.3992 5.94685 10.5392 6.13353 10.6592 6.32686"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.21289 11.4533V9.67334H6.99288"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.7858 4.54688V6.32686H9.00586"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
