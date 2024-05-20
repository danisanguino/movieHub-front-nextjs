import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import  {UserProvider } from "@auth0/nextjs-auth0/client"
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieHub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <UserProvider>
          <body className={inter.className}>
            {children}
          </body>
        </UserProvider>
      
    </html>
  );
}
