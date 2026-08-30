/**
 * Design philosophy: Quiet Occult Case File — a simple, original investigation ledger with
 * spacious evidence rows, one restrained crimson trace, and an anonymous investigator motif.
 */
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Bug,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  LockKeyhole,
  Mail,
  ScanSearch,
  ShieldCheck,
  Twitter,
  Webhook,
  Workflow,
} from "lucide-react";

const ASSETS = {
  logo: "/assets/logo.png",
  hero: "/assets/hero.jpg",
  xtipDashboard: "/assets/xtip-dashboard.webp",
  scad: "/assets/scad.jpg",
  learn2lead: "/assets/learn2lead.jpg",
  cv: "/assets/Mohamed_Atef_Unified_Cybersecurity_CV.pdf",
};

const proof = [
  ["02", "Confirmed disclosures", "Zivver · Private Internet Access"],
  ["01", "CTF first place", "Exploit3rs FlagRush"],
  ["26", "Global placement", "Zinad Cyber Championship 2025"],
];

const method = [
  ["01", "Map the surface", "Web, API and external attack-path reconnaissance."],
  ["02", "Isolate the condition", "Manual testing, controlled validation and repeatable evidence."],
  ["03", "Prove the impact", "Authentication, authorization and adversary-path analysis."],
  ["04", "Leave a clear route", "Reporting, remediation context and thoughtful retesting."],
];

const experience = [
  ["2025 — now", "Bug Hunter", "HackerOne · Bugcrowd · YesWeHack"],
  ["2025 — now", "Co-Founder & Technical Lead", "XTIP™ · Cairo, Egypt"],
  ["Jul — Aug 2025", "Cybersecurity Intern", "WE (Telecom Egypt) · Smart Village"],
  ["Aug — Sep 2025", "Cybersecurity Intern", "National Telecommunication Institute"],
];

const foundation = [
  ["2024 — present", "B.Sc. Computer Science — Network & Cybersecurity", "Elsewedy University of Technology · GPA 4.2 · Second-year Top Achiever"],
  ["2021 — 2024", "Technical Diploma — Telecommunications", "WE School for Applied Technology · 97.89% · Ranked 2nd Overall"],
  ["2022 — 2024", "Telecom Egypt Training & Development", "Three cycles covering transmission media, SDH, FTTX, routing and switching."],
];

function Seal() {
  return <span className="seal" aria-hidden="true"><img src={ASSETS.logo} alt="" /></span>;
}

function FileLabel({ children }: { children: React.ReactNode }) {
  return <p className="file-label"><span />{children}</p>;
}

