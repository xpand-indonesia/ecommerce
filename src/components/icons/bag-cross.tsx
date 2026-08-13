import React from 'react';

interface BagCrossProps extends React.ComponentPropsWithoutRef<'svg'> {
    className?: string;
}

export const BagCross: React.FC<BagCrossProps> = ({ className, ...props }) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path
            d="M10.6723 13.8364L8.48047 11.6445"
            stroke="currentColor"
            strokeWidth="1.19556"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10.6489 11.6685L8.45703 13.8603"
            stroke="currentColor"
            strokeWidth="1.19556"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.022 1.59424L4.13672 4.48749"
            stroke="currentColor"
            strokeWidth="1.19556"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.1055 1.59424L14.9907 4.48749"
            stroke="currentColor"
            strokeWidth="1.19556"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M1.59375 6.25667C1.59375 4.78215 2.38282 4.6626 3.36317 4.6626H15.7651C16.7454 4.6626 17.5345 4.78215 17.5345 6.25667C17.5345 7.9703 16.7454 7.85075 15.7651 7.85075H3.36317C2.38282 7.85075 1.59375 7.9703 1.59375 6.25667Z"
            stroke="currentColor"
            strokeWidth="1.19556"
        />
        <path
            d="M2.78906 7.97021L3.91289 14.8566C4.16794 16.4029 4.78166 17.5347 7.06118 17.5347H11.8673C14.3461 17.5347 14.7127 16.4507 14.9997 14.9523L16.3387 7.97021"
            stroke="currentColor"
            strokeWidth="1.19556"
            strokeLinecap="round"
        />
    </svg>
);
