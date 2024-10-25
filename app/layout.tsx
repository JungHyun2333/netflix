import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 라이브러리
import { ThemeProvider } from "config/material-tailwind-theme-provider";
import ReactQeuryProvider from "config/ReactQuery-provider";

// Font: Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextflix",
  description: "2024.10.25 Netflix Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="ko">
        <head>
          {/* FontAwesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={`${inter.className} antialiased mb-20`}>
          <ReactQeuryProvider>
            <div className="max-w-screen-xl w-full flex justify-center mx-auto p-3">{children}</div>
          </ReactQeuryProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
