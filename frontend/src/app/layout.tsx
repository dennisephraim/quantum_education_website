import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ShowNavbarProvider } from "@/context/NavbarContext";
import { ThemeProvider } from "@/context/ThemeContext";

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
        className={`antialiased`}
      >
        <ThemeProvider>
          <ShowNavbarProvider>
            <Navbar />
            {children}
          </ShowNavbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
