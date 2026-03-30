import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { mediaArchiveItems } from "@/lib/content";

export default function ArchiveMediaPage() {
  return (
    <PageShell
      kicker="Archive / Media"
      title="Media Archive"
      description="Photo stories, galleries, and aftermovies from Pelana Tujuh productions and community events."
    >
      <div className="mb-2 flex items-center gap-2">
        <Link href="/archive/replay" className="pill-outline">
          Replay
        </Link>
        <Link href="/archive/media" className="pill">
          Media Archive
        </Link>
      </div>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mediaArchiveItems.map((item) => (
          <article key={item.title} className="surface-card overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {item.format} / {item.date}
              </p>
              <h2 className="mt-2 text-lg font-semibold leading-tight">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
