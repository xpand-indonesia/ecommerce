import { Setting } from '@/components/icons/setting';
import { HeaderProp } from '@/components/layout';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/form/field/select';

export default function MyOrdersPage() {
    return (
        <>
            <HeaderProp style="default" />
            <div className="header-safe py-8">
                <div className="max-w-[754px] mx-auto flex flex-col gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="font-heading font-bold text-4xl text-gray-800">
                                Hi, Ricky Septian
                            </div>
                            <Button
                                variant="outline"
                                className="h-10 gap-2 px-4"
                            >
                                <Setting className="size-6" />
                                Settings
                            </Button>
                        </div>
                        <div className="bg-white border border-neutral-300 p-1 rounded-full flex items-center">
                            <div className="flex-1 h-11 flex items-center justify-center text-white rounded-full bg-primary">
                                My Orders
                            </div>
                            <div className="flex-1 h-11 flex items-center justify-center text-gray-500">
                                Wishlist
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-heading font-bold">
                            Total Order: 0
                        </div>
                        <Select>
                            <SelectTrigger className="max-w-[185px] h-13">
                                <SelectValue placeholder="All Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="unpaid">Unpaid</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col items-center justify-center py-10.5 gap-4">
                        <svg
                            width="69"
                            height="69"
                            viewBox="0 0 69 69"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_i_4349_17897)">
                                <path
                                    d="M46.7188 64.6875C49.4974 64.6875 51.75 62.4349 51.75 59.6562C51.75 56.8776 49.4974 54.625 46.7188 54.625C43.9401 54.625 41.6875 56.8776 41.6875 59.6562C41.6875 62.4349 43.9401 64.6875 46.7188 64.6875Z"
                                    fill="url(#paint0_linear_4349_17897)"
                                />
                                <path
                                    d="M23.7188 64.6875C26.4974 64.6875 28.75 62.4349 28.75 59.6562C28.75 56.8776 26.4974 54.625 23.7188 54.625C20.9401 54.625 18.6875 56.8776 18.6875 59.6562C18.6875 62.4349 20.9401 64.6875 23.7188 64.6875Z"
                                    fill="url(#paint1_linear_4349_17897)"
                                />
                                <path
                                    d="M13.915 11.3275L13.34 18.3712C13.225 19.7225 14.2887 20.8438 15.64 20.8438H59.6562C60.8638 20.8438 61.87 19.9237 61.9562 18.7163C62.33 13.6275 58.4487 9.4875 53.36 9.4875H18.0262C17.7387 8.2225 17.1637 7.015 16.2725 6.00875C14.835 4.485 12.8225 3.59375 10.7525 3.59375H5.75C4.57125 3.59375 3.59375 4.57125 3.59375 5.75C3.59375 6.92875 4.57125 7.90625 5.75 7.90625H10.7525C11.6438 7.90625 12.4775 8.28 13.0813 8.9125C13.685 9.57375 13.9725 10.4363 13.915 11.3275Z"
                                    fill="url(#paint2_linear_4349_17897)"
                                />
                                <path
                                    d="M58.9664 25.1562H14.8639C13.6564 25.1562 12.6789 26.0762 12.5639 27.255L11.5289 39.7612C11.1264 44.6775 14.9789 48.875 19.8952 48.875H51.8652C56.1777 48.875 59.9727 45.3388 60.2889 41.0263L61.2377 27.6C61.3526 26.2775 60.3177 25.1562 58.9664 25.1562Z"
                                    fill="url(#paint3_linear_4349_17897)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_i_4349_17897"
                                    x="0"
                                    y="-3"
                                    width="69"
                                    height="72"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolation-filters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
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
                                        result="effect1_innerShadow_4349_17897"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_4349_17897"
                                    x1="46.7188"
                                    y1="54.625"
                                    x2="46.7188"
                                    y2="64.6875"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#D5D7DA" />
                                    <stop offset="1" stopColor="#E9E9E9" />
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_4349_17897"
                                    x1="23.7188"
                                    y1="54.625"
                                    x2="23.7188"
                                    y2="64.6875"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#D5D7DA" />
                                    <stop offset="1" stopColor="#E9E9E9" />
                                </linearGradient>
                                <linearGradient
                                    id="paint2_linear_4349_17897"
                                    x1="32.7874"
                                    y1="3.59375"
                                    x2="32.7874"
                                    y2="20.8438"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#D5D7DA" />
                                    <stop offset="1" stopColor="#E9E9E9" />
                                </linearGradient>
                                <linearGradient
                                    id="paint3_linear_4349_17897"
                                    x1="36.3732"
                                    y1="25.1562"
                                    x2="36.3732"
                                    y2="48.875"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#D5D7DA" />
                                    <stop offset="1" stopColor="#E9E9E9" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div>No Order Yet, Let's Order Now</div>
                        <Button variant="outline" className="px-4 h-[35px]">
                            Go Shopping
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
