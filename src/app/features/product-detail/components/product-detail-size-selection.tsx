import { CircleInfo } from "@/components/icons";

export const ProductDetailSizeSelection = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.25">
                <span className="font-heading font-bold text-gray-800">Size</span>
                <CircleInfo className="text-gray-800" />
                <span className="text-xs text-gray-500">12 oz</span>
            </div>
            <div className="flex gap-4">
                <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-full bg-base-100 flex items-center justify-center font-bold text-white h-[33px]">
                        12OZ
                    </div>
                    <span className="text-xs text-gray-500">12 Cups</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="relative w-full rounded-full bg-gray-100 flex items-center justify-center text-gray-800 h-[33px]">
                        2LB
                        <div className="absolute top-0 left-1/2 -translate-y-[65%] -translate-x-1/2 h-[20px] bg-white flex items-center justify-center px-2 border border-primary rounded-full text-[10px] text-gray-800">
                            SAVE 5%
                        </div>
                    </div>
                    <span className="text-xs text-gray-500">45 Cups</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="relative w-full rounded-full bg-gray-100 flex items-center justify-center text-gray-800 h-[33px]">
                        5LB
                        <div className="absolute top-0 left-1/2 -translate-y-[65%] -translate-x-1/2 h-[20px] bg-white flex items-center justify-center px-2 border border-primary rounded-full text-[10px] text-gray-800">
                            SAVE 10%
                        </div>
                    </div>
                    <span className="text-xs text-gray-500">117 Cups</span>
                </div>
            </div>
        </div>
    );
};