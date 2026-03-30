import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { replayVideos } from "@/lib/content";

export default function ArchiveReplayPage() {
  return (
    <PageShell
      kicker="Archive / Replay"
      title="Replay Live Library"
      description="A complete archive of past Pelana Tujuh broadcasts for viewers who want to revisit full sessions."
    >
      <div className="mb-2 flex items-center gap-2">
        <Link href="/archive/replay" className="pill">
          Replay
        </Link>
        <Link href="/archive/media" className="pill-outline">
          Media Archive
        </Link>
      </div>

      <section className="grid gap-3">
        {replayVideos.map((video) => (
          <article
            key={video.title}
            className="surface-card grid grid-cols-1 gap-3 p-3 sm:grid-cols-[190px_1fr] md:grid-cols-[190px_1fr_auto_auto] md:items-center"
          >
            <div className="relative h-28">
              <Image src={video.image} alt={video.title} fill className="object-cover" />
            </div>
            <h2 className="text-lg font-semibold sm:text-xl">{video.title}</h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
              {video.published}
            </p>
            <p className="pill-outline w-fit">{video.duration}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
