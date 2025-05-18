import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

// Importing the Header & Footer component
import Header from "./components/Header";
import Footer from "./components/Footer";

const figtreeSans = Figtree({
    variable: "--font-fig-sans",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    initialScale: 1,
    width: "device-width",
};
export const metadata: Metadata = {
    title: "Project",
    description: "Project Description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${figtreeSans.variable} antialiased`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
