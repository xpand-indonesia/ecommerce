import { Badge } from "@/components/ui/badge";
import { formatNumber } from "@/lib/utils";

export const ProductDetailDescription = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-bold">Funki Mushroom Coffee</h2>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 line-through">
                        {formatNumber(60000, { currency: 'IDR' })}
                    </span>
                    <span className="text-lg">
                        {formatNumber(60000, { currency: 'IDR' })}
                    </span>
                    <Badge variant="danger">OFF {formatNumber(20)}%</Badge>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-heading font-bold">Nectarine, Blackberry, Honeysnuckle</h3>
                <p>
                    Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!
                </p>
            </div>
        </>
    );
}