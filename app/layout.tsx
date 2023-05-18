import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";
import Sidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notion Minimal",
  description:
    "A simple notion minimal version to learn Next 13 , Prisma and Postgres",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex gap-[1rem]">
          <nav className="flex p-[1rem] min-h-screen flex-col w-1/4 bg-slate-100">
            {/* @ts-expect-error Async Server Component */}
            <Sidebar />
          </nav>
          <section className="w-3/4">{children}</section>
        </div>
      </body>
    </html>
  );
}
