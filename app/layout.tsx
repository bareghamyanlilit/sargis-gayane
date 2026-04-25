import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Սարգիս և Գայանե",
  description: "Սարգիս և Գայանե",
  openGraph: {
    title: "Սարգիսի և Գայանեի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://sargis-gayane.vercel.app",
    siteName: "Սարգիս և Գայանե",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
