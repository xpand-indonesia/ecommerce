import { HeaderProp } from '@/components/layout';
import Container from '@/components/ui/container';
import { OrderDetail } from '@/features/order-detail';

export default function OrderDetailPage() {
    return (
        <>
            <HeaderProp style="default" />
            <Container className="py-4 header-safe-4 lg:py-8 lg:header-safe-8 lg:max-w-[754px]">
                <OrderDetail />
            </Container>
        </>
    );
}
