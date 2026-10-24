import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Menu, X, Instagram, Phone, MessageCircle, Plus } from "lucide-react";
import hero from "@/assets/hero.jpg";
import mehendi from "@/assets/mehendi.jpg";
import makeup from "@/assets/makeup.jpg";
import nails from "@/assets/nails.jpg";
import about from "@/assets/about.jpg";
import wedding from "@/assets/wedding.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rima — Mehendi, Makeup & Nail Artist in Guwahati" },
      { name: "description", content: "Bridal mehendi, makeup and nail artistry in Guwahati, Assam. 2026–27 bookings open — enquire on WhatsApp." },
      { property: "og:title", content: "Rima — Mehendi, Makeup & Nail Artist in Guwahati" },
      { property: "og:description", content: "Bridal mehendi, makeup and nail artistry in Guwahati. 2026–27 bookings open." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+91 9101033260";
const WA = "https://wa.me/919101033260";
const TEL = "tel:+919101033260";
const IG = [
  { label: "Mehendi", handle: "@mehendi_artist_rima_guwahati_", url: "https://www.instagram.com/mehendi_artist_rima_guwahati_/" },
  { label: "Makeup", handle: "@makeupartist_rima_guwahati", url: "https://www.instagram.com/makeupartist_rima_guwahati/" },
  { label: "Nail Art", handle: "@nailsby_rima_guwahati", url: "https://www.instagram.com/nailsby_rima_guwahati/" },
];
const NAV = [["Home", "home"], ["Services", "services"], ["Gallery", "gallery"], ["About", "about"], ["Contact", "contact"]];

function Index() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Booking />
      <Contact />
      <Social />
      <Faq />
      <Footer />
    </div>
  );
}

