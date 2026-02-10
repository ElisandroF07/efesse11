import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import { LayoutSidebar } from "@/src/presentation/components/layout/sidebar/Sidebar";
import { SidebarLinks } from "@/src/infrastructure/data/SidebarLinks";
import { LayoutNavbar } from "@/src/presentation/components/layout/navbar.tsx/Navbar";

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
        <main className="w-screen h-screen flex flex-col md:flex-row sm:p-3 max-h-screen overflow-hidden">
          <div className="hidden md:block h-full">
            <LayoutSidebar links={SidebarLinks} />
          </div>
          
          <article className="h-full pb-[100px] sm:pb-0 flex-1 bg-[#F3F6FD] sm:rounded-2xl p-4 md:p-8 font-black w-full">
            {children}
          </article>
          <div className="md:hidden w-full fixed bottom-0 left-0 w-full bg-[var(--background)] overflow-hidden">
            <LayoutNavbar links={SidebarLinks} />
          </div>
        </main>
      </body>
    </html>
  );
}
