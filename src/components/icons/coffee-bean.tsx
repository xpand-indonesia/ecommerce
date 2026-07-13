import React from 'react';

interface CoffeeBeanProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const CoffeeBean: React.FC<CoffeeBeanProps> = ({ className, ...props }) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M7.16667 2.26562C5.27199 0.370944 2.63895 -0.067896 1.28561 1.28545M1.28561 1.28545C-0.0677331 2.63879 0.371106 5.27183 2.26578 7.1665M1.28561 1.28545C1.44897 2.10226 2.31499 3.88271 4.47138 4.47082"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.64141 11.6927C6.03234 13.0837 8.73852 12.6326 10.6858 10.6853C12.6331 8.73803 13.0842 6.03186 11.6932 4.64093M4.64141 11.6927C3.25048 10.3018 3.70151 7.59563 5.64881 5.64833C7.59612 3.70102 10.3023 3.24999 11.6932 4.64093M4.64141 11.6927C5.64881 11.3569 7.55589 11.0813 8.41937 7.91518C9.02381 5.6989 10.8537 4.80883 11.6932 4.64093"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
