import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteMobileNav } from "@/components/site-mobile-nav";

export const metadata: Metadata = {
  title: "PELANA TUJUH",
  description: "Pelana Tujuh entertainment media platform.",
};

const themeInitScript = `
  (function () {
    try {
      var stored = localStorage.getItem('pelana7-theme');
      var preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored === 'light' || stored === 'dark' ? stored : (preferredDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-theme="dark" suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <SiteMobileNav />
      </body>
    </html>
  );
}
