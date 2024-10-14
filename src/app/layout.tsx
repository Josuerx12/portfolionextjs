import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/navbar/navbar";
import Head from "next/head";
import MyLinks from "@/components/mylinks";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Portfólio JC",
  description:
    "Portfolio Josué Carvalho, desenvolvedor fullstack, node.js, react-js, sql, nosql, prisma orm e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/profile.png" />
      </Head>
      <body className={raleway.className}>
        <Navbar />
        <MyLinks />
        {children}
      </body>
    </html>
  );
}
