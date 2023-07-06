import "./globals.css";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Admin dashboard",
  description: "admin ddashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <ModalProvider />
        </body>
      </html>
    </ClerkProvider>
  );
}
