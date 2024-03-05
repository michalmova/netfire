import type { Metadata } from "next";
import "@styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Netfire coding challenge",
  description: "Netfire coding challenge web page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-inter tracking-[0.07em]'>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
