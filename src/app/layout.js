import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ServiceLink – Find trusted service providers near you",
  description: "A premium marketplace to find and connect with the best local service providers.",
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
      <body className="bg-gray-50 text-gray-900">
        <header className="flex items-center justify-between p-4 shadow-md bg-white">
          <Link href="/"  className="text-2xl font-bold text-blue-600">ServiceLink</Link>
          <nav className="space-x-4">
            <Link href="/" className="hover:text-blue-500 curser">Home</Link>
            <Link href="/provider/register" className="hover:text-blue-500">Register</Link>
          </nav>
        </header>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
