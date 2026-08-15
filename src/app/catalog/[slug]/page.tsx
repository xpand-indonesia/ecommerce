'use client';

import { HeaderProp } from '@/components/layout';
import Container from '@/components/ui/container';
import { CatalogListView } from '@/features/catalog';
import { use } from 'react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function CatalogPage({ params }: PageProps) {
    const { slug } = use(params);

    return (
        <>
            <HeaderProp style="default" />
            <Container className="py-8 lg:px-10 header-safe-8 flex flex-col gap-6">
                <CatalogListView name={slug} />
            </Container>
        </>
    );
}
