import { Heart } from '@/components/icons/heart';
import { Badge } from '@/components/ui/badge';
import { formatNumber } from '@/lib/utils';

export const ProductDetailDescription = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                        Funki Mushroom Coffee
                    </h2>
                    <Heart className="size-6 text-gray-500 hidden lg:block" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 line-through">
                        {formatNumber(60000, { currency: 'IDR' })}
                    </span>
                    <span className="text-gray-800 text-base lg:text-lg">
                        {formatNumber(60000, { currency: 'IDR' })}
                    </span>
                    <Badge variant="danger" className="leading-[14px]">
                        OFF {formatNumber(20)}%
                    </Badge>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-base leading-[21px] lg:text-lg lg:leading-[24px] font-heading font-bold">
                    Nectarine, Blackberry, Honeysnuckle
                </h3>
                <p className="text-sm lg:text-base">
                    Discover the essence of our coffee bean journey! Each of our
                    charming cafes in Northwest Arkansas offers a unique
                    experience, showcasing the rich flavors and aromas of our
                    carefully sourced coffee beans. Check out our cafe hours,
                    dive into our diverse menu, and plan your visit any day of
                    the week!
                </p>
            </div>
        </>
    );
};
