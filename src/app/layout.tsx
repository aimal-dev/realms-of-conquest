import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mythya: Realms of Conquest",
  description: "An Epic Journey into Realms of Conquest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
