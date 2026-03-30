import { PageShell } from "@/components/page-shell";
import { programs } from "@/lib/content";

export default function ProgramsPage() {
  return (
    <PageShell
      kicker="Programs"
      title="Core Programs"
      description="A snapshot of Pelana Tujuh's recurring formats and editorial pillars across live and recorded channels."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {programs.map((program) => (
          <article key={program.title} className="surface-card p-5 md:p-6">
            <p className="mono-kicker">Program</p>
            <h2 className="mt-3 text-2xl font-semibold">{program.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{program.detail}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
