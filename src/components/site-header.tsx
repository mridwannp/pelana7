"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--background)_88%,transparent)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 px-6 py-4 md:px-10">
        <Link href="/" className="font-mono text-xs tracking-[0.28em] text-[var(--muted)]">
          PELANA TUJUH
        </Link>
        <nav className="ml-auto flex flex-wrap items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "border-[var(--foreground)] bg-[var(--surface-alt)] text-[var(--foreground)]"
                    : "border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
