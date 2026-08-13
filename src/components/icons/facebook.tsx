import React from 'react';

interface FacebookProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const Facebook: React.FC<FacebookProps> = ({ className, ...props }) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <g clipPath="url(#clip0_4768_6779)">
            <rect width="32" height="32" rx="16" fill="#1877F2" />
            <path
                d="M22.2262 20.6228L22.9355 15.9978H18.498V12.9978C18.498 11.7322 19.1168 10.4978 21.1043 10.4978H23.123V6.5603C23.123 6.5603 21.2918 6.2478 19.5418 6.2478C15.8855 6.2478 13.498 8.46343 13.498 12.4728V15.9978H9.43555V20.6228H13.498V31.8041C14.3137 31.9322 15.148 31.9978 15.998 31.9978C16.848 31.9978 17.6824 31.9322 18.498 31.8041V20.6228H22.2262Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_4768_6779">
                <rect width="32" height="32" rx="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
