import { createFileRoute } from "@tanstack/react-router";
import factoryHero from "@/assets/factory-hero.jpg";
import solarImage from "@/assets/solar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wattz — Machine-level energy savings for factories" },
      {
        name: "description",
        content:
          "Wattz turns factory electricity data into rupee savings: live machine tracking, AI briefings, alerts and auditor-ready BRSR carbon reports.",
      },
      { property: "og:title", content: "Wattz — Machine-level energy savings for factories" },
      {
        property: "og:description",
        content:
          "Track every machine, catch losses before the bill, and export auditor-ready carbon reports. Built for Indian MSME factories.",
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
    body: "A live forecast of month-end cost, running machines, and how much of it you can still avoid.",
  },
  {
    label: "Machines",
    title: "Every motor, priced by the hour",
    body: "Live kW, cost per hour and specific-energy gap for each machine, so waste has an address.",
  },
  {
    label: "Assistant",
    title: "Ask in your own language",
    body: "Wattz answers questions about losses, alerts and savings — typed or spoken, in the language your floor speaks.",
  },
  {
    label: "Alerts",
    title: "Losses, caught the same day",
    body: "Abnormal consumption and spikes surface as plain instructions, not as raw graphs.",
  },
];

const bank = [
  { label: "Solar self-consumption", value: "₹2" },
  { label: "Solar export", value: "₹126" },
  { label: "Prevented losses", value: "₹0" },
  { label: "Optimization gains", value: "₹0" },
];

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
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
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-20 sm:pt-20">
        <p className="eyebrow">For Indian MSME factories</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
          Machine-level rupee savings,
          <span className="italic text-accent"> from day one.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Wattz reads your factory's electricity the way an accountant reads a ledger — per
          machine, per hour, in rupees. Then it tells you what to switch off.
        </p>
        <div className="mt-9">
          <a
            href="#pilot"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start your 14-day pilot
          </a>
        </div>

        <figure className="mt-16 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-lift)]">
          <img
            src={factoryHero}
            alt="Machinist working at a lathe on a small Indian factory floor"
            width={1600}
            height={1200}
            className="h-[320px] w-full object-cover sm:h-[520px]"
          />
        </figure>

        <dl className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {[
            ["4", "machines tracked in a starter plant"],
            ["122 kW", "peak draw seen at a glance"],
            ["24 hrs", "loss prediction window"],
            ["Scope 1+2", "BRSR-aligned carbon reporting"],
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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
            Four screens. One question: where is the money going?
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {features.map((f) => (
              <article key={f.label} className="bg-card p-8 sm:p-10">
                <p className="eyebrow">{f.label}</p>
                <h3 className="mt-4 text-2xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Savings bank */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">The savings bank</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Every avoided rupee, kept on the record.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Solar self-consumption, export credits, prevented losses and optimization gains
              accumulate into one balance — with a projected annual figure you can take to the
              board.
            </p>
            <div className="surface-card mt-9 p-7">
              <p className="eyebrow">How your bank grew this month</p>
              <ul className="mt-4">
                {bank.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between border-b border-border py-3 text-sm last:border-0"
                  >
                    <span>{row.label}</span>
                    <span className="font-medium text-accent">{row.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                Projected annual saving <span className="text-foreground">₹1,674</span>
              </p>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <img
              src={solarImage}
              alt="Rooftop solar panels on an industrial shed at dawn"
              width={1200}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Compliance */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <h2 className="text-4xl leading-tight sm:text-5xl">
              Reports your buyer's auditor will accept.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Grid EF 0.716 kgCO₂e/kWh (CEA India). Aligned with BRSR Core P6 Q7 (energy) and Q8
              (GHG) — the disclosures MSMEs in the value chain of top-250 listed entities are
              increasingly asked for.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              ["Renewable share", "100%"],
              ["Intensity", "10.366 kg/unit"],
              ["Avoided (solar)", "4.3497 tCO₂e"],
            ].map(([label, value]) => (
              <div key={label} className="surface-card p-7">
                <p className="eyebrow">{label}</p>
                <p className="mt-3 font-display text-3xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot */}
      <section id="pilot" className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="eyebrow">14-day pilot</p>
        <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
          Start with one plant. Keep the savings.
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted-foreground">
          Full features during the trial: machine tracking, AI assistant, alerts, shareable
          auditor-ready reports and multi-plant support.
        </p>
        <form
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" className="sr-only">
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@factory.in"
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
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg text-foreground">Wattz</span>
          <span>Energy intelligence for Indian factories</span>
        </div>
      </footer>
    </main>
  );
}
