import React from 'react';

interface CoffeeCupProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const CoffeeCup: React.FC<CoffeeCupProps> = ({ className, ...props }) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >

            <path
                d="M11.3337 5.83301H12.2602C13.4945 5.83301 13.8614 6.01001 13.8317 6.88887C13.7825 8.34459 13.126 10.0361 10.5 10.4997"
                stroke="currentColor"
                strokeLinecap="round"
            />
            <path
                d="M3.13084 12.5763C0.881236 10.8467 0.549788 8.39337 0.500953 5.83341C0.479857 4.72753 0.800842 4.5 2.27279 4.5H9.39387C10.8658 4.5 11.1868 4.72753 11.1657 5.83341C11.1169 8.39337 10.7854 10.8467 8.53582 12.5763C7.89562 13.0685 7.35543 13.1667 6.44624 13.1667H5.22043C4.31124 13.1667 3.77105 13.0685 3.13084 12.5763Z"
                stroke="currentColor"
                strokeLinecap="round"
            />
            <path
                d="M6.70661 0.5C6.34209 0.72574 5.83482 1.5 5.83482 2.5M4.19379 1.5C4.19379 1.5 3.83398 1.83333 3.83398 2.5M8.50148 1.5C8.31922 1.61287 8.16732 2.16667 8.16732 2.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg >
    );
};
