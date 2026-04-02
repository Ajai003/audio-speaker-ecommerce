import { Inter, Geist_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark antialiased",
        inter.variable,
        fontMono.variable
      )}
    >
      <body className="bg-[#1a1a1a] font-sans">{children}</body>
    </html>
  );
}
