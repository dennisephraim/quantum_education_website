import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../context/ParallaxProvider";;

export const metadata: Metadata = {
  title: "Hello Quantum World",
  description: "A quantum education platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
