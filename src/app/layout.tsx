import type { Metadata } from "next";
import Script from "next/script";
import { manrope, inter } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/lib/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Sierra | Senior Frontend Developer",
  description:
    "Senior Frontend Developer — Building interfaces that balance technical precision with visual clarity.",
  openGraph: {
    title: "Pablo Sierra | Senior Frontend Developer",
    description:
      "Senior Frontend Developer — Building interfaces that balance technical precision with visual clarity.",
    type: "website",
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
      className={`${manrope.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="font-body transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="fluid-container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
