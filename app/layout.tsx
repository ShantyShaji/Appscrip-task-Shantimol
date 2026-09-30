import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discover Our Products",
  description:
    "Discover our collection of products and explore our latest products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}