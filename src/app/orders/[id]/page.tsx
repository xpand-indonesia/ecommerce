import { HeaderProp } from '@/components/layout';
import Container from '@/components/ui/container';
import { OrderDetail } from '@/features/order-detail';

export default function OrderDetailPage() {
    return (
        <>
            <HeaderProp style="default" />
            <Container className="header-safe-8 max-w-[754px] py-8">
                <OrderDetail />
            </Container>
        </>
    );
}
