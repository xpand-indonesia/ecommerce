import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function EmptyWishlist() {
    return (
        <div className="flex flex-col items-center justify-center py-10.5 gap-4">
            <svg
                width="69"
                height="69"
                viewBox="0 0 69 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_i_4349_17912)">
                    <path
                        d="M47.265 8.9126C42.0613 8.9126 37.4037 11.4426 34.5 15.3238C31.5963 11.4426 26.9387 8.9126 21.735 8.9126C12.9088 8.9126 5.75 16.1001 5.75 24.9838C5.75 28.4051 6.29625 31.5676 7.245 34.5001C11.7875 48.8751 25.7887 57.4713 32.7175 59.8288C33.695 60.1738 35.305 60.1738 36.2825 59.8288C43.2113 57.4713 57.2125 48.8751 61.755 34.5001C62.7038 31.5676 63.25 28.4051 63.25 24.9838C63.25 16.1001 56.0913 8.9126 47.265 8.9126Z"
                        fill="url(#paint0_linear_4349_17912)"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_i_4349_17912"
                        x="0"
                        y="-3"
                        width="69"
                        height="72"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="-3" />
                        <feGaussianBlur stdDeviation="4.65" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_4349_17912"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_4349_17912"
                        x1="34.5"
                        y1="8.9126"
                        x2="34.5"
                        y2="60.0876"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#D5D7DA" />
                        <stop offset="1" stopColor="#E9E9E9" />
                    </linearGradient>
                </defs>
            </svg>
            <div>No Order Yet, Let's Order Now</div>
            <Link href="/">
                <Button variant="outline" className="px-4 h-[35px]">
                    Go Shopping
                </Button>
            </Link>
        </div>
    );
}