export default function Home() {
  const [scanActive, setScanActive] = useState(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="light0xyagmi home">
          <Seal />
          <span><b>light0xyagmi</b><small>Mohamed Atef / research file</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#cases">Cases</a><a href="#automations">Automations</a><a href="#record">Record</a><a href="#notes">Notes</a>
        </nav>
        <a className="cv-link" href={ASSETS.cv} target="_blank" rel="noreferrer"><Download /> CV</a>
      </header>

      <main id="main-content">
        <section id="top" className={`hero ${scanActive ? "is-scanning" : ""}`}>
          <img className="hero-art" src={ASSETS.hero} alt="Light Yagami writing at his desk with Ryuk looming behind him through the window" />
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-parallax" aria-hidden="true"><i className="ink-wisp wisp-one" /><i className="ink-wisp wisp-two" /><i className="ink-wisp wisp-three" /></div>
          <div className="hero-paper-traces" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-scanline" aria-hidden="true" />
          <div className="hero-content">
            <FileLabel>CASE FILE / ACTIVE RESEARCH</FileLabel>
            <h1 className="hero-title-single">
              <span className="name-red">MOHAMED ATEF</span>
            </h1>
            <p className="hero-kicker">Cybersecurity Researcher · Bug Hunter · Penetration Tester</p>
            <p className="hero-copy">Every exposure leaves a trace. Investigating silent system vulnerabilities and mapping evidence to actionable risk.</p>
            <div className="hero-actions"><Button asChild className="primary-action"><a href="#cases">Open the case files <ArrowDownRight /></a></Button><a className="secondary-action" href="#notes"><BookOpen /> Research notes</a><button type="button" className="scan-trigger" aria-pressed={scanActive} onClick={() => setScanActive((active) => !active)}><ScanSearch /> {scanActive ? "Pause field scan" : "Inspect live trace"}</button></div>
          </div>
        </section>

        <section className="proof-strip ledger-section" aria-label="Selected proof points">
          {proof.map(([value, label, detail]) => <article key={label}><p>{value}</p><h2>{label}</h2><span>{detail}</span></article>)}
        </section>

        <section className="ledger-section content-section method-section">
          <div className="section-heading"><FileLabel>TRACE / 01</FileLabel><h2>The evidence<br /><span>comes first.</span></h2></div>
          <div className="method-list">{method.map(([number, title, copy]) => <article key={number} className="method-row"><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><Seal /></article>)}</div>
        </section>

        <section id="cases" className="ledger-section content-section cases-section">
          <div className="section-heading"><FileLabel>TRACE / 02</FileLabel><h2>Research notes<br /><span>made operational.</span></h2></div>
          <article className="feature-case"><div className="feature-image"><img src={ASSETS.xtipDashboard} alt="XTIP public attack surface management dashboard" /><span>PUBLIC PRODUCT EVIDENCE</span></div><div className="feature-copy"><FileLabel>XTIP / CASE FILE</FileLabel><h3>Explainable attack-surface management.</h3><p>Co-founding technical work for a real-time ASM platform that turns asset discovery and exposure signals into prioritized, manageable external risk.</p><dl><div><dt>SCOPE</dt><dd>Asset discovery · risk context</dd></div><div><dt>OUTPUT</dt><dd>Explainable prioritization</dd></div></dl><a href="https://xtip.cloud/en" target="_blank" rel="noreferrer">View XTIP product site <ExternalLink /></a></div></article>
          <div className="project-pair"><article><img src={ASSETS.scad} alt="SCAD accident detection project visual" /><div><FileLabel>SCAD / SAFETY</FileLabel><h3>Observe. Classify. Report.</h3><p>YOLOv8-based accident detection, vehicle tracking, severity assessment and reporting.</p></div></article><article><img src={ASSETS.learn2lead} alt="Learn2Lead educational platform project visual" /><div><FileLabel>LEARN2LEAD / EDTECH</FileLabel><h3>Learn. Build. Connect.</h3><p>Project-led learning, company partnerships and professional visibility for tech learners.</p></div></article></div>
        </section>

        <section id="automations" className="ledger-section content-section automation-section">
          <div className="section-heading"><FileLabel>TRACE / 03</FileLabel><h2>Automation<br /><span>with a paper trail.</span></h2></div>
          <article className="automation-file"><div className="automation-intro"><span className="automation-icon"><Workflow /></span><FileLabel>N8N / PRIVATE COLLECTION</FileLabel><h3>Reusable workflow exports.</h3><p>A private collection of 14 n8n workflows: ten form-intake flows and four operational automations for lead operations, support triage and feedback handling.</p></div><div className="automation-proof"><p className="artifact-status">STATE / PRIVATE TEMPLATE LIBRARY</p><div className="route"><Webhook /><span>FORM + WEBHOOK INTAKE</span><i /><Bot /><span>AI ROUTING</span><i /><ShieldCheck /><span>HUMAN REVIEW</span></div><div className="automation-stats"><div><strong>10</strong><span>Form intake exports</span></div><div><strong>04</strong><span>Operational automations</span></div></div><div className="workflow-evidence" aria-label="Workflow approval route evidence"><div className="workflow-evidence-head"><Seal /><span>APPROVAL PATH / SEALED TRACE</span><span>N8N EXPORT EVIDENCE</span></div><svg viewBox="0 0 530 95" preserveAspectRatio="none" aria-hidden="true"><path d="M20 47H163L212 20H328L384 72H510" /><path d="M212 20V74H328" /><circle cx="20" cy="47" r="6" /><circle cx="163" cy="47" r="6" /><circle cx="212" cy="20" r="6" /><circle cx="328" cy="20" r="6" /><circle cx="384" cy="72" r="6" /><circle cx="510" cy="72" r="6" /></svg><div className="workflow-evidence-labels"><span>INTAKE</span><span>TRIAGE</span><span>APPROVE</span><span>ROUTE</span></div></div><p>Verified patterns include form and webhook triggers, AI-assisted routing, approval branches, batch processing, error paths and rate-limit waits.</p><a href="https://github.com/MohamedAtefMohamed/n8n-automation-workflows" target="_blank" rel="noreferrer"><LockKeyhole /> Private source · authorized viewers <ArrowUpRight /></a></div></article>
        </section>

        <section id="record" className="ledger-section content-section record-section"><div className="section-heading"><FileLabel>TRACE / 04</FileLabel><h2>The work behind<br /><span>the finding.</span></h2></div><div className="record-list">{experience.map(([date, title, place]) => <article key={title}><span>{date}</span><div><h3>{title}</h3><p>{place}</p></div><Seal /></article>)}</div></section>

        <section id="notes" className="ledger-section content-section notes-section"><div className="section-heading"><FileLabel>TRACE / 05</FileLabel><h2>Write the<br /><span>trace down.</span></h2><a className="text-link" href="https://medium.com/@mohamedatefsarhan123" target="_blank" rel="noreferrer">Open Medium archive <ArrowUpRight /></a></div><div className="note-list"><a href="https://medium.com/@mohamedatefsarhan123" target="_blank" rel="noreferrer"><FileLabel>NOTE 01 / PUBLIC RESEARCH</FileLabel><h3>One-Click Full Account Takeover</h3><p>An unauthenticated OAuth endpoint and its account-impersonation impact.</p><span className="note-proof">OUTPUT / PUBLIC WRITE-UP</span></a><a href="https://medium.com/@mohamedatefsarhan123" target="_blank" rel="noreferrer"><FileLabel>NOTE 02 / CTF WRITE-UP</FileLabel><h3>Exploit3rs CTF: The Debug Dilemma</h3><p>Middleware abuse, debug leakage and cryptographic failure traced to the flag.</p><span className="note-proof">OUTPUT / CTF ARCHIVE</span></a></div></section>

        <section className="ledger-section content-section foundation-section"><div className="section-heading"><FileLabel>TRACE / 06</FileLabel><h2>The baseline<br /><span>before the hunt.</span></h2></div><div className="foundation-list">{foundation.map(([date, title, detail]) => <article key={title}><span>{date}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div></section>

        <section id="contact" className="contact-section"><FileLabel>OPEN CHANNEL / 07</FileLabel><h2>OPEN THE<br /><span>NEXT CASE.</span></h2><p>Open to security research, penetration testing, application security and threat-intelligence opportunities.</p><div><a className="primary-action" href="mailto:mohamedatefsarhan@proton.me"><Mail /> Send a message</a><a className="secondary-action" href="https://github.com/MohamedAtefMohamed" target="_blank" rel="noreferrer"><Github /> Inspect GitHub</a></div></section>
      </main>

      <footer><div className="footer-brand"><Seal /> <span>© 2026 light0xyagmi · Mohamed Atef</span></div><div className="footer-links"><a href="https://www.linkedin.com/in/mohamed-sarhan-590b72279/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="https://x.com/lightx0yagumi" target="_blank" rel="noreferrer" aria-label="X"><Twitter /></a><a href="https://medium.com/@mohamedatefsarhan123" target="_blank" rel="noreferrer" aria-label="Medium"><BookOpen /></a><span><CheckCircle2 /> Case file remains open</span></div></footer>
    </div>
  );
}
