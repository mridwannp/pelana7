import { PageShell } from "@/components/page-shell";
import { schedule } from "@/lib/content";

export default function SchedulePage() {
  return (
    <PageShell
      kicker="Schedule"
      title="Weekly Broadcast Schedule"
      description="The regular weekly timeline for live broadcasts and editorial blocks at Pelana Tujuh."
    >
      <section className="surface-card p-5 md:p-6">
        <div className="grid gap-3 md:grid-cols-2">
          {schedule.map((slot) => (
            <div key={slot} className="flex items-center justify-between border border-[var(--line)] px-4 py-3">
              <span className="font-mono text-xs uppercase tracking-[0.14em]">{slot}</span>
              <span className="pill-outline">On Air</span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
