import Footer from '@component/Components/Footer/Footer';
import Header from '@component/Components/Header/Navbar';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    // title: "Gourmet Chef Cuisine",
  // description: "we serve up delicious gourmet foods for all occasions",
  referrer: "origin-when-cross-origin",
  themeColor: "#590209",
  category: "e-commerce",
  applicationName: "Uniclique",
  authors: [
    { name: "Uniclique Team" },
    { name: "Uniclique", url: "https://uniclique-ui.vercel.app" },
  ],
  generator: "Uniclique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google",
    yahoo: "yahoo",
  },
  keywords: [
    "Ecommerce",
    "University Retail in Lagos and Nigeria",
    "Ecommerce website",
    "Products and services in the university",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Uniclique",
    description: "Discover a tailor-made website for your business – shop and sell with ease from those you know and trust!",
    url: "https://uniclique-ui.vercel.app/",
    siteName: "Uniclique",
    images: [
      {
        url: "https://uniclique-hack.vercel.app/images/unicliqueImage.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://uniclique-hack.vercel.app/images/unicliqueImage.jpg",
        width: 300,
        height: 300,
      },
      {
        url: "https://uniclique-hack.vercel.app/images/unicliqueImage.jpg",
        width: 1800,
        height: 1600,
        alt: "Uniclique Image",
      },
    ],
    emails: "uniclique@gmail.com",
    countryName: "Nigeria",
    phoneNumbers: "07080580497, 07048050217, 07040359018, 08104537964, 08183679548",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/images/Uniclique.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/Uniclique.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/Uniclique.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/Uniclique.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/Uniclique.svg"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/Uniclique.svg"
        />
         <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
