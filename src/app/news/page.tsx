import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { newsItems } from "@/lib/content";

export default function NewsPage() {
  return (
    <PageShell
      kicker="Newsroom"
      title="Pelana Tujuh News"
      description="Editorial updates, program announcements, event recaps, and collaboration highlights from Pelana Tujuh."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {newsItems.map((item) => (
          <article key={item.title} className="surface-card overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {item.tag} / {item.date}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
