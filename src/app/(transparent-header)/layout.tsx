import { Header, Footer } from "@/components/layout";

export default function TransparentHeaderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header transparent />
            {children}
            <Footer />
        </>
    );
}
