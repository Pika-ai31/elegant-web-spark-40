import { createFileRoute } from "@tanstack/react-router";
import factoryHero from "@/assets/factory-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wattz — Machine-level energy savings for factories" },
      {
        name: "description",
        content:
          "Wattz turns factory electricity data into savings: live machine tracking, AI briefings, alerts and auditor-ready carbon reports.",
      },
      { property: "og:title", content: "Wattz — Machine-level energy savings for factories" },
      {
        property: "og:description",
        content:
          "Track every machine, catch losses before the bill, and export auditor-ready carbon reports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const features = [
  {
    label: "Dashboard",
    title: "The bill, before it arrives",
    body: "Live forecast of month-end cost and what you can still avoid.",
  },
  {
    label: "Machines",
    title: "Every motor, priced by the hour",
    body: "Per-machine power, cost per hour and energy gap — waste has an address.",
  },
  {
    label: "Assistant",
    title: "Ask in your own language",
    body: "Typed or spoken answers about losses, alerts and savings.",
  },
  {
    label: "Alerts",
    title: "Losses, caught the same day",
    body: "Abnormal consumption surfaced as plain instructions, not graphs.",
  },
];

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl">Wattz</span>
          <span className="eyebrow hidden sm:inline">Factory energy intelligence</span>
        </div>
        <a
          href="#pilot"
          className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
        >
          Start pilot
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-14 sm:pt-14">
        <p className="eyebrow">For modern factories</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
          Machine-level energy savings,
          <span className="italic text-accent"> from day one.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Wattz reads your factory's electricity per machine, per hour, in local currency — then tells you what to switch off.
        </p>
        <div className="mt-7">
          <a
            href="#pilot"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start your pilot
          </a>
        </div>

        <figure className="mt-12 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-lift)]">
          <img
            src={factoryHero}
            alt="Machinist working at a lathe on a factory floor"
            width={1600}
            height={1200}
            className="h-[280px] w-full object-cover sm:h-[420px]"
          />
        </figure>

        <dl className="mt-10 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {[
            ["Per machine", "tracking"],
            ["Live", "cost forecast"],
            ["Same-day", "loss alerts"],
            ["Auditor-ready", "carbon reports"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-3xl">{value}</dt>
              <dd className="mt-1 max-w-[14rem] text-sm text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
            Four screens. One question: where is the money going?
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {features.map((f) => (
              <article key={f.label} className="bg-card p-7 sm:p-8">
                <p className="eyebrow">{f.label}</p>
                <h3 className="mt-3 text-xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance + savings */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="surface-card p-8">
            <p className="eyebrow">Savings bank</p>
            <h2 className="mt-3 text-2xl leading-tight">
              Every avoided cost, kept on the record.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Solar self-consumption, export credits, prevented losses and optimization gains roll into one projected annual figure.
            </p>
          </div>
          <div className="surface-card p-8">
            <p className="eyebrow">Compliance</p>
            <h2 className="mt-3 text-2xl leading-tight">
              Reports your buyer's auditor will accept.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Aligned with leading emissions factors and sustainability disclosure frameworks — the reporting buyers and auditors expect.
            </p>
          </div>
        </div>
      </section>

      {/* Pilot */}
      <section id="pilot" className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="eyebrow">Pilot</p>
        <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
          Start with one plant. Keep the savings.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Full features during the trial: machine tracking, AI assistant, alerts and shareable reports.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" className="sr-only">
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@factory.com"
            className="h-12 flex-1 rounded-full border border-input bg-card px-5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request access
          </button>
        </form>
      </section>

      <footer className="rule-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg text-foreground">Wattz</span>
          <span>Energy intelligence for modern factories</span>
        </div>
      </footer>
    </main>
  );
}
