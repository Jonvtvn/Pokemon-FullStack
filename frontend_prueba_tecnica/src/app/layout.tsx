import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'Pokemons Details',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0"
        />
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
