import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ShopifyProviders from "./providers";
import { MobileFrame } from "./components/MobileFrame";

// 使用 Inter 字体替代 Geist 以避免兼容性问题
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alien Stage",
  description: "Alien stage malaysia special event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans text-white`}>
        <ShopifyProviders locale="en-US">
          {/* <MobileFrame>{children}</MobileFrame> */}
          {children}
        </ShopifyProviders>
      </body>
    </html>
  );
}
