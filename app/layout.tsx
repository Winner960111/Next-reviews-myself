import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="gap-10 flex flex-col">
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/reviews" prefetch = {false}>Reviews</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          [footer]
        </footer>
      </body>
    </html>
  );
}
