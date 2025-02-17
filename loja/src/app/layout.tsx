import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navibar from "./components/Navibar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Estevan Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
    <html lang="pt">
      <body className={clsx( inter.className, 'bg-slate-700')}>
        <Navibar/>
        <main className="bg-slate-700 h-screen p-16">
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
  
}
