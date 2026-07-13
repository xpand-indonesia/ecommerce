import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import { ReactNode } from "react";

interface FAQ {
    id: string;
    title: string;
    description: ReactNode;
}

const FAQS: FAQ[] = [
    {
        id: "1",
        title: "What's are the benefit of subscribing?",
        description: (
            <>
                <p>As a subscriber, you get:</p><br />
                <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}><li>15% off all your orders, including one-time purchases</li><li>First dibs when sold-out coffees are back in stock</li><li>Early access to limited-release coffees</li><li>Freebies and samples throughout your subscription</li></ul>
            </>
        )
    },
    {
        id: "2",
        title: "Are you really roasting to order?",
        description: (
            <>
                <p>As a subscriber, you get:</p><br />
                <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}><li>15% off all your orders, including one-time purchases</li><li>First dibs when sold-out coffees are back in stock</li><li>Early access to limited-release coffees</li><li>Freebies and samples throughout your subscription</li></ul>
            </>
        )
    },
    {
        id: "3",
        title: "How is your coffee sourced?",
        description: (
            <>
                <p>As a subscriber, you get:</p><br />
                <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}><li>15% off all your orders, including one-time purchases</li><li>First dibs when sold-out coffees are back in stock</li><li>Early access to limited-release coffees</li><li>Freebies and samples throughout your subscription</li></ul>
            </>
        )
    },
    {
        id: "4",
        title: "Are all your coffees organic?",
        description: (
            <>
                <p>As a subscriber, you get:</p><br />
                <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}><li>15% off all your orders, including one-time purchases</li><li>First dibs when sold-out coffees are back in stock</li><li>Early access to limited-release coffees</li><li>Freebies and samples throughout your subscription</li></ul>
            </>
        )
    },
    {
        id: "5",
        title: "What brewing methods do you recommend?",
        description: (
            <>
                <p>As a subscriber, you get:</p><br />
                <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}><li>15% off all your orders, including one-time purchases</li><li>First dibs when sold-out coffees are back in stock</li><li>Early access to limited-release coffees</li><li>Freebies and samples throughout your subscription</li></ul>
            </>
        )
    },
    {
        id: "6",
        title: "Do you offer any non-caffeinated options?",
        description: (
            <>
                <p>As a subscriber, you get:</p><br />
                <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}><li>15% off all your orders, including one-time purchases</li><li>First dibs when sold-out coffees are back in stock</li><li>Early access to limited-release coffees</li><li>Freebies and samples throughout your subscription</li></ul>
            </>
        )
    },
    {
        id: "7",
        title: "Can I customize my coffee with different flavors?",
        description: (
            <>
                <p>As a subscriber, you get:</p><br />
                <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}><li>15% off all your orders, including one-time purchases</li><li>First dibs when sold-out coffees are back in stock</li><li>Early access to limited-release coffees</li><li>Freebies and samples throughout your subscription</li></ul>
            </>
        )
    }
];

export const ProductDetailReviewSectionView = () => {
    return (
        <section className="py-10">
            <Container className="space-y-8">
                <h2 className="text-4xl font-bold text-center">Customer Reviews</h2>
                <Accordion defaultValue="1" type="single" className="border-t border-gray-200" collapsible>
                    {FAQS.map((faq) => (
                        <AccordionItem value={faq.id} key={`faq-${faq.id}`}>
                            <AccordionTrigger className="text-lg font-bold">
                                {faq.title}
                            </AccordionTrigger>
                            <AccordionContent>
                                {faq.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </section>
    );
}