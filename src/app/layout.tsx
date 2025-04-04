"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Layout>{children}</Layout>
        </SessionProvider>
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