function Wordmark({ light }: { light?: boolean }) {
  return (
    <a href="#home" className="flex flex-col leading-none">
      <span className={`font-display text-3xl tracking-[0.3em] ${light ? "text-primary-foreground" : "text-primary"}`}>RIMA</span>
      <span className={`mt-1 text-[0.55rem] tracking-[0.35em] ${light ? "text-gold" : "text-muted-foreground"}`}>MEHENDI · MAKEUP · NAILS</span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled || open ? "bg-background/95 shadow-sm backdrop-blur" : "bg-background/80 backdrop-blur"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Wordmark />
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="text-xs uppercase tracking-[0.2em] text-foreground/80 transition hover:text-primary">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden lg:inline-flex">Book Your Session</a>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 border-t border-border px-6 py-6 lg:hidden">
          {NAV.map(([l, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="font-display text-2xl">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">Book Your Session</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative grid min-h-screen lg:grid-cols-[1fr_1.15fr]">
      <div className="flex flex-col justify-center px-6 pb-16 pt-32 sm:px-12 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-16">
        <p className="eyebrow">Beauty · Art · Elegance</p>
        <h1 className="mt-6 font-display text-6xl leading-[0.95] text-foreground sm:text-7xl xl:text-8xl">
          Look Beautiful,<br /><em className="text-primary">Feel Special.</em>
        </h1>
        <span className="mt-8 h-px w-20 bg-gold" />
        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
          Professional mehendi, makeup and nail artistry for your most memorable celebrations.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">Book Your Session</a>
          <a href="#gallery" className="btn-outline">Explore My Work</a>
        </div>
        <dl className="mt-14 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
          {[["2,551+", "Posts"], ["10.2K+", "Instagram Followers"], ["Guwahati", "Assam"]].map(([a, b]) => (
            <div key={b}>
              <dt className="font-display text-2xl text-primary">{a}</dt>
              <dd className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">{b}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative min-h-[70vh] lg:min-h-full">
        <img src={hero} alt="Indian bride with intricate mehendi and bridal makeup" width={1024} height={1344} className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute bottom-8 left-8 hidden border border-gold/60 bg-background/90 px-6 py-4 backdrop-blur sm:block">
          <p className="eyebrow">Now Booking</p>
          <p className="font-display text-xl">Weddings 2026–27</p>
        </div>
      </div>
    </section>
  );
}

function Heading({ eyebrow, title, text, center = true }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-muted-foreground">{text}</p>}
    </div>
  );
}

const SERVICES = [
  { n: "01", title: "Mehendi Art", img: mehendi, text: "Intricate henna artistry for bridal celebrations, festive occasions, and beautiful personal moments.", cta: "Explore Mehendi", cat: "Bridal Mehendi" },
  { n: "02", title: "Makeup Artistry", img: makeup, text: "Beautiful makeup looks designed to complement your style and make your special occasions memorable.", cta: "Explore Makeup", cat: "Makeup Looks" },
  { n: "03", title: "Nail Art", img: nails, text: "Elegant nail designs, beautiful finishes, and details that complete your look.", cta: "Explore Nail Art", cat: "Nail Art" },
];

function Services() {
  return (
    <section id="services" className="bg-card px-6 py-28">
      <Heading eyebrow="Services" title="Your Beauty, Your Style" text="Thoughtfully crafted beauty details for the moments that matter." />
      <div className="mx-auto mt-20 grid max-w-7xl gap-12 md:grid-cols-3 md:gap-8">
        {SERVICES.map((s, i) => (
          <article key={s.title} className={`group ${i === 1 ? "md:mt-16" : ""}`}>
            <div className="overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={896} height={1152} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="font-display text-lg text-gold">{s.n}</span>
              <h3 className="font-display text-3xl">{s.title}</h3>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
            <a href="#gallery" className="mt-5 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.2em] text-primary">{s.cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

const GALLERY = [
  { src: hero, cat: "Wedding Beauty", alt: "Bride in red lehenga", cls: "row-span-2" },
  { src: mehendi, cat: "Bridal Mehendi", alt: "Bridal henna detail", cls: "" },
  { src: nails, cat: "Nail Art", alt: "Burgundy and gold nail art", cls: "row-span-2" },
  { src: makeup, cat: "Makeup Looks", alt: "Bridal makeup close-up", cls: "" },
  { src: wedding, cat: "Wedding Beauty", alt: "Bride in blush lehenga", cls: "col-span-2" },
  { src: about, cat: "Makeup Looks", alt: "Beauty tools flat lay", cls: "" },
];
const CATS = ["All", "Bridal Mehendi", "Makeup Looks", "Nail Art", "Wedding Beauty"];

function Gallery() {
  const [cat, setCat] = useState("All");
  const [box, setBox] = useState<number | null>(null);
  const items = GALLERY.filter((g) => cat === "All" || g.cat === cat);
  useEffect(() => {
    if (box === null) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setBox(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [box]);
  return (
    <section id="gallery" className="px-6 py-28">
      <Heading eyebrow="Portfolio" title="A Glimpse of Our Artistry" text="Every detail reflects a love for beauty, creativity, and celebration." />
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`px-5 py-2 text-xs uppercase tracking-[0.18em] transition ${cat === c ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
        {items.map((g) => {
          const idx = GALLERY.indexOf(g);
          return (
            <button key={idx} onClick={() => setBox(idx)} className={`group relative overflow-hidden ${cat === "All" ? g.cls : ""}`} aria-label={`View ${g.alt}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 text-left text-xs uppercase tracking-[0.2em] text-primary-foreground opacity-0 transition group-hover:opacity-100">{g.cat}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">Sample imagery for presentation — to be replaced with Rima's own portfolio.</p>
      {box !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-6" onClick={() => setBox(null)}>
          <button aria-label="Close" className="absolute right-6 top-6 text-primary-foreground"><X size={32} /></button>
          <img src={GALLERY[box]!.src} alt={GALLERY[box]!.alt} className="max-h-[88vh] max-w-full object-contain" />
        </div>
      )}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-secondary/50 px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border border-gold" />
          <img src={about} alt="Mehendi cones, makeup brushes and nail polish" loading="lazy" width={1024} height={1152} className="relative aspect-[4/5] w-full object-cover" />
        </div>
        <div>
          <Heading center={false} eyebrow="About Rima" title="Artistry in Every Detail." />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Bringing together mehendi, makeup, and nail artistry to help you feel beautiful and confident during life's special moments.
          </p>
          <p className="mt-8 font-display text-xl italic text-primary">Guwahati, Assam, India.</p>
          <a href="#contact" className="btn-outline mt-10">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden bg-secondary md:grid-cols-2">
        <img src={wedding} alt="Bride in blush lehenga at a floral wedding venue" loading="lazy" width={1280} height={896} className="h-full min-h-80 w-full object-cover" />
        <div className="flex flex-col justify-center p-10 sm:p-16">
          <p className="eyebrow">Now Accepting Enquiries</p>
          <h2 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">2026–27 Bookings Are Open.</h2>
          <span className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Planning your wedding or a special occasion? Get in touch to discuss your preferred beauty services and event date.
          </p>
          <a href="#contact" className="btn-primary mt-10 self-start">Plan Your Look</a>
        </div>
      </div>
    </section>
  );
}

type Form = { name: string; phone: string; date: string; service: string; location: string; message: string };
const EMPTY: Form = { name: "", phone: "", date: "", service: "", location: "", message: "" };

function buildWhatsAppUrl(f: Form) {
  const lines = [
    "Hello Rima, I'd like to enquire about a booking.",
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Event date: ${f.date}`,
    `Service: ${f.service}`,
    `Location: ${f.location}`,
    f.message ? `Message: ${f.message}` : "",
  ].filter(Boolean);
  return `${WA}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function Contact() {
  const [f, setF] = useState<Form>(EMPTY);
  const [err, setErr] = useState<Partial<Record<keyof Form, string>>>({});
  const set = (k: keyof Form) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const x: typeof err = {};
    if (f.name.trim().length < 2) x.name = "Please enter your name";
    if (!/^[+\d][\d\s-]{8,}$/.test(f.phone.trim())) x.phone = "Please enter a valid phone number";
    if (!f.date) x.date = "Please choose your event date";
    if (!f.service) x.service = "Please select a service";
    if (!f.location.trim()) x.location = "Please enter the event location";
    setErr(x);
    if (Object.keys(x).length === 0) window.open(buildWhatsAppUrl(f), "_blank", "noopener");
  };
  const E = ({ k }: { k: keyof Form }) => (err[k] ? <p className="mt-1 text-xs text-destructive">{err[k]}</p> : null);
  const label = "text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground";
  return (
    <section id="contact" className="bg-card px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.3fr]">
        <div>
          <Heading center={false} eyebrow="Enquire" title="Let's Plan Your Perfect Look." text="Share a few details about your event and connect with Rima to discuss your requirements." />
          <div className="mt-10 space-y-4">
            <a href={TEL} className="flex items-center gap-3 hover:text-primary"><Phone size={18} className="text-primary" /> {PHONE}</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary"><MessageCircle size={18} className="text-primary" /> WhatsApp</a>
          </div>
        </div>
        <form onSubmit={submit} noValidate className="grid gap-7 sm:grid-cols-2">
          <label className="block"><span className={label}>Full name</span><input className="field" value={f.name} onChange={set("name")} /><E k="name" /></label>
          <label className="block"><span className={label}>Phone number</span><input className="field" type="tel" value={f.phone} onChange={set("phone")} /><E k="phone" /></label>
          <label className="block"><span className={label}>Preferred event date</span><input className="field" type="date" value={f.date} onChange={set("date")} /><E k="date" /></label>
          <label className="block"><span className={label}>Service required</span>
            <select className="field" value={f.service} onChange={set("service")}>
              <option value="">Select…</option>
              {["Mehendi", "Makeup", "Nail Art", "Multiple Services"].map((s) => <option key={s}>{s}</option>)}
            </select><E k="service" />
          </label>
          <label className="block sm:col-span-2"><span className={label}>Event location</span><input className="field" value={f.location} onChange={set("location")} /><E k="location" /></label>
          <label className="block sm:col-span-2"><span className={label}>Additional message</span><textarea rows={3} className="field resize-none" value={f.message} onChange={set("message")} /></label>
          <div className="sm:col-span-2">
            <button type="submit" className="btn-primary w-full sm:w-auto"><MessageCircle size={16} /> Book via WhatsApp</button>
            <p className="mt-4 text-xs text-muted-foreground">This is an enquiry, not a confirmed appointment. Rima will confirm availability for your date.</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="px-6 py-28">
      <Heading eyebrow="Instagram" title="Follow the Journey." text="Explore more beauty inspiration and discover the latest work." />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-2 md:grid-cols-6">
        {[mehendi, makeup, nails, hero, wedding, about].map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" className="aspect-square w-full object-cover" />
        ))}
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
        {IG.map((p) => (
          <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-border p-5 transition hover:border-primary">
            <Instagram className="text-primary" />
            <span><span className="block font-display text-xl">{p.label}</span><span className="text-xs text-muted-foreground">{p.handle}</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}

const FAQ = [
  ["Which beauty services can I enquire about?", "You can enquire about mehendi, makeup and nail art — individually or as multiple services for your event."],
  ["How can I enquire about bridal mehendi?", "Fill in the enquiry form or message Rima directly on WhatsApp with your event date and location."],
  ["Are bookings open for 2026–27?", "Yes, enquiries for 2026–27 are open. Availability for specific dates is confirmed directly by Rima."],
  ["How can I check availability for my event date?", "Send your preferred date via the form or WhatsApp, and Rima will let you know about availability."],
  ["How can I enquire about makeup or nail art?", "Select the service in the enquiry form, or reach out on WhatsApp for details on pricing and inclusions."],
  ["How can I discuss my preferred look?", "Share your ideas or reference pictures on WhatsApp to discuss the look you have in mind."],
];

function Faq() {
  return (
    <section className="bg-secondary/50 px-6 py-28">
      <Heading eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border border-y border-border">
        {FAQ.map(([q, a]) => (
          <details key={q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl">
              {q}<Plus className="shrink-0 text-primary transition group-open:rotate-45" size={20} />
            </summary>
            <p className="mt-4 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary px-6 pb-8 pt-20 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Wordmark light />
          <p className="mt-6 text-sm text-primary-foreground/70">Guwahati, Assam</p>
        </div>
        <div>
          <p className="eyebrow !text-gold">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map(([l, id]) => <li key={id}><a href={`#${id}`} className="text-primary-foreground/80 hover:text-gold">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-gold">Connect</p>
          <ul className="mt-5 space-y-3 text-sm">
            {IG.map((p) => <li key={p.url}><a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-gold">Instagram · {p.label}</a></li>)}
            <li><a href={TEL} className="text-primary-foreground/80 hover:text-gold">{PHONE}</a></li>
            <li><a href={WA} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-gold">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Rima — Mehendi · Makeup · Nails. All rights reserved.
      </div>
    </footer>
  );
}
