import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Info {
    image: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}

const PARTNER_INFO: Info[] = [
    {
        image: '/images/card-single-origins.png',
        title: 'See Single Origins',
        description:
            'We get new single origins each week that come from all around the world! Explore the new offerings and find your new favourite way to start the day!',
        ctaText: 'See Offerings',
        ctaLink: '/',
    },
    {
        image: '/images/card-bulk.png',
        title: 'Bulk purchasing',
        description:
            "Join us as a partner. Wholesale is at the core of our operations. Funki isn't just another publicly traded company filled with investors and venture capitalists.",
        ctaText: 'Learn More',
        ctaLink: '/',
    },
    {
        image: '/images/card-bulk.png',
        title: 'Bulk purchasing',
        description:
            'Become our partner! Wholesale is central to what we do. Funki stands out from typical publicly traded companies dominated by investors and venture capitalists.',
        ctaText: 'Learn More',
        ctaLink: '/',
    },
    {
        image: '/images/card-wholesale.png',
        title: 'Wholesale',
        description:
            'Become our partner! Wholesale is central to what we do. Funki stands out from typical publicly traded companies that are merely driven by investors and venture capital.',
        ctaText: 'Learn More',
        ctaLink: '/',
    },
];

export function BePartners() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4">
            {PARTNER_INFO.map((info, index) => (
                <div
                    key={`partner-info-${index}`}
                    className="relative h-[376px] lg:h-[588px] flex flex-col justify-center items-center text-center text-white overflow-hidden group"
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src={info.image}
                            alt={info.title}
                            fill
                            className="object-cover -z-10 group-hover:scale-105 transition-transform duration-500 brightness-[0.7]"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 -z-10" />
                    </div>
                    <div className="flex flex-col items-center gap-8 z-2 px-8">
                        <h3 className="font-heading text-3xl leading-[1.5]">
                            {info.title}
                        </h3>
                        <p className="text-sm leading-[1.214285714] lg:text-base lg:leading-[1.1875]">
                            {info.description}
                        </p>
                        <Button
                            variant="outline-white"
                            className="px-9.25 leading-[1.1875]"
                        >
                            {info.ctaText}
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
