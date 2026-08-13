import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/form/field/select';
import { EmptyOrder } from '../components/empty-order';
import { OrderItem } from '../components/order-item';

export function OrderList({ orders = [] }: { orders?: any[] }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="text-xl font-heading font-bold">
                    Total Order: {orders.length}
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
            {orders.length ? (
                <div className="flex flex-col gap-4">
                    {orders.map((order, idx) => (
                        <OrderItem key={`order-item-${idx}`} />
                    ))}
                </div>
            ) : (
                <EmptyOrder />
            )}
        </div>
    );
}
