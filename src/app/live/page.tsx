import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { liveNow, recentLive } from "@/lib/content";

export default function LivePage() {
  return (
    <PageShell
      kicker="Live"
      title="On Stream and Recent Live"
      description="Monitor the active stream from Pelana Tujuh and browse recent sessions for quick catch-up."
    >
      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="surface-card overflow-hidden">
          <div className="relative aspect-[16/10]">
            <Image src={liveNow.image} alt={liveNow.title} fill className="object-cover" />
          </div>
          <div className="p-5 md:p-6">
            <p className="mono-kicker">On Stream</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{liveNow.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{liveNow.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="pill-outline">{liveNow.start}</span>
              <span className="pill-outline">{liveNow.platform}</span>
              <span className="pill">{liveNow.viewers}</span>
            </div>
          </div>
        </article>

        <article className="surface-card p-5 md:p-6">
          <p className="mono-kicker">Recent Live</p>
          <div className="mt-4 grid gap-3">
            {recentLive.map((item) => (
              <div key={item.title} className="grid grid-cols-1 gap-3 border border-[var(--line)] p-3 sm:grid-cols-[110px_1fr]">
                <div className="relative h-28 sm:h-20">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.note}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </PageShell>
  );
}
