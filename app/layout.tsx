import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elhadraoui SAMI — Software Engineer Student",
  description:
    "A driven student of software engineering passionate about turning bold ideas into polished digital products. I focus on combining technical expertise with design thinking to craft seamless, engaging user experiences.",
  keywords: [
    "FullStack Developer",
    "React",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "creative development",
    "software",
    "software developer",
    "software engineer",
  ],
  openGraph: {
    title: "Elhadraoui SAMI — Software Engineer Student",
    description:
      "Software Engineer Student at EMSI , passionate about turning bold ideas into polished digital products. I focus on combining technical expertise with design thinking to craft seamless, engaging user experiences.",
    url: "",
    siteName: "",
    images: [
      // {
      //   url: "https://i.ibb.co/FKMqc28/adeola-badero.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Adeola Badero — Frontend Software Engineer",
      // },
      // {
      //   url: "https://i.ibb.co/Y8hBTR4/ade-800.png",
      //   width: 800,
      //   height: 800,
      //   alt: "Adeola Badero — Frontend Software Engineer",
      // },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
