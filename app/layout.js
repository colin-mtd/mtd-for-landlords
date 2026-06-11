import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Making Tax Digital For Landlords | HMRC MTD Support & Compliance",

  description:
    "Helping landlords comply with HMRC Making Tax Digital requirements. MTD registration, quarterly submissions, practical support and affordable solutions designed specifically for landlords.",
 keywords: [
    "Making Tax Digital for landlords",
    "MTD for landlords",
    "HMRC MTD",
    "landlord tax reporting",
    "quarterly submissions",
    "MTD registration",
    "landlord compliance",
  ],

  };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-6JEXGECBK3"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-6JEXGECBK3');
    `}
  </Script>
</body>
    </html>
  );
}
