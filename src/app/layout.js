import Header from "@/component/Header";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ServiceLink – Find trusted service providers near you",
  description:
    "A premium marketplace to find and connect with the best local service providers.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "ServiceLink",
    description: "Find trusted service providers near you.",
    url: "https://your-domain.com",
    images: ["/og-cover.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d0d] text-white">
        <Header />
        <main className="bg-[#0d0d0d]">{children}</main>
      </body>
    </html>
  );
}
