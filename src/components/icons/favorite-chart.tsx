import React from 'react';

interface FavoriteChartProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const FavoriteChart: React.FC<FavoriteChartProps> = ({ className, ...props }) => {
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
                d="M14.6673 8.66683V6.00016C14.6673 2.66683 13.334 1.3335 10.0007 1.3335L6.00065 1.3335C2.66732 1.3335 1.33398 2.66683 1.33398 6.00016L1.33398 10.0002C1.33398 13.3335 2.66732 14.6668 6.00065 14.6668H8.66732"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.88672 9.65985L6.47339 7.59984C6.70006 7.30651 7.12006 7.25318 7.41339 7.47985L8.6334 8.43985C8.92674 8.66652 9.34672 8.61318 9.57338 8.32652L11.1134 6.33984"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.9862 10.5465L13.1728 10.9265C13.2662 11.1131 13.4995 11.2865 13.7062 11.3265L13.9595 11.3665C14.7195 11.4931 14.8995 12.0531 14.3528 12.6065L14.1195 12.8398C13.9661 12.9998 13.8795 13.3065 13.9262 13.5198L13.9595 13.6598C14.1662 14.5798 13.6795 14.9331 12.8795 14.4531L12.7062 14.3531C12.4995 14.2331 12.1662 14.2331 11.9595 14.3531L11.7861 14.4531C10.9795 14.9398 10.4928 14.5798 10.7062 13.6598L10.7395 13.5198C10.7861 13.3065 10.6995 12.9998 10.5462 12.8398L10.3128 12.6065C9.76616 12.0531 9.94615 11.4931 10.7062 11.3665L10.9595 11.3265C11.1595 11.2931 11.3995 11.1131 11.4928 10.9265L11.6795 10.5465C12.0395 9.8198 12.6262 9.8198 12.9862 10.5465Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
