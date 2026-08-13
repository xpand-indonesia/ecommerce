import React from 'react';

interface CloseCircleProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const CloseCircle: React.FC<CloseCircleProps> = ({
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
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9.17188 14.8299L14.8319 9.16992M14.8319 14.8299L9.17188 9.16992"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
