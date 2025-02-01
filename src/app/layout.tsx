import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/FooterSection";
import NavigationSection from "@/components/NavigationSection";


const dmSans=DM_Sans({
  variable:"--font-dm-sans",
  subsets:["latin"],
  display:"swap",
})

export const metadata: Metadata = {
  title: "Scout Group Agency",
  description: "Our misiion is promotes inclusive tourism, ensuring travel is accessible to all. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}antialiased`}
      >
        <NavigationSection/>
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
