import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNowDisplay = localFont({
  variable: "--font-helvetica-now-display",
  src: [
    {
      path: "../fonts/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const denimInk = localFont({
  variable: "--font-denim-ink",
  src: [
    {
      path: "../fonts/DenimINK-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DenimINK-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/DenimINK-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const editorialNew = localFont({
  variable: "--font-editorial-new",
  src: [
    {
      path: "../fonts/PPEditorialNew-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swamp — Design Studio",
  description:
    "Swamp is a design studio creating brands, experiences, and growth systems with clarity and personality.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${helveticaNowDisplay.variable} ${denimInk.variable} ${editorialNew.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
