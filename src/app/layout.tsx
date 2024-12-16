import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glome Health",
  description: "Glome Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
