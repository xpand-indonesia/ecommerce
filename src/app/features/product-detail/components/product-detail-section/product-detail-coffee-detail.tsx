import { CoffeeBean, Global, RefreshCircle } from "@/components/icons";
import { FavoriteChart } from "@/components/icons/favorite-chart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ReactNode } from "react";

interface CoffeeDetail {
    id: string;
    icon: ReactNode;
    title: string;
    description: string;
};

const DETAILS: CoffeeDetail[] = [
    {
        id: "level",
        icon: <CoffeeBean />,
        title: 'Roast Level',
        description: 'Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!'
    },
    {
        id: "origin",
        icon: <Global />,
        title: 'Origin',
        description: 'Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!'
    },
    {
        id: "variety",
        icon: <RefreshCircle />,
        title: 'Variety / Processing',
        description: 'Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!'
    },
    {
        id: "growing",
        icon: <FavoriteChart />,
        title: 'Growing Altitude',
        description: 'Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!'
    }
];

export const ProductDetailCofeeDetail = () => {
    return (
        <div className="space-y-6">
            <h3 className="font-heading text-lg font-bold">Coffee Details</h3>
            <Accordion defaultValue="level" type="single" className="border-t border-gray-200" collapsible>
                {DETAILS.map((detail) => (
                    <AccordionItem value={detail.id} key={`coffee-detail-${detail.id}`}>
                        <AccordionTrigger>
                            <div className="flex items-center text-gray-800 gap-1">
                                <CoffeeBean />
                                {detail.title}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm text-gray-800">{detail.description}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};