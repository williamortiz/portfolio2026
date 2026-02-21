import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Ortiz | Portfolio 2026",
  description: "Personal portfolio of William Ortiz – software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
