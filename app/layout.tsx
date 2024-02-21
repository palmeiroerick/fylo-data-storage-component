import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fylo Data Storage Component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} bg-mobile lg:bg-desktop bg-veryDarkBlue flex h-screen w-screen items-center justify-center bg-cover bg-top bg-no-repeat lg:bg-contain lg:bg-bottom`}
      >
        {children}
      </body>
    </html>
  );
}
