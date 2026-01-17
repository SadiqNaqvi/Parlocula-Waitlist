import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parlocula WaitList",
  description:
    "Parlocula is a community-first social platform for people who love movies and shows and enjoy meaningful discussions, curated shelves, and cinement-focused conversations.",
  keywords: [
    "Parlocula",
    "movies community",
    "tv shows community",
    "film discussion platform",
    "cinema social network",
    "movie discussions",
    "tv show discussions",
    "film lovers community",
  ],
  authors: [{ name: "Parlocula" }],
  creator: "Parlocula",
  openGraph: {
    title: "Parlocula - Where Stories Bring Us Together",
    description:
      "A community-first platform where movies and shows live beyond the credits. Join Parlocula and be part of meaningful cinement conversations.",
    url: "https://parlocula.vercel.app",
    siteName: "Parlocula",
    images: [
      {
        url: "https://parlocula.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parlocula - Where Stories Bring Us Together",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parlocula - Where Stories Bring Us Together",
    description:
      "Join Parlocula - a community for people who love movies, shows, and meaningful cinement discussions.",
    images: ["https://parlocula.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFont.variable} ${montserratFont.variable} antialiased`}
      >
        <Toaster swipeDirections={["bottom", "left", "right"]} />
        {children}
      </body>
    </html>
  );
}
