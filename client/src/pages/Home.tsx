/**
 * Design philosophy: Root Shell, cinematic — the hero is the identity itself: MOHAMED ATEF
 * in giant type, glitch and glow, with a typed $ light0xyagmi handle. The terminal lives in
 * a slide-in side shell: boot sequence, easter eggs, `cv` downloads the CV. Below: living
 * background, staggered reveals, counters, proof ticker. Security-only content; Kira stays
 * quiet. Accent color is one CSS variable (--accent) for a one-line re-theme.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Bug,
  Github,
  Linkedin,
  Mail,
  ScanSearch,
  ShieldCheck,
  SquareTerminal,
  Trophy,
  Twitter,
  Workflow,
  X,
} from "lucide-react";

const ASSETS = {
  logo: "/assets/logo.png",
  hero: "/assets/hero.webp",
  xtipDashboard: "/assets/xtip-dashboard.webp",
  cv: "/assets/Mohamed_Atef_Unified_Cybersecurity_CV.pdf",
};

const stats = [
  { value: "02", label: "confirmed disclosures", detail: "Zivver · Private Internet Access" },
  { value: "01", label: "ctf first place", detail: "Exploit3rs FlagRush" },
  { value: "26", label: "global placement", detail: "Zinad Cyber Championship 2025" },
];

const TICKER = [
  "zivver hall of fame",
  "private internet access",
  "hackerone",
  "bugcrowd",
  "yeswehack",
  "exploit3rs flagrush — 1st",
  "zinad 2025 — 26th global",
  "cyshield — 78th",
];

const method = [
  { n: "01", title: "Map the surface", copy: "Web, API and external attack-path reconnaissance.", icon: ScanSearch },
  { n: "02", title: "Isolate the condition", copy: "Manual testing, controlled validation and repeatable evidence.", icon: Bug },
  { n: "03", title: "Prove the impact", copy: "Authentication, authorization and adversary-path analysis.", icon: ShieldCheck },
  { n: "04", title: "Leave a clear route", copy: "Reporting, remediation context and thoughtful retesting.", icon: Workflow },
];

const experience = [
  { date: "2025 — now", title: "Bug Hunter", place: "HackerOne · Bugcrowd · YesWeHack" },
  { date: "2025 — now", title: "Co-Founder & Technical Lead", place: "XTIP™" },
  { date: "Jul — Aug 2025", title: "Cybersecurity Intern", place: "WE" },
  { date: "Aug — Sep 2025", title: "Cybersecurity Intern", place: "National Telecommunication Institute" },
];

const foundation = [
  { date: "2024 — present", title: "B.Sc. Computer Science — Network & Cybersecurity", detail: "Elsewedy University of Technology · GPA 4.2 · Second-year Top Achiever" },
  { date: "2021 — 2024", title: "Technical Diploma — Telecommunications", detail: "WE School for Applied Technology · 97.89% · Ranked 2nd Overall" },
  { date: "2022 — 2024", title: "WE Training & Development", detail: "Three cycles covering transmission media, SDH, FTTX, routing and switching." },
];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerParent = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-60px" },
  variants: { hidden: {}, show: { transition: { staggerChildren: 0.09 } } },
};
const staggerChild = {
  variants: {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  },
};

function Tag({ n, children }: { n?: string; children: React.ReactNode }) {
  return (
    <p className="tag">
      {n && <b>{n} /</b>} {children}
    </p>
  );
}

function WinBar({ path }: { path: string }) {
  return (
    <div className="win-bar" aria-hidden="true">
      <i /><i /><i />
      <span>{path}</span>
    </div>
  );
}

function CountUp({ value }: { value: string }) {
  const n = parseInt(value, 10);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("00");
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(String(Math.round(n * eased)).padStart(2, "0"));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, n, value]);
  return <span ref={ref}>{display}</span>;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

function Magnetic({
  children,
  className,
  href,
  external,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.26}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <a
      ref={ref}
      className={className}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function TypedHandle() {
  const TXT = "light0xyagmi";
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(TXT.length);
      return;
    }
    if (n >= TXT.length) return;
    const t = setTimeout(() => setN((c) => c + 1), n === 0 ? 950 : 70 + Math.random() * 50);
    return () => clearTimeout(t);
  }, [n]);
  return (
    <p className="hero-handle">
      <span className="t-prompt">$</span> {TXT.slice(0, n)}
      <span className="cursor" />
    </p>
  );
}

const SHELL_BOOT = [
  "[ ok ] light0xyagmi kernel",
  "[ ok ] mount /dev/identity",
  "[ ok ] load modules: recon · web · osint",
  "[ ok ] session: light0xyagmi@root",
  "ACCESS GRANTED",
  "$ whoami",
  "light0xyagmi — mohamed atef · security researcher",
  "guest shell ready — type `help`",
];

const EGGS: Record<string, string[]> = {
  help: ["available: whoami · ls · cv · ryuk · kira · casefile · sudo · clear"],
  whoami: ["light0xyagmi — mohamed atef · security researcher"],
  ls: ["about.txt  roles.txt  disclosures/  notes/  cv.pdf"],
  kira: ["a god of the new world would still patch his own bugs first."],
  ryuk: ["\"humans are... interesting.\" — a shinigami, probably", "apple inventory: 0. suspicious."],
  casefile: ["case file #0134 — status: open.", "next case: yours? ./send_message above"],
  sudo: ["permission denied. incident logged."],
};

function GuestShell({ active }: { active: boolean }) {
  const [log, setLog] = useState<string[]>([]);
  const [booted, setBooted] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (active) inputRef.current?.focus();
  }, [active]);
  useEffect(() => {
    if (!active || booted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLog(SHELL_BOOT);
      setBooted(true);
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setLog(SHELL_BOOT.slice(0, i));
      if (i >= SHELL_BOOT.length) {
        clearInterval(t);
        setBooted(true);
      }
    }, 150);
    return () => clearInterval(t);
  }, [active, booted]);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");
    if (!cmd) return;
    if (cmd === "clear") {
      setLog([]);
      return;
    }
    if (cmd === "cv") {
      const a = document.createElement("a");
      a.href = ASSETS.cv;
      a.download = "Mohamed_Atef_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setLog((l) => [...l, "$ cv", "fetching cv.pdf ... downloaded"].slice(-14));
      return;
    }
    const out = EGGS[cmd] ?? [`command not found: ${cmd} — try \`help\``];
    setLog((l) => [...l, `$ ${cmd}`, ...out].slice(-14));
  };
  return (
    <div className="guest-shell">
      <div className="guest-log" aria-live="polite">
        {log.map((line, i) => (
          <p
            key={i}
            className={
              line.startsWith("$ ") ? "t-cmd" : line === "ACCESS GRANTED" ? "t-out boot-ok" : "t-out"
            }
          >
            {line}
          </p>
        ))}
      </div>
      <form className="guest-form" onSubmit={submit}>
        <span className="t-prompt">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type help"
          aria-label="Guest shell command"
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>
  );
}

function EdgeShell({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {open && <div className="shell-backdrop" onClick={onClose} aria-hidden="true" />}
      <aside
        className={`shell-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-label="Guest shell terminal"
        aria-hidden={!open}
      >
        <div className="shell-head">
          <WinBar path="guest@light0xyagmi: ~" />
          <button className="shell-close" onClick={onClose} aria-label="Close guest shell">
            <X />
          </button>
        </div>
        <GuestShell active={open} />
        <p className="shell-hint">try: help · whoami · ryuk · casefile · sudo</p>
      </aside>
    </>
  );
}

export default function Home() {
  const [shellOpen, setShellOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);
  return (
    <div className="site">
      <ScrollProgress />
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="bg-fx" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-glow glow-a" />
        <div className="bg-glow glow-b" />
        <div className="bg-grain" />
      </div>

      <header className="header">
        <a href="#top" className="brand" aria-label="Mohamed Atef home">
          <img className="brand-mark" src={ASSETS.logo} alt="" />
          <span className="brand-text">
            <b>$ light0xyagmi</b>
            <small>mohamed atef</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">work</a>
          <a href="#method">method</a>
          <a href="#record">record</a>
          <a href="#notes">notes</a>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="hero hero-v5" ref={heroRef}>
          <div className="hero-glow" aria-hidden="true" />
          <motion.div className="hero-inner" style={{ y: heroY, opacity: heroOpacity }}>
            <p className="hero-kicker">// security researcher · bug hunter</p>
            <h1 className="hero-name">
              <span className="glitch" data-text="MOHAMED">MOHAMED</span>
              <span className="hero-name-ghost">ATEF</span>
            </h1>
            <TypedHandle />
            <div className="hero-actions">
              <Magnetic className="btn btn-primary" href="#work">
                ./view_selected_work <ArrowUpRight />
              </Magnetic>
              <Magnetic className="btn btn-ghost" href="#notes">
                <BookOpen /> research_notes
              </Magnetic>
            </div>
          </motion.div>
          <div className="scroll-hint" aria-hidden="true">
            <span>scroll</span>
            <i />
          </div>
          <div className="crt" aria-hidden="true">
            <i className="crt-sweep" />
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((dup) => (
              <span key={dup}>
                {TICKER.map((t) => (
                  <span className="ticker-item" key={t}>
                    <b>·</b> {t}{" "}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <motion.section className="stats" aria-label="Selected proof points" {...staggerParent}>
          {stats.map((s) => (
            <motion.article key={s.label} {...staggerChild}>
              <p className="stat-value">
                <CountUp value={s.value} />
              </p>
              <div>
                <h2>{s.label}</h2>
                <span>{s.detail}</span>
              </div>
            </motion.article>
          ))}
        </motion.section>

        <motion.section id="work" className="section" {...reveal}>
          <div className="section-head">
            <Tag n="01">selected_work</Tag>
            <h2>
              Research, shipped<span className="dot">.</span>
            </h2>
          </div>

          <article className="win work-feature">
            <WinBar path="~/work/xtip — co-founder & technical lead" />
            <div className="work-feature-grid">
              <div className="work-feature-media">
                <img src={ASSETS.xtipDashboard} alt="XTIP public attack surface management dashboard" loading="lazy" decoding="async" />
              </div>
              <div className="work-feature-body">
                <h3>Explainable attack-surface management.</h3>
                <p>
                  Co-founding technical work for a real-time ASM platform that turns asset discovery
                  and exposure signals into prioritized, manageable external risk.
                </p>
                <ul className="fact-list">
                  <li><span>scope</span>Asset discovery · risk context</li>
                  <li><span>output</span>Explainable prioritization</li>
                </ul>
                <a className="text-link" href="https://xtip.cloud/en" target="_blank" rel="noreferrer">
                  View XTIP product site <ArrowUpRight />
                </a>
              </div>
            </div>
          </article>

          <motion.div className="work-grid" {...staggerParent}>
            <motion.article className="win proof-card" {...staggerChild}>
              <WinBar path="~/work/bug-bounty" />
              <div className="proof-body">
                <div className="proof-top">
                  <Tag>hall_of_fame</Tag>
                  <Bug className="proof-icon" aria-hidden="true" />
                </div>
                <h3>Confirmed disclosures.</h3>
                <p>
                  Valid security reports recognized by Zivver (Hall of Fame) and Private Internet
                  Access, hunted across the major coordinated-disclosure platforms.
                </p>
                <ul className="fact-list">
                  <li><span>platforms</span>HackerOne · Bugcrowd · YesWeHack</li>
                  <li><span>recognized</span>Zivver Hall of Fame · Private Internet Access</li>
                </ul>
              </div>
            </motion.article>
            <motion.article className="win proof-card" {...staggerChild}>
              <WinBar path="~/work/ctf — team 0xlight" />
              <div className="proof-body">
                <div className="proof-top">
                  <Tag>competition_record</Tag>
                  <Trophy className="proof-icon" aria-hidden="true" />
                </div>
                <h3>Competition record.</h3>
                <p>
                  Capture-the-flag results against national and global fields, with first-blood
                  finishes on live challenges.
                </p>
                <ul className="fact-list">
                  <li><span>1st place</span>Exploit3rs FlagRush · 2 first bloods</li>
                  <li><span>26th global</span>Zinad Cyber Championship 2025</li>
                  <li><span>78th</span>CyShield CTF</li>
                </ul>
              </div>
            </motion.article>
          </motion.div>
        </motion.section>

        <motion.section id="method" className="section" {...reveal}>
          <div className="section-head">
            <Tag n="02">method</Tag>
            <h2>
              The evidence comes first<span className="dot">.</span>
            </h2>
          </div>
          <motion.div className="method-grid" {...staggerParent}>
            {method.map((m) => (
              <motion.article key={m.n} className="win method-card" {...staggerChild}>
                <WinBar path={`~/method/${m.n}`} />
                <div className="method-body">
                  <div className="method-top">
                    <span className="method-n">{m.n}</span>
                    <m.icon className="method-icon" aria-hidden="true" />
                  </div>
                  <h3>{m.title}</h3>
                  <p>{m.copy}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section id="record" className="section section-split" {...reveal}>
          <div className="section-head sticky-head">
            <Tag n="03">record</Tag>
            <h2>
              The work behind the finding<span className="dot">.</span>
            </h2>
          </div>
          <div className="timeline">
            {experience.map((e) => (
              <article key={e.title + e.place} className="timeline-row">
                <span className="timeline-date">{e.date}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.place}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="notes" className="section section-split" {...reveal}>
          <div className="section-head sticky-head">
            <Tag n="04">notes</Tag>
            <h2>
              Write the trace down<span className="dot">.</span>
            </h2>
            <a className="text-link" href="https://medium.com/@mohamedatefsarhan123" target="_blank" rel="noreferrer">
              Open Medium archive <ArrowUpRight />
            </a>
          </div>
          <motion.div className="notes-list" {...staggerParent}>
            <motion.a className="win note-card" href="https://medium.com/@mohamedatefsarhan123" target="_blank" rel="noreferrer" {...staggerChild}>
              <WinBar path="~/notes/public-research.md" />
              <div className="note-body">
                <h3>One-Click Full Account Takeover</h3>
                <p>An unauthenticated OAuth endpoint and its account-impersonation impact.</p>
                <span className="note-link">Read the write-up <ArrowUpRight /></span>
              </div>
            </motion.a>
            <motion.a className="win note-card" href="https://medium.com/@mohamedatefsarhan123" target="_blank" rel="noreferrer" {...staggerChild}>
              <WinBar path="~/notes/ctf-writeup.md" />
              <div className="note-body">
                <h3>Exploit3rs CTF: The Debug Dilemma</h3>
                <p>Middleware abuse, debug leakage and cryptographic failure traced to the flag.</p>
                <span className="note-link">Read the write-up <ArrowUpRight /></span>
              </div>
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.section className="section identity" {...reveal}>
          <figure className="identity-art">
            <img src={ASSETS.hero} alt="Desk scene artwork from the light0xyagmi identity" loading="lazy" decoding="async" />
            <figcaption>
              <span>light0xyagmi</span>
              <span className="identity-note">identity art</span>
            </figcaption>
          </figure>
          <div className="identity-copy">
            <Tag n="05">identity</Tag>
            <h2>
              The name behind the handle<span className="dot">.</span>
            </h2>
            <p>
              light0xyagmi is a nod to Light Yagami: methodical, patient, and always writing names
              down. Every exposure leaves a trace — the work is finding it first and proving it
              matters.
            </p>
          </div>
        </motion.section>

        <motion.section className="section section-split" {...reveal}>
          <div className="section-head sticky-head">
            <Tag n="06">baseline</Tag>
            <h2>
              The baseline before the hunt<span className="dot">.</span>
            </h2>
          </div>
          <div className="timeline">
            {foundation.map((f) => (
              <article key={f.title} className="timeline-row">
                <span className="timeline-date">{f.date}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="contact" {...reveal}>
          <Tag n="07">open_channel</Tag>
          <h2>
            Open the next case<span className="dot">.</span>
          </h2>
          <p>
            Open to security research, penetration testing, application security and
            threat-intelligence opportunities.
          </p>
          <div className="hero-actions">
            <Magnetic className="btn btn-primary" href="mailto:mohamedatefsarhan@proton.me">
              <Mail /> ./send_message
            </Magnetic>
            <Magnetic className="btn btn-ghost" href="https://github.com/MohamedAtefMohamed" external>
              <Github /> inspect_github
            </Magnetic>
          </div>
          <p className="email-line"><code>mohamedatefsarhan@proton.me</code></p>
        </motion.section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-id">
            <img className="brand-mark" src={ASSETS.logo} alt="" />
            <div>
              <p className="footer-tag">$ light0xyagmi — mohamed atef</p>
              <p className="footer-copy">© 2026 · security researcher</p>
            </div>
          </div>
          <button className="guest-hint" onClick={() => setShellOpen(true)}>
            <SquareTerminal /> guest_shell — open the side terminal
          </button>
          <div className="footer-links">
            <a href="https://github.com/MohamedAtefMohamed" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/mohamed-sarhan-590b72279/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://x.com/lightx0yagumi" target="_blank" rel="noreferrer" aria-label="X"><Twitter /></a>
            <a href="https://medium.com/@mohamedatefsarhan123" target="_blank" rel="noreferrer" aria-label="Medium"><BookOpen /></a>
            <span className="footer-note">case file remains open</span>
          </div>
        </div>
        <div className="footer-mark" aria-hidden="true">
          LIGHT0XYAGMI
        </div>
      </footer>

      <button
        className="shell-tab"
        onClick={() => setShellOpen(true)}
        aria-label="Open guest shell terminal"
        title="guest shell"
      >
        <SquareTerminal />
        <span>guest_shell</span>
      </button>
      <EdgeShell open={shellOpen} onClose={() => setShellOpen(false)} />
    </div>
  );
}
