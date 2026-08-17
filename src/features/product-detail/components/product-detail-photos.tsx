import { cn } from '@/lib/utils';

export const ProductDetailPhotos = () => {
    return (
        <div className="flex lg:grid lg:grid-cols-2 gap-4">
            <div className="pr-px lg:hidden" />
            {Array.from({ length: 5 }).map((_, idx) => (
                <div
                    key={`product-image-${idx}`}
                    className={cn(
                        !idx ? 'lg:col-span-2' : '',
                        'w-[86.666666667vw] min-w-[86.666666667vw] aspect-[325/301.31] rounded-[32px] overflow-hidden bg-[#F7F7F7]',
                        'lg:w-full lg:min-w-auto lg:aspect-square'
                    )}
                />
            ))}
            <div className="pr-px lg:hidden" />
        </div>
    );
};
