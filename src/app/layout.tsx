import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Cofelty — Your Advanced Coffee Shop",
  description:
    "Discover premium coffee, tea, and chocolate at Cofelty. Starting 160+ orders with pure conditions. Shop single origins, bulk purchases, and wholesale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
