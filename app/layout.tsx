import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import { LayoutSidebar } from "@/src/components/layout/sidebar/Sidebar";
import { SidebarLinks } from "@/src/infrastructure/data/SidebarLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efesse",
  description: "A simple application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        <main className="w-screen h-screen flex p-3 max-h-screen overflow-hidden">
          <LayoutSidebar links={SidebarLinks}/>
          <article className="h-full flex-1 bg-[#F3F6FD] rounded-2xl p-8 font-black overflow-y-scroll">
            {children}
          </article>
        </main>
      </body>
    </html>
  );
}
