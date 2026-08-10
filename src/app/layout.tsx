import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import localFont from 'next/font/local';
import '../styles/globals.css';
import { LayoutProvider, Footer, Header } from '@/components/layout';

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
});

const areaInktrap = localFont({
    src: [
        {
            path: '../fonts/AreaInktrap/AreaInktrap_Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/AreaInktrap/AreaInktrap_Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-areainktrap',
});

export const metadata: Metadata = {
    title: 'Cofelty — Your Advanced Coffee Shop',
    description:
        'Discover premium coffee, tea, and chocolate at Cofelty. Starting 160+ orders with pure conditions. Shop single origins, bulk purchases, and wholesale.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${lato.variable} ${areaInktrap.variable} antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <LayoutProvider>
                    <Header />
                    {children}
                    <Footer />
                </LayoutProvider>
            </body>
        </html>
    );
}
