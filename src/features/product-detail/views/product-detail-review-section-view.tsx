import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

export const ProductDetailReviewSectionView = () => {
    return (
        <section className="py-6 lg:py-10">
            <Container className="space-y-8 lg:px-10">
                <h2 className="text-xl font-bold text-center lg:text-4xl">
                    Customer Reviews
                </h2>
                <div>
                    <div className="flex items-center border-b border-gray-200 font-bold text-gray-800 leading-[1.1875]">
                        <div className="py-2 px-4 border-b-2 border-gray-800 -mb-px">
                            Reviews
                        </div>
                        <div className="py-2 px-4 border-b-2 border-transparent text-gray-500 -mb-px">
                            Questions
                        </div>
                    </div>
                    <div className="py-8 flex flex-col items-center justify-center gap-4 border-b border-gray-200">
                        <div className="text-sm text-gray-800">
                            Be the first review. Share your thoughts now.
                        </div>
                        <Button className="h-10! w-full max-w-[311px]">
                            WRITE NOW
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
