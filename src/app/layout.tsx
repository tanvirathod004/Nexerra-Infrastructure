import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexerra Infrastructure | Where Incredible Is Possible",
  description:
    "Nexerra Infrastructure – 37+ years of excellence in RCC contracting, residential, commercial, and industrial construction across Maharashtra and Gujarat. Est. 1987.",
  keywords:
    "RCC contractor Nashik, construction company Maharashtra, civil contractor, commercial construction, residential construction, infrastructure company India",
  authors: [{ name: "Nexerra Infrastructure" }],
  openGraph: {
    title: "Nexerra Infrastructure | Premier Construction Company India",
    description:
      "37+ years of RCC contracting excellence. 40+ projects, 15 lakh+ sq.ft constructed across Maharashtra and Gujarat.",
    type: "website",
    locale: "en_IN",
    siteName: "Nexerra Infrastructure",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
