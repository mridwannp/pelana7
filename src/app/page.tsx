import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { dashboardStats, eventItems, liveNow, newsItems, replayVideos } from "@/lib/content";

export default function DashboardPage() {
  return (
    <PageShell
      kicker="Bandung"
      title="Pelana Tujuh"
      description="A quick daily overview of Pelana Tujuh: active streams, latest editorial updates, upcoming events, and selected archive sessions."
    >
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((item) => (
          <article key={item.label} className="surface-card p-5">
            <p className="mono-kicker">{item.label}</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="surface-card overflow-hidden">
          <div className="relative aspect-[16/10]">
            <Image src={liveNow.image} alt={liveNow.title} fill className="object-cover" />
          </div>
          <div className="p-5 md:p-6">
            <p className="mono-kicker">On Stream</p>
            <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{liveNow.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{liveNow.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="pill-outline">{liveNow.start}</span>
              <span className="pill">{liveNow.viewers}</span>
            </div>
          </div>
        </article>

        <article className="surface-card p-5 md:p-6">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="mono-kicker">Recent News</p>
            <Link href="/news" className="pill-outline">
              View All
            </Link>
          </div>
          <div className="mt-4 grid gap-3">
            {newsItems.slice(0, 3).map((item) => (
              <Link
                key={item.title}
                href="/news"
                className="border border-[var(--line)] p-4 transition hover:bg-[var(--surface-alt)]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">{item.date}</p>
                <h3 className="mt-2 text-lg font-semibold leading-tight">{item.title}</h3>
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="surface-card p-5 md:p-6">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="mono-kicker">Upcoming Events</p>
            <Link href="/events" className="pill-outline">
              Events
            </Link>
          </div>
          <div className="mt-4 grid gap-3">
            {eventItems.slice(0, 2).map((event) => (
              <div key={event.title} className="grid grid-cols-1 gap-3 border border-[var(--line)] p-3 sm:grid-cols-[110px_1fr]">
                <div className="relative h-28 sm:h-20">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{event.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{event.place}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {event.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card p-5 md:p-6">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="mono-kicker">Archive Picks</p>
            <Link href="/archive/replay" className="pill-outline">
              Archive
            </Link>
          </div>
          <div className="mt-4 grid gap-3">
            {replayVideos.slice(0, 2).map((video) => (
              <div key={video.title} className="grid grid-cols-1 gap-3 border border-[var(--line)] p-3 sm:grid-cols-[110px_1fr]">
                <div className="relative h-28 sm:h-20">
                  <Image src={video.image} alt={video.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{video.title}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {video.published} / {video.duration}
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
