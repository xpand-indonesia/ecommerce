import { CoffeeBean, Global, RefreshCircle } from "@/components/icons";
import { FavoriteChart } from "@/components/icons/favorite-chart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ProductDetailCofeeDetail = () => {
    return (
        <div className="space-y-6">
            <h3 className="font-heading text-lg font-bold">Coffee Details</h3>
            <Accordion defaultValue="level" type="single" className="border-t border-gray-200" collapsible>
                <AccordionItem value="level">
                    <AccordionTrigger>
                        <div className="flex items-center text-gray-800 gap-1">
                            <CoffeeBean />
                            Roast Level
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="origin">
                    <AccordionTrigger>
                        <div className="flex items-center text-gray-800 gap-1">
                            <Global />
                            Origin
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="variety">
                    <AccordionTrigger>
                        <div className="flex items-center text-gray-800 gap-1">
                            <RefreshCircle />
                            Variety / Processing
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="growing">
                    <AccordionTrigger>
                        <div className="flex items-center text-gray-800 gap-1">
                            <FavoriteChart />
                            Growing Altitude
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p>Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};