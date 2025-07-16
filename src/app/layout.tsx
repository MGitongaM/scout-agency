import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/FooterSection";
import NavigationSection from "@/components/NavigationSection";
import { getCldOgImageUrl } from "next-cloudinary";


const dmSans=DM_Sans({
  variable:"--font-dm-sans",
  subsets:["latin"],
  display:"swap",
})

const url=getCldOgImageUrl({src:"home-page-og_dpe1cb"})

export const metadata: Metadata = {
  title: "Scout Group Agency",
  description: "Our mission is to promotes inclusive tourism, ensuring travel is accessible to all. ",
  openGraph:{
    images:[
      {
        width:1200,
        height:627,
        url
      }
    ]
  }
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
