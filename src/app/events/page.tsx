import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { eventItems } from "@/lib/content";

export default function EventsPage() {
  return (
    <PageShell
      kicker="Events"
      title="Upcoming Events"
      description="A full view of upcoming sessions, community nights, and showcase programs from Pelana Tujuh."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {eventItems.map((event) => (
          <article key={event.title} className="surface-card overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src={event.image} alt={event.title} fill className="object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <p className="mono-kicker">Event</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight">{event.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{event.place}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {event.date}
              </p>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
