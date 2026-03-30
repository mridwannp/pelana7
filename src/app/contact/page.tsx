import { PageShell } from "@/components/page-shell";
import { contactCards } from "@/lib/content";

export default function ContactPage() {
  return (
    <PageShell
      kicker="Contact"
      title="Contact Pelana Tujuh"
      description="Official channels for collaboration requests, media partnerships, event proposals, and production booking."
    >
      <section className="grid gap-4 md:grid-cols-3">
        {contactCards.map((card) => (
          <article key={card.title} className="surface-card p-5 md:p-6">
            <p className="mono-kicker">{card.title}</p>
            <p className="mt-3 break-words text-lg font-semibold">{card.detail}</p>
          </article>
        ))}
      </section>

      <section className="surface-card p-5 md:p-6">
        <p className="mono-kicker">Location and Office Hours</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)] md:text-base">
          Bandung. Office hours are Monday to Friday, 10:00 to 18:00 WIB.
          Live operations run in separate shifts based on each weekly broadcast rundown.
        </p>
      </section>
    </PageShell>
  );
}
