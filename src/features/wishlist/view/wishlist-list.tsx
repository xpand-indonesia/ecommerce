import { EmptyWishlist } from '../components/empty-wishlist';
import { WishlistItem } from '../components/wishlist-item';

export function WishlistList() {
    const wishlist: any[] = [{}, {}];

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="text-xl font-heading font-bold">
                    Total Order: {wishlist.length}
                </div>
            </div>
            {wishlist.length ? (
                <div className="flex flex-col gap-4">
                    {wishlist.map((order, idx) => (
                        <WishlistItem key={`order-item-${idx}`} />
                    ))}
                </div>
            ) : (
                <EmptyWishlist />
            )}
        </div>
    );
}
