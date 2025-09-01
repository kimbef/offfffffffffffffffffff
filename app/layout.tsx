import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ErrorBoundary } from "@/components/error-boundary"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "unoobZzz - Dota 2 Content Creator & Streamer",
  description: "Master Dota 2 with unoobZzz! Dota 2 Veteran with 15+ years of experience  sharing gameplay, cool mechanics, strategies, and epic matches.",
  keywords: ["Dota 2", "unoobZzz", "gaming", "streaming", "YouTube", "Twitch", "MOBA", "Veteran", "MMR", "gaming content"],
  authors: [{ name: "unoobZzz" }],
  creator: "unoobZzz",
  publisher: "unoobZzz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://unoobzzz.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "unoobZzz - Dota 2 Content Creator & Streamer",
    description: "Master Dota 2 with unoobZzz! Dota 2 Veteran with 15+ years of experience  sharing gameplay, cool mechanics, strategies, and epic matches.",
    url: "https://unoobzzz.com",
    siteName: "unoobZzz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "unoobZzz - Dota 2 Content Creator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "unoobZzz - Dota 2 Content Creator & Streamer",
    description: "Master Dota 2 with unoobZzz! Dota 2 Veteran with 15+ years of experience  sharing gameplay, cool mechanics, strategies, and epic matches.",
    images: ["/og-image.jpg"],
    creator: "@unoobZzz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-6221865664647870" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6221865664647870"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WP4G493DGE"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WP4G493DGE');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
