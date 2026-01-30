import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VRT Entrepreneur Growth Alliance™ (EGA) - 12-Month Growth Journey",
  description: "Scale profitably, reduce owner dependence, and increase enterprise value through proven leadership, strategy, and execution systems.",
  icons: {
    icon: [
      { url: "/vercel.svg", type: "image/svg+xml" },
    ],
    shortcut: "/vercel.svg",
    apple: "/vercel.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

