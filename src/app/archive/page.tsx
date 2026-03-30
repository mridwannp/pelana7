import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { mediaArchiveItems, replayVideos } from "@/lib/content";

export default function ArchivePage() {
  return (
    <PageShell
      kicker="Archive"
      title="Content Archive"
      description="Explore replay sessions and media documentation from Pelana Tujuh programs and events."
    >
      <section className="grid gap-4 md:grid-cols-2">
        <article className="surface-card overflow-hidden">
          <div className="relative aspect-[16/10]">
            <Image src={replayVideos[0].image} alt="Replay archive" fill className="object-cover" />
          </div>
          <div className="p-5 md:p-6">
            <p className="mono-kicker">Replay</p>
            <h2 className="mt-2 text-2xl font-semibold">Replay Live Library</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Full recordings from live broadcasts, interviews, and curated music sessions.
            </p>
            <Link href="/archive/replay" className="pill-outline mt-4 inline-flex">
              Open Replay
            </Link>
          </div>
        </article>

        <article className="surface-card overflow-hidden">
          <div className="relative aspect-[16/10]">
            <Image src={mediaArchiveItems[0].image} alt="Media archive" fill className="object-cover" />
          </div>
          <div className="p-5 md:p-6">
            <p className="mono-kicker">Media Archive</p>
            <h2 className="mt-2 text-2xl font-semibold">Photo and Video Documentation</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Event galleries, aftermovies, and visual stories documenting Pelana Tujuh activities.
            </p>
            <Link href="/archive/media" className="pill-outline mt-4 inline-flex">
              Open Media
            </Link>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
