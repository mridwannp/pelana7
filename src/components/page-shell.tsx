import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  kicker: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ title, kicker, description, children }: PageShellProps) {
  return (
    <main className="grid-overlay min-h-[calc(100vh-132px)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 md:px-10 md:py-10">
        <section className="surface-card p-6 md:p-8">
          <p className="mono-kicker">{kicker}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] md:text-base">{description}</p>
        </section>
        {children}
      </div>
    </main>
  );
}
