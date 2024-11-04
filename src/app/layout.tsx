import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ethan Dai",
  description: "Ethan Dai's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-gradient-to-br from-[#E1F8DC] to-[#ACDDDE] overflow-hidden`}>

        {children}
      </body>
    </html>
  );
}
